import http.server
import json
import os
import socketserver
from pathlib import Path

# Load environment variables from .env
env_file = Path(__file__).resolve().parent / ".env"
if env_file.exists():
    for line in env_file.read_text().splitlines():
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            k, v = line.split("=", 1)
            os.environ.setdefault(k.strip(), v.strip().strip("'\""))

from sarvamai import SarvamAI

PORT = 8000
DIRECTORY = Path(__file__).resolve().parent

# Initialize SarvamAI client securely
sarvam_client = None
if os.environ.get("SARVAM_API_KEY"):
    sarvam_client = SarvamAI(api_subscription_key=os.environ.get("SARVAM_API_KEY"))

class NewsPulseHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)

    def do_POST(self):
        if self.path == "/api/analyze":
            content_length = int(self.headers.get("Content-Length", 0))
            post_data = self.rfile.read(content_length)

            try:
                body = json.loads(post_data.decode("utf-8"))
                user_prompt = body.get("prompt", "")

                if not sarvam_client:
                    self.send_response(500)
                    self.send_header("Content-Type", "application/json")
                    self.end_headers()
                    self.wfile.write(json.dumps({"error": "SARVAM_API_KEY not configured"}).encode("utf-8"))
                    return

                system_instruction = (
                    "You are SarvamPulse AI, an omnichannel news & intelligence analyst. "
                    "Analyze the given news topic or claim across four media vectors: "
                    "1) Social Media (slang, virality, sentiment), "
                    "2) TV News Channels (broadcast transcripts, panel debate stance), "
                    "3) Magazines & Press (editorial slant, regional coverage), and "
                    "4) Official Reports & Gazettes (statutory grounding, data verification). "
                    "Provide a crisp, objective, multi-channel breakdown."
                )

                response = sarvam_client.chat.completions(
                    model="sarvam-105b-conversations",
                    messages=[
                        {"role": "system", "content": system_instruction},
                        {"role": "user", "content": user_prompt}
                    ],
                )

                reply_text = response.choices[0].message.content

                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"reply": reply_text}).encode("utf-8"))

            except Exception as e:
                self.send_response(500)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))
        else:
            self.send_response(404)
            self.end_headers()

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), NewsPulseHandler) as httpd:
        print(f"SarvamPulse Server running at http://localhost:{PORT}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass
