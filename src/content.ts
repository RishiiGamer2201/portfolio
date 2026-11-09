// All visible copy lives here. Source of truth: RESUME/RISHII_KUMAR_SINGH_RESUME_REFERENCE.md.
// Rules: no em/en dashes or emojis, unpublished work by area and role only,
// no WESEE metrics (disclosure gate), MaCVi credited to the team.

export const updated = 'November 2026'

export const profile = {
  name: 'Rishii Kumar Singh',
  title: 'AI/ML engineer and undergraduate researcher',
  location: 'New Delhi, India',
  email: 'rishiikumarsingh2201@gmail.com',
  avatar: 'https://github.com/RishiiGamer2201.png?size=240',
  summary:
    'I build and evaluate AI systems, and I care most about whether the evaluation can be trusted. Environmental Engineering undergraduate at Delhi Technological University, working on computer vision, multilingual NLP and LLM applications, with research at AIMS-DTU, VAIL and UMTRI, University of Michigan.',
  status: 'Open to research and AI/ML engineering internships for summer 2027.',
}

export const links = [
  { label: 'GitHub', handle: 'RishiiGamer2201', href: 'https://github.com/RishiiGamer2201', kind: 'github' },
  { label: 'LinkedIn', handle: 'rishiikumarsingh', href: 'https://www.linkedin.com/in/rishiikumarsingh/', kind: 'linkedin' },
  { label: 'Hugging Face', handle: 'LogicPalette', href: 'https://huggingface.co/LogicPalette', kind: 'hf' },
  { label: 'X', handle: 'RishiiSingh2201', href: 'https://x.com/RishiiSingh2201', kind: 'x' },
  { label: 'LeetCode', handle: 'CrimsonHex', href: 'https://leetcode.com/u/CrimsonHex/', kind: 'code' },
] as const

export const highlights = [
  { value: '1st', label: 'of 9 ranked teams, MaCVi 2027 EURS challenge' },
  { value: 'Accepted', label: 'first-author paper, WVAQ Workshop at WACV 2027' },
  { value: 'Top 3.5%', label: 'of 47,951 contributors, GSSoC 2026' },
  { value: '42', label: 'merged pull requests, 27 in repositories I do not own' },
]

type Link = { label: string; href: string }

export const publications: {
  authors: string
  title: string
  venue: string
  status: string
  note?: string
  links: Link[]
}[] = [
  {
    authors: 'R. K. Singh, A. Rajput, D. K. Vishwakarma',
    title:
      'Do Underwater Image Quality Metrics Agree with Human Perception? A Benchmark with Human Choices, Simple Edits and Generative Drift',
    venue: 'WVAQ Workshop at WACV 2027',
    status: 'Accepted',
    note: 'First author. Released as TrustUIQA.',
    links: [
      { label: 'Code', href: 'https://github.com/TrustUIQA/TrustUIQA' },
      { label: 'Data', href: 'https://huggingface.co/datasets/TrustUIQA/TrustUIQA' },
    ],
  },
  {
    authors: 'B. Kiefer et al.',
    title: '5th Workshop on Maritime Computer Vision (MaCVi): Challenge Overview',
    venue: 'WACV 2027 Workshops',
    status: 'Accepted',
    note: "Organizers' challenge report. Co-author as a member of the winning EURS team.",
    links: [{ label: 'Challenge', href: 'https://macvi.org/workshop/macvi27/challenges/eurs' }],
  },
  {
    authors: 'With AIMS-DTU',
    title: 'Multilingual knowledge-graph completion',
    venue: 'ECIR 2027',
    status: 'Under review',
    note: 'Details stay private until the decision.',
    links: [{ label: 'Related reproduction study', href: '/kge-reproduction' }],
  },
]

export const research: {
  name: string
  context: string
  result?: string
  points: string[]
  links: Link[]
}[] = [
  {
    name: 'TrustUIQA',
    context: 'Underwater image quality benchmark, AIMS-DTU',
    result: 'Accepted, WVAQ Workshop at WACV 2027',
    points: [
      'Benchmarked 73 no-reference image quality metrics against five human references, including a 20-rater, 1,920-choice paired-comparison study I designed and ran.',
      "Showed that no metric consistently matches people (best worst-case Cohen's kappa 0.23 vs 0.41 between humans), and that simple edits, PGD attacks and repeated generative edits fool widely used metrics.",
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/TrustUIQA/TrustUIQA' },
      { label: 'Hugging Face', href: 'https://huggingface.co/datasets/TrustUIQA/TrustUIQA' },
    ],
  },
  {
    name: 'MaCVi 2027 EURS',
    context: 'Embedded underwater restoration and segmentation, five-person AIMS-DTU team',
    result: '1st overall of 9 ranked teams',
    points: [
      'First in the embedded Jetson AGX Orin track and second in the unconstrained track. I led restoration and owned the embedded pipeline.',
      'Embedded model does restoration and segmentation in 0.74M parameters and 11.4 GFLOPs at 32 FPS (TensorRT FP16), with a DINOv3 ViT-L teacher distilled into a 0.32M-parameter MobileNetV3 student.',
      'The organizers reproduced both tracks bit-exactly from our public code, Docker images and weights.',
    ],
    links: [
      { label: 'Track 1', href: 'https://github.com/RishiiGamer2201/eurs-macvi2027-aimslabs-track1' },
      { label: 'Track 2', href: 'https://github.com/RishiiGamer2201/eurs-macvi2027-aimslabs-track2' },
    ],
  },
  {
    name: 'Learn2Design 2026',
    context: 'NeurIPS 2026 Competition Track, solo',
    result: '64th of 110',
    points: [
      'Optimized gravitational-wave detector designs in a differentiable JAX simulator. Mean score better than the strongest organizer baseline (per organizers).',
      'Reported a starter-code inconsistency that the maintainers acknowledged.',
    ],
    links: [{ label: 'Issue #25', href: 'https://github.com/artificial-scientist-lab/Learn2Design-2026/issues/25' }],
  },
  {
    name: 'KGE reproduction',
    context: 'Knowledge-graph embeddings, AIMS-DTU',
    points: [
      'Reproduced TransE and RotatE under matched training on FB15k-237 and WN18RR to separate architecture gains from training-procedure gains.',
    ],
    links: [{ label: 'Case study', href: '/kge-reproduction' }],
  },
]

export const experience: {
  role: string
  org: string
  period: string
  points: string[]
}[] = [
  {
    role: 'Researcher',
    org: 'Vision and Interpretability Lab (VAIL)',
    period: 'Oct 2026 to present',
    points: ['Computer vision research, including real-world data collection for a physical-reasoning dataset and benchmark.'],
  },
  {
    role: 'Research Intern',
    org: 'AIMS Lab, DTU',
    period: 'Jun 2026 to present',
    points: [
      'Supervised research under Prof. Dinesh K. Vishwakarma, selected through multiple interview rounds.',
      'First-author paper accepted at the WVAQ Workshop at WACV 2027, team win at MaCVi 2027, and a co-authored paper under review at ECIR 2027.',
    ],
  },
  {
    role: 'Remote Research Collaborator',
    org: 'UMTRI, University of Michigan',
    period: 'Sep 2026 to present',
    points: [
      'Leading the next version of the MatPredict benchmark for material segmentation and inverse rendering with Dr. Arpan Kusari.',
      'Reproduced the published results and built self-tested evaluation tooling with bootstrap confidence intervals.',
    ],
  },
  {
    role: 'Co-Head',
    org: 'AIMS-DTU',
    period: 'Sep 2026 to present',
    points: ["Leading the AI society's research and project direction, member mentoring and review standards. Member since Oct 2025."],
  },
  {
    role: 'AI/ML Intern',
    org: 'WESEE, Indian Navy',
    period: 'Jun 2026 to Jul 2026',
    points: [
      'Satellite-image object detection and segmentation in Python and PyTorch.',
      'Reviewed duplicates and split leakage, and supported active learning to improve evaluation-data quality.',
    ],
  },
  {
    role: 'Open Source Contributor',
    org: 'GirlScript Summer of Code',
    period: 'May 2026 to Aug 2026',
    points: ['Ranked 1,662 of 47,951 (top 3.5%) with 2,507 points and 13 merged pull requests across Heliox-OS, AegisAI and SahiDawa.'],
  },
  {
    role: 'AI and ML Intern',
    org: 'Artha Research and Intelligence Lab',
    period: 'Oct 2025 to Dec 2025',
    points: ['Geospatial healthcare-accessibility analysis for Himachal Pradesh: 488 facility records across 12 districts, mapped with Folium and QGIS.'],
  },
]

export const projects: {
  name: string
  line: string
  tag?: string
  tech: string
  links: Link[]
}[] = [
  {
    name: 'Sherpa',
    line: 'Terminal assistant that explains the last error and how to fix it, using a fully local GGUF model with no API key.',
    tag: 'Published on PyPI',
    tech: 'Python, llama.cpp, GGUF',
    links: [
      { label: 'PyPI', href: 'https://pypi.org/project/sherpa-dev/' },
      { label: 'GitHub', href: 'https://github.com/RishiiGamer2201/sherpa' },
    ],
  },
  {
    name: 'Apna Saathi',
    line: 'Offline Hindi household assistant on a Jetson board: lexical retrieval over a local corpus, a local Qwen model and on-device speech. 2.70 s median response on the target board.',
    tag: 'Winning project, BHASHINI VYOMA',
    tech: 'Python, SQLite FTS5, Ollama',
    links: [{ label: 'GitHub', href: 'https://github.com/RishiiGamer2201/apna-saathi' }],
  },
  {
    name: 'FormSaathi',
    line: 'Voice agent that fills real online forms in 12 Indian languages, confirms every answer and hands control back at payments, logins, OTPs and captchas. Two-person team.',
    tag: '3rd place, BITCAMP 2026',
    tech: 'Voice I/O, browser agent',
    links: [],
  },
  {
    name: 'Resilience Graph AI',
    line: 'Cyber-defense prototype for critical infrastructure: anomaly detection on authentication logs, ATT&CK retrieval and next-technique prediction, with human-gated, simulated response. Four-person team.',
    tag: 'ET AI Hackathon 2026',
    tech: 'Python, FastAPI, React, scikit-learn',
    links: [{ label: 'GitHub', href: 'https://github.com/RishiiGamer2201/resilience-graph-ai' }],
  },
  {
    name: 'VoxSplit',
    line: 'Recursive multi-speaker speech separation: fine-tuned SepFormer with one-and-rest PIT and a learned count/stop model. 71.25% exact speaker count on 80 custom mixtures. Team project.',
    tech: 'Python, PyTorch, SpeechBrain, Gradio',
    links: [{ label: 'GitHub', href: 'https://github.com/RishiiGamer2201/voxsplit' }],
  },
  {
    name: 'Jarvis',
    line: 'Gesture and voice desktop control with real-time hand tracking, ten built-in gestures and custom gesture training.',
    tech: 'Python, OpenCV, MediaPipe',
    links: [
      { label: 'Demo', href: 'https://www.youtube.com/watch?v=thcPBI7ImGQ' },
      { label: 'GitHub', href: 'https://github.com/RishiiGamer2201/gesture-desktop-control' },
    ],
  },
]

export const openSource = {
  summary: '42 merged pull requests, 27 of them in repositories I do not own.',
  search: 'https://github.com/search?q=author%3ARishiiGamer2201+is%3Apr+is%3Amerged&type=pullrequests',
  items: [
    { repo: 'Heliox-OS', what: '10 merged PRs: WebSocket token streaming, dependency-aware action parallelization, context compression, daemon recovery.', href: 'https://github.com/VyomKulshrestha/Heliox-OS/pulls?q=is%3Apr+author%3ARishiiGamer2201' },
    { repo: 'scikit-bio', what: 'Replaced deprecated NumPy assert_warns across the test suite.', href: 'https://github.com/scikit-bio/scikit-bio/pull/2556' },
    { repo: 'scikit-verify', what: 'Differential coverage tests for binary ufuncs.', href: 'https://github.com/aadya940/scikit-verify/pull/32' },
    { repo: 'AegisAI', what: 'Bulk CSV import and LLM-client unit tests.', href: 'https://github.com/SdSarthak/AegisAI/pulls?q=is%3Apr+author%3ARishiiGamer2201' },
    { repo: 'SahiDawa', what: 'Winston structured logging for the API.', href: 'https://github.com/RatLoopz/sahidawa-india/pull/88' },
  ],
}

export const skills: { group: string; items: string[] }[] = [
  { group: 'Vision', items: ['PyTorch', 'OpenCV', 'Segmentation', 'Image restoration', 'Image quality assessment', 'ONNX', 'TensorRT', 'Jetson'] },
  { group: 'Language and agents', items: ['RAG', 'LLMs', 'Knowledge graphs', 'Hugging Face', 'Agent loops', 'Evaluation'] },
  { group: 'Engineering', items: ['Python', 'JAX', 'TypeScript', 'React', 'FastAPI', 'PostgreSQL', 'Docker', 'Git'] },
]

export const honors = [
  { what: '1st place overall, MaCVi 2027 EURS challenge (team)', when: 'Oct 2026' },
  { what: '3rd place, BITCAMP, AIMS-DTU x TinyFish', when: 'Oct 2026' },
  { what: 'Winning project, BHASHINI VYOMA Challenge', when: 'Sep 2026' },
  { what: 'Top 3.5%, GirlScript Summer of Code', when: 'Aug 2026' },
  { what: 'First place (team), Green Tag, BITS APOGEE', when: 'Apr 2026' },
  { what: 'Top 10%, Indian Olympiad Qualifier in Mathematics', when: 'Jan 2024' },
]

export const education = {
  school: 'Delhi Technological University',
  degree: 'B.Tech, Environmental Engineering',
  period: '2025 to 2029',
  note: 'CGPA 8.35/10 after first year',
}

export const certifications = [
  { what: 'Deep Learning Specialization, DeepLearning.AI', href: 'https://coursera.org/verify/specialization/WQ6EOXR8U51L' },
  { what: 'Machine Learning Specialization, DeepLearning.AI', href: 'https://www.coursera.org/account/accomplishments/specialization/8JFNCYJQ96M7' },
  { what: 'Data Science and AI, CODE IIT Madras', href: 'https://drive.google.com/file/d/1VwFnCool9CxFYaS2EHMN1GT0KXpJ7vlO/view' },
]
