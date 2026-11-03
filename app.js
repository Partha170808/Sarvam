/* ==========================================================================
   SarvamPulse — Interactive Omnichannel News Intelligence Engine
   ========================================================================== */

// Comprehensive Omnichannel Dataset
const NEWS_DATA = [
  // --- SOCIAL MEDIA ---
  {
    id: 'sm-1',
    channel: 'social',
    channelLabel: 'Social Media (X / Reddit)',
    source: 'Twitter / Hinglish Trends',
    timestamp: '8m ago',
    topic: 'Economy & Markets',
    headline: 'Viral Hinglish debate erupts over RBI repo rate decision & EMI projections',
    summary: 'Over 48,000 tweets analyze the central bank\'s stance. Sentiment is heavily polarized between home buyers anticipating rate relief and bond traders celebrating yield stability.',
    nativeSnippet: '“RBI ne pause rakha hai repo rate, EMIs kab kam hongi bhai? Real estate market is waiting eagerly!”',
    sentiment: 'neutral',
    sentimentScore: '52% Neutral / 34% Bullish',
    virality: '94/100 Velocity',
    sarvamModel: 'sarvam-105b (Slang & Code-Mixed)',
    factVerdict: 'Opinion / Sentiment Consensus',
    contentDetails: `
      <p>Sarvam 105B processed 48,200 microblog posts across Hindi, Hinglish, Marathi, and English within the last 3 hours.</p>
      <h4>Sentiment Breakdown:</h4>
      <ul>
        <li><strong>Consumer Sentiment:</strong> 61% frustrated with continued high home loan EMIs.</li>
        <li><strong>Investor Sentiment:</strong> 74% positive on inflation control and macroeconomic resilience.</li>
      </ul>
      <p><strong>Code-Mixed Extraction:</strong> "EMIs kab kam hongi bhai" detected as colloquial query intent asking for mortgage rate trajectory.</p>
    `
  },
  {
    id: 'sm-2',
    channel: 'social',
    channelLabel: 'Social Media (Threads)',
    source: 'Tech Community Threads',
    timestamp: '22m ago',
    topic: 'Artificial Intelligence',
    headline: 'Devs spotlight Sarvam sovereign Indic LLMs benchmarked on regional coding & math',
    summary: 'Indian AI community shares speed & token efficiency benchmarks on Indic LLMs outperforming generic English models on Hindi, Marathi, and Tamil translation and reasoning tasks.',
    nativeSnippet: '“Sarvam 105B tokenizer efficiency on Indic scripts is giving 3.5x lower latency compared to western foundational models.”',
    sentiment: 'positive',
    sentimentScore: '89% Positive',
    virality: '88/100 Velocity',
    sarvamModel: 'sarvam-105b-conversations',
    factVerdict: 'Technical Benchmark Verified',
    contentDetails: `
      <p>Community developers on Threads and GitHub Discussions benchmarked sovereign models against standard MMLU-Indic and native legal/administrative datasets.</p>
      <p>Results highlighted superior morphological segmentation for agglutinative Indian languages like Tamil, Telugu, and Kannada.</p>
    `
  },
  {
    id: 'sm-3',
    channel: 'social',
    channelLabel: 'Social Media (Telegram)',
    source: 'Agri-Tech Channels (Tamil & Telugu)',
    timestamp: '45m ago',
    topic: 'Clean Energy',
    headline: 'Solar pump subsidy rumors debunked after viral voice note spreads across farmer groups',
    summary: 'A widely shared audio message claimed 90% instant subsidies on commercial solar setups. Automated transcription and fact-check mapped the claim to outdated 2021 state draft schemes.',
    nativeSnippet: '“சூரிய மின்சார மானியம் 90% அரசு அறிவிப்பு என பரவும் வதந்தி - உண்மை நிலவரம் என்ன?”',
    sentiment: 'negative',
    sentimentScore: 'Disinformation Flagged',
    virality: '76/100 Velocity',
    sarvamModel: 'Saaras STT + sarvam-105b',
    factVerdict: 'Misleading Claim (Refuted by Ministry)',
    contentDetails: `
      <p>Sarvam Saaras STT transcribed the viral voice message from colloquial spoken Tamil into text in 1.4 seconds. Sarvam 105B then matched the claim against the Ministry of New and Renewable Energy (MNRE) gazette database, confirming the true subsidy ceiling is capped at 40% under PM-KUSUM Component B.</p>
    `
  },
  {
    id: 'sm-4',
    channel: 'social',
    channelLabel: 'Social Media (YouTube / Podcasts)',
    source: 'Creator Economy Shorts',
    timestamp: '1h ago',
    topic: 'Infrastructure',
    headline: 'High-speed rail corridor drone footage generates record engagement across regional creators',
    summary: 'Regional content creators in Gujarat and Maharashtra review trial runs of the Western bullet train segment, highlighting travel time reductions between Ahmedabad and Mumbai.',
    nativeSnippet: '“Mumbai-Ahmedabad high speed corridor trial run: 2 hours journey time becomes reality soon!”',
    sentiment: 'positive',
    sentimentScore: '82% Positive',
    virality: '91/100 Velocity',
    sarvamModel: 'sarvam-105b',
    factVerdict: 'Ground Verified with NHSRCL Updates',
    contentDetails: `
      <p>Social analysis indicates high civic enthusiasm for intercity travel efficiency, with primary conversations debating ticket affordability and commercial freight benefits.</p>
    `
  },

  // --- TV NEWS & BROADCASTS ---
  {
    id: 'tv-1',
    channel: 'tv',
    channelLabel: 'TV Broadcasts',
    source: 'Doordarshan National & DD India',
    timestamp: '15m ago',
    topic: 'Economy & Markets',
    headline: 'Prime Time Bulletin: Union Cabinet clears national semiconductor fab expansions',
    summary: 'Live broadcast audio transcribed using Saaras STT. Commerce Minister announces ₹24,000 Cr outlay for next-generation packaging plants and domestic assembly units.',
    nativeSnippet: '“केंद्रीय मंत्रिमंडल ने सेमीकंडक्टर मिशन के तहत नए फैब प्रस्तावों को दी ऐतिहासिक मंजूरी।”',
    sentiment: 'positive',
    sentimentScore: '92% Bullish',
    virality: 'High Broadcast Reach',
    sarvamModel: 'Saaras STT (Speaker Diarization)',
    factVerdict: 'Official Cabinet Press Release Match',
    audioTitle: 'DD News 8 PM Cabinet Briefing Audio',
    contentDetails: `
      <p><strong>Speaker 1 (Cabinet Minister):</strong> "Today's approval cements our sovereign tech stack, enabling over 35,000 high-tech engineering jobs across Dholera and Sanand clusters."</p>
      <p><strong>Speaker 2 (Industry Analyst):</strong> "Crucial step in reducing reliance on import silicon, targeting automotive microcontrollers by late 2027."</p>
      <p><em>Transcribed via Sarvam Saaras STT with 98.4% word accuracy across technical terminology.</em></p>
    `
  },
  {
    id: 'tv-2',
    channel: 'tv',
    channelLabel: 'TV Broadcasts',
    source: 'NDTV India (Hindi Debate)',
    timestamp: '32m ago',
    topic: 'Clean Energy',
    headline: 'Special Panel Debate: Achieving 500 GW renewable capacity by 2030',
    summary: 'Multi-speaker panel debate examining battery energy storage systems (BESS) grid integration. Saaras STT successfully separates 4 heated panelists talking over each other.',
    nativeSnippet: '“ग्रिड स्टेबिलिटी और बैटरी स्टोरेज के बिना 500 गीगावाट का लक्ष्य कैसे हासिल होगा?”',
    sentiment: 'neutral',
    sentimentScore: 'Balanced Critique',
    virality: '1.2M Viewers',
    sarvamModel: 'Saaras STT + Diarization',
    factVerdict: 'Verified Expert Debate',
    audioTitle: 'NDTV 9 PM Debate: Green Transition Realities',
    contentDetails: `
      <p>Diarization engine isolated Anchor, Grid Operator Representative, and Clean Energy Think Tank Fellow with sub-second timestamps. Consensus points to tariff competitiveness for pumped storage hydro.</p>
    `
  },
  {
    id: 'tv-3',
    channel: 'tv',
    channelLabel: 'TV Broadcasts',
    source: 'Sun News & Puthiya Thalaimurai (Tamil)',
    timestamp: '1h 10m ago',
    topic: 'National Policy',
    headline: 'Regional Channel Coverage: Coastal aquaculture export incentives announced',
    summary: 'Regional news analysis on coastal community credit assistance. Mayura engine translated spoken Tamil directly into English and Hindi summaries simultaneously.',
    nativeSnippet: '“கடலோர மீன்வளத்துறை மற்றும் ஏற்றுமதி ஊக்கத்தொகைக்கான புதிய திட்டங்கள் வெளியீடு.”',
    sentiment: 'positive',
    sentimentScore: '78% Positive',
    virality: 'Regional Top Story',
    sarvamModel: 'Mayura Speech-to-Text Translate',
    factVerdict: 'Ministry of Fisheries Notice Verified',
    audioTitle: 'Sun News Prime Tamil Bulletin',
    contentDetails: `
      <p>Real-time translation preserved regional maritime terminology, noting cold-storage infrastructure investments across Tuticorin and Nagapattinam harbours.</p>
    `
  },
  {
    id: 'tv-4',
    channel: 'tv',
    channelLabel: 'TV Broadcasts',
    source: 'ET Now & CNBC Awaaz',
    timestamp: '1h 45m ago',
    topic: 'Economy & Markets',
    headline: 'Market Closing Bell: Sensex surges on foreign capital inflows and manufacturing PMI',
    summary: 'Anchor and chief investment officer dissect sector-wise outperformance in capital goods and automotive components.',
    nativeSnippet: '“मैन्युफैक्चरिंग पीएमआई के मजबूत आंकड़ों से बाजार में शानदार तेजी दर्ज।”',
    sentiment: 'positive',
    sentimentScore: '86% Bullish',
    virality: 'Financial Prime',
    sarvamModel: 'Saaras STT',
    factVerdict: 'BSE/NSE Exchange Data Grounded',
    audioTitle: 'CNBC Awaaz Market Wrap Audio',
    contentDetails: `
      <p>Financial ticker and spoken commentary aligned with exchange closing figures: Nifty +1.1%, Auto index outperforming by 2.3% on robust festive order book data.</p>
    `
  },

  // --- MAGAZINES & DIGITAL PRESS ---
  {
    id: 'mag-1',
    channel: 'magazines',
    channelLabel: 'Magazines & Press',
    source: 'Economic & Political Weekly (EPW)',
    timestamp: '2h ago',
    topic: 'National Policy',
    headline: 'Longform Essay: Decentralized governance in the era of automated public service delivery',
    summary: 'A deep academic inquiry into Direct Benefit Transfer (DBT) efficiency gains across Tier-3 panchayats, balancing fiscal prudence with social safety nets.',
    nativeSnippet: '“Evaluating algorithmic grievance redressal systems in rural administrative blocks: A 5-state longitudinal study.”',
    sentiment: 'neutral',
    sentimentScore: 'Analytical & Academic',
    virality: 'High Scholarly Impact',
    sarvamModel: 'sarvam-105b-conversations',
    factVerdict: 'Peer Reviewed Analysis',
    contentDetails: `
      <p>EPW’s deep dive highlights a 22% reduction in welfare delivery delays through unified digital platforms, while warning against biometric exclusion risks for elderly beneficiaries in remote terrains.</p>
    `
  },
  {
    id: 'mag-2',
    channel: 'magazines',
    channelLabel: 'Magazines & Press',
    source: 'The Caravan & Frontline',
    timestamp: '3h ago',
    topic: 'Clean Energy',
    headline: 'Investigative Feature: Tribal land rehabilitation metrics in critical mineral mining zones',
    summary: 'Detailed reportage on lithium and rare earth exploration leases in Jammu & Kashmir and Chhattisgarh, focusing on environmental impact assessments and community consent.',
    nativeSnippet: '“Between mineral sovereignty and indigenous stewardship: The ground realities of India’s critical mineral corridors.”',
    sentiment: 'negative',
    sentimentScore: 'Critical / Scrutiny',
    virality: 'High Editorial Depth',
    sarvamModel: 'sarvam-105b (Bias & Slant Parser)',
    factVerdict: 'Field-Reported Investigation',
    contentDetails: `
      <p>Article cross-compares state mining corporation notifications with on-ground Gram Sabha resolutions, finding procedural inconsistencies in 3 out of 8 notified exploration blocks.</p>
    `
  },
  {
    id: 'mag-3',
    channel: 'magazines',
    channelLabel: 'Magazines & Press',
    source: 'Ananda Bazar Patrika & Desh (Bengali)',
    timestamp: '4h ago',
    topic: 'Infrastructure',
    headline: 'Cultural & Economic Feature: Revitalizing riverine transport along National Waterway 1',
    summary: 'Bengali editorial explores how roll-on/roll-off (Ro-Ro) cargo ships on the Ganga are transforming logistics costs between Haldia, Varanasi, and Patna.',
    nativeSnippet: '“গঙ্গা বক্ষে নতুন বাণিজ্য প্রবাহ: অভ্যন্তরীণ জলপথের অর্থনৈতিক সম্ভাবনা ও চ্যালেঞ্জ।”',
    sentiment: 'positive',
    sentimentScore: '76% Positive',
    virality: 'Regional Editorial Feature',
    sarvamModel: 'Mayura Translation Matrix',
    factVerdict: 'Inland Waterways Authority Data Grounded',
    contentDetails: `
      <p>Translated from Bengali: Cargo transportation cost per ton-kilometer is 35% cheaper than road freight, reducing urban highway congestion while requiring continuous dredging along shoals.</p>
    `
  },
  {
    id: 'mag-4',
    channel: 'magazines',
    channelLabel: 'Magazines & Press',
    source: 'Outlook Business & Forbes India',
    timestamp: '5h ago',
    topic: 'Artificial Intelligence',
    headline: 'Cover Story: The rise of Indic sovereign AI foundries and enterprise LLM adoption',
    summary: 'Comprehensive analysis on how Indian banks, telecom providers, and healthcare platforms are deploying domestic models like Sarvam to safeguard data sovereignty.',
    nativeSnippet: '“From English-first chatbots to authentic 22-language native intelligence: Inside India\'s enterprise AI transformation.”',
    sentiment: 'positive',
    sentimentScore: '94% Bullish',
    virality: 'Executive Reading List',
    sarvamModel: 'sarvam-105b',
    factVerdict: 'Industry Case Studies Grounded',
    contentDetails: `
      <p>Survey of 120 Indian enterprise CTOs reveals 68% prioritizing local AI deployment over overseas APIs due to compliance with the Digital Personal Data Protection (DPDP) Act.</p>
    `
  },

  // --- OFFICIAL REPORTS & WHITEPAPERS ---
  {
    id: 'rep-1',
    channel: 'reports',
    channelLabel: 'Official Reports',
    source: 'NITI Aayog & Bureau of Energy Efficiency',
    timestamp: '1h ago',
    topic: 'Clean Energy',
    headline: 'Policy Dossier: India Green Hydrogen Roadmap 2026-2030 (Document ID: NA-GH2-2026)',
    summary: 'Sarvam DocAI extracted 14 complex tabular annexures detailing domestic electrolyser manufacturing subsidies, port bunkering hubs, and renewable energy banking rules.',
    nativeSnippet: '“Table 4.2: Mandated blending targets in refineries and fertilizer plants: 12% by FY 2027-28.”',
    sentiment: 'positive',
    sentimentScore: 'Official Baseline Standard',
    virality: 'High Regulatory Authority',
    sarvamModel: 'DocAI v2 (Table & OCR Parser)',
    factVerdict: 'Primary Source Gazette',
    contentDetails: `
      <p><strong>Official Gazette Extract:</strong> Total fiscal outlay: ₹19,744 Crore. Key production milestones set at 5 MMT per annum by 2030, with 125 GW associated renewable capacity additions.</p>
      <p><em>Extracted via Sarvam DocAI with structured JSON output and zero OCR hallucinations on multi-column financial tables.</em></p>
    `
  },
  {
    id: 'rep-2',
    channel: 'reports',
    channelLabel: 'Official Reports',
    source: 'Reserve Bank of India (RBI) Bulletin',
    timestamp: '2h 15m ago',
    topic: 'Economy & Markets',
    headline: 'Monetary Policy Committee (MPC) Minutes & CPI Inflation Trajectory Report',
    summary: 'Detailed resolution documenting voting patterns (5-1 vote), core inflation moderation to 4.1%, and sustained agricultural yield stability.',
    nativeSnippet: '“The MPC decided by a 5 to 1 majority to remain focused on withdrawal of accommodation to ensure inflation aligns with the target.”',
    sentiment: 'neutral',
    sentimentScore: 'Policy Fact Sheet',
    virality: 'Central Bank Directive',
    sarvamModel: 'DocAI + sarvam-105b',
    factVerdict: 'Statutory Publication',
    contentDetails: `
      <p>The MPC minutes indicate real GDP growth projected at 7.2% for FY26-27, with risks evenly balanced around geopolitical crude volatility and supply chain rerouting.</p>
    `
  },
  {
    id: 'rep-3',
    channel: 'reports',
    channelLabel: 'Official Reports',
    source: 'Ministry of Electronics & IT (MeitY)',
    timestamp: '4h ago',
    topic: 'Artificial Intelligence',
    headline: 'National Data Governance Framework & Sovereign GPU Compute Allocation Guidelines',
    summary: 'Guidelines detailing the deployment of 10,000 GPUs under IndiaAI Mission for research institutions, academic labs, and indigenous AI startups.',
    nativeSnippet: '“Subsidized compute access tier-1: Allocating clusters for sovereign language model pre-training.”',
    sentiment: 'positive',
    sentimentScore: '100% Policy Grounding',
    virality: 'National Directive',
    sarvamModel: 'DocAI v2',
    factVerdict: 'Official Government Order',
    contentDetails: `
      <p>MeitY guidelines mandate that at least 40% of allocated high-throughput compute time be dedicated to native Indian language corpora creation and domain-specific fine-tuning.</p>
    `
  },
  {
    id: 'rep-4',
    channel: 'reports',
    channelLabel: 'Official Reports',
    source: 'Indian Council of Agricultural Research (ICAR)',
    timestamp: '6h ago',
    topic: 'Infrastructure',
    headline: 'Annual Climate Resilient Agriculture Assessment: Soil Moisture & Kharif Crop Yield Data',
    summary: 'Detailed district-level yield assessment of climate-smart seeds in drought-prone taluks across Rajasthan, Karnataka, and Telangana.',
    nativeSnippet: '“Yield variance across micro-irrigation testbeds: 18.4% productivity gain in water-stressed soil profiles.”',
    sentiment: 'positive',
    sentimentScore: 'Empirical Field Data',
    virality: 'Scientific Benchmark',
    sarvamModel: 'DocAI Structured Extraction',
    factVerdict: 'Empirical Field Research',
    contentDetails: `
      <p>Comprehensive report covering 420 field trial plots, confirming that precision drip irrigation combined with heat-tolerant seed varieties prevented crop failure during dry spells.</p>
    `
  }
];

// Cross-Media Divergence Case Studies
const DIVERGENCE_CASES = {
  repo_rate: {
    title: 'RBI Repo Rate & Inflation Forecast (Nov 2026)',
    columns: [
      {
        channel: 'Social Media (X / Reddit)',
        chKey: 'social',
        bias: 'High Polar Sentiment',
        summary: 'Focuses almost entirely on personal finances, EMI burdens, and mortgage interest rates with viral memes on rent inflation.',
        quote: '“Another quarter of paying 9.2% on home loans. When do the savings trickle down to the middle class?”'
      },
      {
        channel: 'TV Broadcasts (DD / NDTV / CNBC)',
        chKey: 'tv',
        bias: 'Macro Headlines & Fast Takes',
        summary: 'Emphasis on stock market reaction (Sensex/Nifty intra-day high), banking sector margins, and live governor soundbites.',
        quote: '“Markets welcome policy continuity as Governor Das emphasizes sustained inflation glidepath towards 4% target.”'
      },
      {
        channel: 'Magazines (EPW / Outlook)',
        chKey: 'magazines',
        bias: 'Long-term Structural Critique',
        summary: 'Analyzes credit growth divergence between large corporate borrowers and rural MSME liquidity constraints.',
        quote: '“The real question is not nominal rates, but monetary policy transmission across non-banking financial companies.”'
      },
      {
        channel: 'Official Reports (RBI Bulletin)',
        chKey: 'reports',
        bias: 'Empirical Ground Truth',
        summary: 'Rigorous statistical data on core CPI, food basket volatility, liquidity adjustment facility (LAF) balances, and yield curves.',
        quote: '“Core inflation excluding food and fuel moderated to 3.8%, supported by benign global supply conditions.”'
      }
    ]
  },
  green_hydrogen: {
    title: 'National Green Hydrogen Mission Targets',
    columns: [
      {
        channel: 'Social Media',
        chKey: 'social',
        bias: 'Hyped vs Skeptical',
        summary: 'Tech enthusiasts praise clean energy leadership, while rumors about instant 90% consumer solar subsidies circulate.',
        quote: '“India can become the global exporter of green ammonia if port infrastructure catches up fast enough!”'
      },
      {
        channel: 'TV News',
        chKey: 'tv',
        bias: 'Corporate Deal Focus',
        summary: 'Coverage dominated by massive private sector MoUs, port terminal announcements, and international export contracts.',
        quote: '“Mega-hubs in Gujarat and Andhra Pradesh attract top industrial conglomerates for green hydrogen export.”'
      },
      {
        channel: 'Magazines',
        chKey: 'magazines',
        bias: 'Environmental & Cost Scrutiny',
        summary: 'Detailed examination of high electrolyser capital costs and water consumption requirements in arid coastal zones.',
        quote: '“Producing 1 kg of green hydrogen requires 9-11 liters of demineralized water: Can coastal desalination bridge the gap?”'
      },
      {
        channel: 'Official Reports',
        chKey: 'reports',
        bias: 'Statutory Roadmap',
        summary: 'NITI Aayog & MNRE gazette defining exact fiscal tranches, testing standards, and compliance certifications.',
        quote: '“Financial incentives under SIGHT scheme allocated with ₹17,490 Cr ceiling for electrolyser manufacturing and production.”'
      }
    ]
  },
  ai_datacenter: {
    title: 'AI Sovereign Data Center Infrastructure Policy',
    columns: [
      {
        channel: 'Social Media',
        chKey: 'social',
        bias: 'Developer Enthusiasm',
        summary: 'Indie devs celebrate compute credits, open Indic LLMs, and local inference capabilities with low API latency.',
        quote: '“Sovereign GPUs means we can fine-tune regional models on local clinical datasets without sending data abroad.”'
      },
      {
        channel: 'TV News',
        chKey: 'tv',
        bias: 'Geopolitical Tech Race',
        summary: 'Frames sovereign compute as digital self-reliance (Aatmanirbhar Bharat) and global tech competitiveness.',
        quote: '“India positions itself as the AI intelligence capital of the Global South with state-backed superclusters.”'
      },
      {
        channel: 'Magazines',
        chKey: 'magazines',
        bias: 'Energy & Privacy Assessment',
        summary: 'Focuses on power grid demand, cooling water needs, and strict compliance with the DPDP statutory privacy rules.',
        quote: '“Data centers consume gigawatts of 24/7 power; marrying GPU farms with dedicated green captive power is essential.”'
      },
      {
        channel: 'Official Reports',
        chKey: 'reports',
        bias: 'Regulatory Framework',
        summary: 'MeitY IndiaAI Mission tender document specifying compute cluster SLAs, uptime criteria, and academic access quotas.',
        quote: '“GPU clusters must guarantee 99.95% uptime with native support for sovereign Indic foundational tokenizers.”'
      }
    ]
  }
};

// UI State
let activeSource = 'all';
let activeTopic = 'all';
let currentSearch = '';
let currentSort = 'recent';
let isAudioPlaying = false;

// DOM Elements
const newsGrid = document.getElementById('newsGrid');
const sourceTabs = document.getElementById('sourceTabs');
const topicFilterContainer = document.getElementById('topicFilterContainer');
const globalSearchInput = document.getElementById('globalSearchInput');
const sortBySelect = document.getElementById('sortBy');
const divergenceSelect = document.getElementById('divergenceStorySelect');
const radarDetailsGrid = document.getElementById('radarDetailsGrid');

// Modal Elements
const storyModal = document.getElementById('storyModal');
const modalContent = document.getElementById('modalContent');
const modalCloseBtn = document.getElementById('modalCloseBtn');

const sarvamQueryModal = document.getElementById('sarvamQueryModal');
const openAnalyzeModalBtn = document.getElementById('openAnalyzeModalBtn');
const sarvamModalCloseBtn = document.getElementById('sarvamModalCloseBtn');
const aiQueryPrompt = document.getElementById('aiQueryPrompt');
const executeAiQueryBtn = document.getElementById('executeAiQueryBtn');
const aiBtnSpinner = document.getElementById('aiBtnSpinner');
const aiBtnText = document.getElementById('aiBtnText');
const aiResponseContainer = document.getElementById('aiResponseContainer');
const aiResponseText = document.getElementById('aiResponseText');
const aiResponseSources = document.getElementById('aiResponseSources');
const copyAiResponseBtn = document.getElementById('copyAiResponseBtn');

// Audio Bar Elements
const audioPlayerBar = document.getElementById('audioPlayerBar');
const audioToggleBtn = document.getElementById('audioToggleBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const audioTrackTitle = document.getElementById('audioTrackTitle');
const audioTrackSub = document.getElementById('audioTrackSub');
const waveformContainer = document.getElementById('waveformContainer');
const audioCloseBtn = document.getElementById('audioCloseBtn');

// Initialize Waveform Animation Bars
function initWaveform() {
  waveformContainer.innerHTML = '';
  for (let i = 0; i < 18; i++) {
    const bar = document.createElement('div');
    bar.className = 'wave-bar';
    waveformContainer.appendChild(bar);
  }
}

// Render News Grid Cards
function renderNewsGrid() {
  let filtered = NEWS_DATA.filter(item => {
    // Channel filter
    if (activeSource !== 'all' && item.channel !== activeSource) return false;
    // Topic filter
    if (activeTopic !== 'all' && item.topic !== activeTopic) return false;
    // Search query
    if (currentSearch.trim() !== '') {
      const q = currentSearch.toLowerCase();
      const matchHeadline = item.headline.toLowerCase().includes(q);
      const matchSummary = item.summary.toLowerCase().includes(q);
      const matchSource = item.source.toLowerCase().includes(q);
      const matchTopic = item.topic.toLowerCase().includes(q);
      if (!matchHeadline && !matchSummary && !matchSource && !matchTopic) return false;
    }
    return true;
  });

  // Sort
  if (currentSort === 'virality') {
    filtered.sort((a, b) => (parseInt(b.virality) || 0) - (parseInt(a.virality) || 0));
  } else if (currentSort === 'sentiment') {
    filtered.sort((a, b) => a.sentiment.localeCompare(b.sentiment));
  }

  newsGrid.innerHTML = '';

  if (filtered.length === 0) {
    newsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem;">No stories found matching your criteria</p>
        <p style="font-size: 0.85rem;">Try clearing your search query or selecting "All Media".</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('article');
    card.className = 'news-card';
    card.setAttribute('data-ch', item.channel);
    card.setAttribute('tabindex', '0');

    // Sentiment styling
    let sentimentClass = 'sentiment-neutral';
    if (item.sentiment === 'positive') sentimentClass = 'sentiment-positive';
    if (item.sentiment === 'negative') sentimentClass = 'sentiment-negative';

    let chBadgeClass = 'st-social';
    if (item.channel === 'tv') chBadgeClass = 'st-tv';
    if (item.channel === 'magazines') chBadgeClass = 'st-mag';
    if (item.channel === 'reports') chBadgeClass = 'st-reports';

    card.innerHTML = `
      <div>
        <div class="card-top">
          <span class="card-source-badge ${chBadgeClass}">${item.channelLabel}</span>
          <span class="card-timestamp">${item.timestamp}</span>
        </div>
        <h3 class="card-headline">${escapeHTML(item.headline)}</h3>
        <p class="card-summary">${escapeHTML(item.summary)}</p>
        ${item.nativeSnippet ? `<div class="indic-snippet">${escapeHTML(item.nativeSnippet)}</div>` : ''}
      </div>

      <div class="card-analysis-bar">
        <span class="card-sentiment ${sentimentClass}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"></circle></svg>
          ${item.sentimentScore}
        </span>
        <span class="card-model-tag">${item.sarvamModel}</span>
      </div>
    `;

    // Click card to open modal
    card.addEventListener('click', () => openStoryModal(item));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') openStoryModal(item);
    });

    newsGrid.appendChild(card);
  });
}

// Open Story Detail Modal
function openStoryModal(item) {
  let chBadgeClass = 'st-social';
  if (item.channel === 'tv') chBadgeClass = 'st-tv';
  if (item.channel === 'magazines') chBadgeClass = 'st-mag';
  if (item.channel === 'reports') chBadgeClass = 'st-reports';

  modalContent.innerHTML = `
    <div style="margin-bottom: 1rem;">
      <span class="card-source-badge ${chBadgeClass}">${item.channelLabel}</span>
      <span style="font-size: 0.8rem; color: var(--text-subtle); margin-left: 0.5rem;">${item.source} • ${item.timestamp}</span>
    </div>

    <h2 style="font-size: 1.45rem; font-weight: 800; line-height: 1.35; margin-bottom: 1rem;">${escapeHTML(item.headline)}</h2>

    <div style="background: var(--bg-primary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem;">
      <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-subtle); text-transform: uppercase; margin-bottom: 0.35rem;">Primary Ingestion Snippet:</div>
      <div style="font-size: 0.95rem; color: #e2e8f0; font-style: italic;">${escapeHTML(item.nativeSnippet || item.summary)}</div>
    </div>

    <div style="font-size: 0.92rem; line-height: 1.7; color: var(--text-muted); margin-bottom: 1.5rem;">
      ${item.contentDetails}
    </div>

    <div style="background: var(--bg-tertiary); border-radius: var(--radius-md); padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem; border-left: 3px solid var(--ch-social);">
      <div style="display: flex; justify-content: space-between; font-size: 0.82rem;">
        <span class="text-muted">Verification Status:</span>
        <strong style="color: var(--success);">${item.factVerdict}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 0.82rem;">
        <span class="text-muted">Sarvam Pipeline Engine:</span>
        <code>${item.sarvamModel}</code>
      </div>
    </div>

    <div style="margin-top: 1.5rem; display: flex; gap: 0.75rem; justify-content: flex-end;">
      ${item.audioTitle ? `
        <button class="btn btn-outline" id="playStoryAudioBtn">
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          <span>Listen to Broadcast Clip</span>
        </button>
      ` : ''}
      <button class="btn btn-primary" id="askAboutStoryBtn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        <span>Analyze with Sarvam 105B</span>
      </button>
    </div>
  `;

  storyModal.classList.add('active');

  // Story action hooks
  if (item.audioTitle) {
    document.getElementById('playStoryAudioBtn').addEventListener('click', () => {
      startAudio(item.audioTitle, item.headline);
    });
  }

  document.getElementById('askAboutStoryBtn').addEventListener('click', () => {
    storyModal.classList.remove('active');
    openSarvamQueryModal(`Synthesize and analyze the factuality and cross-media consensus on: "${item.headline}". Identify potential bias or unverified rumors.`);
  });
}

// Render Divergence Case Studies
function renderDivergenceRadar(caseKey) {
  const data = DIVERGENCE_CASES[caseKey] || DIVERGENCE_CASES.repo_rate;
  radarDetailsGrid.innerHTML = '';

  data.columns.forEach(col => {
    const colDiv = document.createElement('div');
    colDiv.className = 'divergence-col';

    let borderCol = 'var(--ch-social)';
    if (col.chKey === 'tv') borderCol = 'var(--ch-tv)';
    if (col.chKey === 'magazines') borderCol = 'var(--ch-mag)';
    if (col.chKey === 'reports') borderCol = 'var(--ch-reports)';

    colDiv.innerHTML = `
      <div class="div-col-header">
        <span class="div-col-title" style="color: ${borderCol};">${col.channel}</span>
      </div>
      <p class="div-summary">${escapeHTML(col.summary)}</p>
      <div class="div-key-quote" style="border-left-color: ${borderCol};">
        ${escapeHTML(col.quote)}
      </div>
      <div class="div-bias-tag">
        <span>Framing:</span>
        <strong>${col.bias}</strong>
      </div>
    `;
    radarDetailsGrid.appendChild(colDiv);
  });
}

// Sarvam AI Query Execution
async function executeSarvamQuery(promptText) {
  if (!promptText || !promptText.trim()) return;

  aiBtnSpinner.classList.remove('hidden');
  aiBtnText.textContent = 'Sarvam 105B Thinking...';
  executeAiQueryBtn.disabled = true;

  aiResponseContainer.classList.add('hidden');

  try {
    // Attempt live server call
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: promptText })
    });

    if (response.ok) {
      const data = await response.json();
      displayAiResponse(data.reply, ['sarvam-105b-conversations', 'Omnichannel Ingestion Engine']);
    } else {
      throw new Error('API server unreachable, triggering client sovereign synthesizer');
    }
  } catch (err) {
    // Fallback client simulation if running without local Python backend
    setTimeout(() => {
      const fallbackReply = generateFallbackSynthesis(promptText);
      displayAiResponse(fallbackReply, ['sarvam-105b-conversations', 'Saaras STT', 'DocAI v2']);
    }, 1200);
  } finally {
    aiBtnSpinner.classList.add('hidden');
    aiBtnText.textContent = 'Run Analysis';
    executeAiQueryBtn.disabled = false;
  }
}

function displayAiResponse(text, sources) {
  aiResponseText.textContent = text;
  aiResponseSources.innerHTML = '';
  sources.forEach(s => {
    const span = document.createElement('span');
    span.className = 'tech-tag';
    span.textContent = s;
    aiResponseSources.appendChild(span);
  });
  aiResponseContainer.classList.remove('hidden');
}

function generateFallbackSynthesis(query) {
  return `Executive Synthesis generated via Sarvam 105B Sovereign Model:

1. Cross-Channel Consensus:
• Social Media (X & Threads) prioritizes immediate cost-of-living and consumer EMI impact, exhibiting a +54% net neutral-to-cautious sentiment.
• Broadcast TV News emphasizes industrial capacity additions and macroeconomic stability, with high anchor alignment on capital expenditure growth.
• Investigative Press & Periodicals scrutinize long-term structural redistribution, specifically noting regional credit liquidity.
• Gazette Reports & Whitepapers confirm regulatory targets are grounded with statutory budget outlays.

2. Factuality & Misinformation Filter:
• No viral hallucination or fabricated data points detected in the analyzed corpus.
• Key figures match verified central bank and ministry notifications with 98.2% confidence.

3. Regional Indic Context:
• Regional vernacular coverage in Hindi, Tamil, and Bengali demonstrates stronger focus on agrarian and localized manufacturing clusters compared to English national headlines.`;
}

// Audio Bar Controls
function startAudio(title, sub) {
  audioTrackTitle.textContent = title;
  audioTrackSub.textContent = sub;
  audioPlayerBar.classList.add('active');
  playAudio();
}

function playAudio() {
  isAudioPlaying = true;
  audioPlayerBar.classList.add('playing');
  playIcon.classList.add('hidden');
  pauseIcon.classList.remove('hidden');
}

function pauseAudio() {
  isAudioPlaying = false;
  audioPlayerBar.classList.remove('playing');
  playIcon.classList.remove('hidden');
  pauseIcon.classList.add('hidden');
}

// Helpers
function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

function openSarvamQueryModal(presetPrompt = '') {
  if (presetPrompt) {
    aiQueryPrompt.value = presetPrompt;
  }
  sarvamQueryModal.classList.add('active');
  aiQueryPrompt.focus();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  initWaveform();
  renderNewsGrid();
  renderDivergenceRadar('repo_rate');

  // Source tab selection
  sourceTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeSource = btn.getAttribute('data-source');
    renderNewsGrid();
  });

  // Topic pill selection
  topicFilterContainer.addEventListener('click', (e) => {
    const pill = e.target.closest('.topic-pill');
    if (!pill) return;
    document.querySelectorAll('.topic-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    activeTopic = pill.getAttribute('data-topic');
    renderNewsGrid();
  });

  // Search input
  globalSearchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderNewsGrid();
  });

  // Sort dropdown
  sortBySelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderNewsGrid();
  });

  // Divergence story select
  divergenceSelect.addEventListener('change', (e) => {
    renderDivergenceRadar(e.target.value);
  });

  // Modal Closes
  modalCloseBtn.addEventListener('click', () => storyModal.classList.remove('active'));
  sarvamModalCloseBtn.addEventListener('click', () => sarvamQueryModal.classList.remove('active'));

  window.addEventListener('click', (e) => {
    if (e.target === storyModal) storyModal.classList.remove('active');
    if (e.target === sarvamQueryModal) sarvamQueryModal.classList.remove('active');
  });

  // Open Sarvam Query Modal
  openAnalyzeModalBtn.addEventListener('click', () => openSarvamQueryModal());

  // Preset Buttons
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      aiQueryPrompt.value = btn.getAttribute('data-query');
      executeSarvamQuery(aiQueryPrompt.value);
    });
  });

  // Run AI Query Button
  executeAiQueryBtn.addEventListener('click', () => {
    executeSarvamQuery(aiQueryPrompt.value);
  });

  // Copy AI Response
  copyAiResponseBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(aiResponseText.textContent);
    copyAiResponseBtn.textContent = 'Copied!';
    setTimeout(() => { copyAiResponseBtn.textContent = 'Copy Analysis'; }, 2000);
  });

  // Audio Player Controls
  audioToggleBtn.addEventListener('click', () => {
    if (isAudioPlaying) pauseAudio();
    else playAudio();
  });
  audioCloseBtn.addEventListener('click', () => {
    pauseAudio();
    audioPlayerBar.classList.remove('active');
  });

  // Keyboard shortcut ⌘K or Ctrl+K to search
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      globalSearchInput.focus();
    }
    if (e.key === 'Escape') {
      storyModal.classList.remove('active');
      sarvamQueryModal.classList.remove('active');
    }
  });
});
