# SarvamPulse 🛰️
### Omnichannel Multilingual News & Media Intelligence Platform

SarvamPulse is an omnichannel media intelligence engine powered by sovereign Indic AI models from [Sarvam AI](https://sarvam.ai). It ingests, analyzes, and cross-references news across four distinct channels in real time:

1. **Social Media (X, Reddit, Threads, Telegram):** Slang, Hinglish/vernacular extraction, sentiment clustering, and viral rumor tracking.
2. **TV News Channels & Broadcasts:** Speech transcription, multi-speaker diarization, and synthetic audio digests.
3. **Magazines & Digital Press:** Nuanced editorial perspectives, political slant analysis, and cross-lingual translation across 22 Indic languages.
4. **Official Reports & Whitepapers:** High-precision data extraction from government gazettes, regulatory filings, and research papers with zero hallucination.

---

## 🧠 Sarvam AI Models Integrated

| Channel / Capability | Sarvam AI Model / API | Functionality |
| :--- | :--- | :--- |
| **Chat & Synthesis** | `sarvam-105b-conversations` | Multilingual reasoning, fact-checking, and narrative analysis |
| **TV Speech Recognition**| `Saaras STT` | Live broadcast audio transcription with speaker diarization |
| **Audio Synthesis** | `Bulbul TTS` | Natural regional Indian voice generation |
| **Cross-Press Translation**| `Mayura Translation` | Direct translation across 22 Indic languages |
| **Dossiers & Gazette Reports**| `DocAI v2` | High-precision table extraction and structured OCR |

---

## 🚀 Quickstart

### 1. Prerequisites
- Python 3.9+
- A Sarvam AI API Key (sign up at [dashboard.sarvam.ai](https://dashboard.sarvam.ai))

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/<your-username>/sarvam-pulse.git
cd sarvam-pulse
pip install sarvamai
```

### 3. Configure API Key
Create a `.env` file in the project root (never commit this file):
```bash
cp .env.example .env
```
Edit `.env` and add your Sarvam subscription key:
```env
SARVAM_API_KEY=your_actual_api_key_here
```

### 4. Run Verification Script
To test your API connection:
```bash
python3 main.py
```

### 5. Launch the Web Interface
Start the local server:
```bash
python3 server.py
```
Open **[http://localhost:8000](http://localhost:8000)** in your browser.

---

## 📁 Project Structure

```text
├── index.html       # Responsive frontend dashboard with glassmorphism UI
├── styles.css       # Deep CSS styling, dark theme, animations & breakpoints
├── app.js           # Interactive controller, radar comparison bench, search
├── server.py        # Python HTTP server with live Sarvam 105B AI endpoint
├── main.py          # Standalone verification script
├── .env.example     # Template for required environment variables
├── .gitignore       # Prevents .env and build files from being committed
└── README.md        # Project documentation
```

---

## 🛡️ License
MIT License. Built with [Sarvam AI SDK](https://docs.sarvam.ai/api/getting-started/welcome).
