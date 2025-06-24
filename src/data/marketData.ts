// Market Size Data
export interface MarketSizeData {
  segment: string;
  value: number;
  displayValue: string;
  cagr: string;
  year: number;
}

export const marketSizeData: MarketSizeData[] = [
  {
    segment: 'Global Neuro Dx',
    value: 4.7,
    displayValue: '4.70 B USD',
    cagr: '7.52%',
    year: 2025
  },
  {
    segment: 'Global Digital Neuro Biomarkers',
    value: 0.707,
    displayValue: '707 M USD',
    cagr: '25%',
    year: 2024
  },
  {
    segment: 'French Digital Neuro Biomarkers',
    value: 0.017,
    displayValue: '17.0 M USD',
    cagr: '26.3%',
    year: 2024
  },
  {
    segment: 'Global AI in Dx',
    value: 1.4,
    displayValue: '1.40 B USD',
    cagr: '24.64%',
    year: 2024
  }
];

// Comparative Market Size Data
export interface ComparativeMarketSize {
  marketSegment: string;
  globalSize: string;
  globalCagr: string;
  europeSize: string;
  europeCagr: string;
  franceSize: string;
  franceCagr: string;
}

export const comparativeMarketSizeData: ComparativeMarketSize[] = [
  {
    marketSegment: 'Overall Neurodegenerative Dx',
    globalSize: '$USD 4.70B (2025E)',
    globalCagr: '7.52% (2025-2030)',
    europeSize: 'AD Dx: $USD 2.44B (2024E)',
    europeCagr: 'AD Dx: 11.7% (2025-2030)',
    franceSize: 'AD Dx: $USD 0.2B (2024E)',
    franceCagr: 'AD Dx: 7.85% (2025-2035)'
  },
  {
    marketSegment: 'Neurological Biomarkers',
    globalSize: '$USD 9.45B (2024E)',
    globalCagr: '12.91% (2025-2034)',
    europeSize: 'N/A',
    europeCagr: 'N/A',
    franceSize: 'N/A',
    franceCagr: 'N/A'
  },
  {
    marketSegment: 'Digital Neuro Biomarkers',
    globalSize: '$USD 707M (2024E)',
    globalCagr: '~24-26% (2024-2032)',
    europeSize: 'N/A (Global includes Europe)',
    europeCagr: 'N/A',
    franceSize: '$USD 17.0M (2024E)',
    franceCagr: '26.3% (2025-2030)'
  },
  {
    marketSegment: 'Overall Mental Health Tech/Dx',
    globalSize: '$USD 7.13B (2023, Tech)',
    globalCagr: '18.70% (2024-2032, Tech)',
    europeSize: 'Screening: $USD 558.9M (2023)',
    europeCagr: 'Screening: 9.9% (2023-2030)',
    franceSize: 'Screening: $USD 80.8M (2023)',
    franceCagr: 'Screening: 10% (2023-2030)'
  },
  {
    marketSegment: 'Psychiatric Digital Biomarkers',
    globalSize: '$USD 631.3M (2024E)',
    globalCagr: '24.4% (2025-2030)',
    europeSize: 'Highest CAGR globally expected',
    europeCagr: 'N/A',
    franceSize: 'N/A',
    franceCagr: 'N/A'
  },
  {
    marketSegment: 'AI in Diagnostics (Neurology)',
    globalSize: '$USD 1.40B (2024E, Overall AI Dx, Neuro dominant)',
    globalCagr: '24.64% (2024-2034, Overall AI Dx)',
    europeSize: 'Europe AI Dx Market CAGR ~28-35% (2023-2030)',
    europeCagr: 'Broader Healthcare AI CAGR 37.91% (2025-2033)',
    franceSize: 'N/A (Part of EU, receptive market)',
    franceCagr: 'N/A'
  }
];

// Patient Population Data
export interface PatientPopulation {
  condition: string;
  franceCurrent: string;
  franceProjected: string;
  euCurrent: string;
  euProjected: string;
}

export const patientPopulationData: PatientPopulation[] = [
  {
    condition: "Parkinson's Disease",
    franceCurrent: "~270,000 (2025, PD & related)",
    franceProjected: "~260,000 (2030)",
    euCurrent: ">1 million (Current)",
    euProjected: "Expected to double by 2030"
  },
  {
    condition: "Alzheimer's Disease/Dementia",
    franceCurrent: "~900,000 - 1.2M (AD/Dementia, recent est.); 2.5M (AD, 2023 study); 225,000 new cases/year",
    franceProjected: "Dementia: Expected to surpass 1.5M by 2030",
    euCurrent: "AD: 7 million (Current); Dementia (EU27): 7.85M (2019)",
    euProjected: "AD: 14 million by 2030; Dementia (EU27): ~14.3M by 2050"
  },
  {
    condition: "Schizophrenia",
    franceCurrent: "~500,000 - 600,000 (0.7% of pop.)",
    franceProjected: "N/A",
    euCurrent: "N/A (WHO estimates 1 in 300 worldwide)",
    euProjected: "N/A"
  },
  {
    condition: "Multiple Sclerosis (MS)",
    franceCurrent: "~110,000 - 120,000; 3,000-6,000 new cases/year",
    franceProjected: "N/A",
    euCurrent: "N/A",
    euProjected: "N/A"
  }
];

// Economic Indicators
export interface EconomicIndicator {
  indicator: string;
  alzheimers: string;
  parkinsons: string;
}

export const economicIndicators: EconomicIndicator[] = [
  {
    indicator: "Average Annual Cost of Care per Patient",
    alzheimers: "Highly variable by region: e.g., Western Europe ~$EUR 38,249; France (18-month cost) ~$EUR 33,339. Includes direct medical, non-medical, and informal care.",
    parkinsons: "Highly variable by country: e.g., range $EUR 5,240 - $EUR 19,640 in Europe; Luxembourg ~$EUR 22,673 (2016). Includes direct medical, non-medical, and indirect costs."
  },
  {
    indicator: "Estimated Societal Cost (Europe)",
    alzheimers: ">$EUR 250 billion by 2030",
    parkinsons: "$EUR 13.9 billion (2010 data, EBC)"
  },
  {
    indicator: "Potential Economic Benefit of Early/Improved Dx",
    alzheimers: "Delaying high-level care for severe AD could save ~$EUR 20B annually in EU. 25% reduction in AD progression could save $EUR 33.7B (PV) in 5 EU countries. 50% of dementia cases currently undiagnosed.",
    parkinsons: "Timely/adequate treatment is cost-effective; e.g., Germany savings -$EUR 1k to $EUR 5.4k per patient with QALY gain. Reduces burden by preventing progression to more costly advanced stages."
  },
  {
    indicator: "Average Cost of Diagnostic Process (Early AD, Europe)",
    alzheimers: "$EUR 851 - $EUR 1,478 in select memory clinics (Norway, Slovenia, Netherlands).",
    parkinsons: "Specific cost for diagnostic process not clearly isolated, but part of overall care costs. Early diagnosis helps optimize treatment and potentially reduce long-term costs."
  }
];

// Technology Advancements
export interface TechnologyAdvancement {
  domain: string;
  currentState: string;
  opportunities: string;
  challenges: string;
}

export const technologyAdvancements: TechnologyAdvancement[] = [
  {
    domain: "VR/Tablet Diagnostics",
    currentState: "VR for psychiatric differentiation, AD/PD assessment. Tablets for accessible cognitive testing, AI-enhanced insights.",
    opportunities: "Leverage engaging assessments for novel digital biomarker capture. Increase accessibility/objectivity of neuro-cognitive tests.",
    challenges: "Ensuring robust clinical validation for diagnostic claims. User-friendly interfaces for patients/clinicians. Seamless clinical workflow integration. Cost/accessibility of VR hardware. Cybercinetosis risk."
  },
  {
    domain: "Sensor Data Accuracy",
    currentState: "Improved sensors in wearables, AI for error correction/signal enhancement. Medical-grade accuracy for continuous monitoring.",
    opportunities: "Integrate/utilize high-fidelity sensor data (motion, voice, physiological) to enrich diagnostic models. Enable remote assessments.",
    challenges: "Ensuring medical-grade accuracy/reliability of sensors. Managing/processing large sensor data volumes. Validating digital biomarkers. Patient compliance/comfort."
  },
  {
    domain: "Explainable AI (XAI)",
    currentState: "Growing demand for transparency/trust in AI medical decisions. Methodologies like LIME, SHAP emerging. Regulatory push (EU AI Act).",
    opportunities: "Build clinician trust/adoption by explaining AI insights. Differentiate from 'black box' AI. Meet regulatory transparency requirements.",
    challenges: "Technical complexity of robust XAI vs. model performance. Developing understandable/actionable explanations. Standardizing XAI evaluation."
  },
  {
    domain: "Cloud Data Security (GDPR)",
    currentState: "Strong emphasis on encryption, access controls. GDPR mandates data minimization, privacy by design. HDS certification in France.",
    opportunities: "Ensure secure/compliant data handling, building trust. Leverage cloud scalability. Facilitate secure data sharing (with consent).",
    challenges: "Strict adherence to GDPR/French laws. State-of-the-art security measures. Data sovereignty/cross-border transfer compliance. Managing breach risks. Cost of robust security."
  }
];

// Investment Deals
export interface InvestmentDeal {
  date: string;
  company: string;
  acquirer: string;
  dealValue: string;
  technologyFocus: string;
  relevance: string;
}

export const investmentDeals: InvestmentDeal[] = [
  {
    date: "Q1 2025",
    company: "Isomorphic Labs",
    acquirer: "Strategic Investment (Alphabet & external)",
    dealValue: "$USD 600M (Series A)",
    technologyFocus: "AI-driven drug discovery, therapeutic development",
    relevance: "Highlights massive investment in AI for life sciences; potential for diagnostic collaborations."
  },
  {
    date: "Q1 2025",
    company: "Truveta",
    acquirer: "Various VCs",
    dealValue: "$USD 320M (Series C)",
    technologyFocus: "Electronic Health Record (EHR) data analytics with AI",
    relevance: "Shows interest in AI for deriving insights from large health datasets; relevant for AI models."
  },
  {
    date: "Q1 2025",
    company: "Innovaccer",
    acquirer: "Various VCs",
    dealValue: "$USD 275M (Series F)",
    technologyFocus: "Clinical decision support platform, data activation",
    relevance: "Indicates demand for platforms integrating data and providing actionable insights."
  },
  {
    date: "Q1 2025",
    company: "Neko Health",
    acquirer: "Various VCs",
    dealValue: "$USD 260M",
    technologyFocus: "Preventative healthcare, AI-powered body scans",
    relevance: "Demonstrates investment in AI for early detection, aligning with MELY's goal."
  },
  {
    date: "2024 (Context)",
    company: "VineHealth",
    acquirer: "Sciensus",
    dealValue: "Not specified",
    technologyFocus: "Digital health platform for cancer care",
    relevance: "Example of consolidation; larger players acquiring niche digital health solutions."
  }
];

// PESTEL Analysis
export interface PestelItem {
  factor: string;
  details: string[];
}

export const pestelAnalysis: PestelItem[] = [
  {
    factor: "Political",
    details: [
      "Stable government with strong innovation focus (France 2030, Health Innovation 2030 plan).",
      "Explicit support for AI and MedTech (Bpifrance funding).",
      "National strategies for neurodegenerative diseases (MND 2024-2028) and mental health (Great National Cause 2025).",
      "R&D tax credits (CIR, CII) available but subject to 2025 budget adjustments.",
      "Significant EU influence (funding programs like EU4Health, Horizon Europe; regulations like EU AI Act, MDR).",
      "Key regulatory bodies: ANSM, HAS, CNIL."
    ]
  },
  {
    factor: "Economic",
    details: [
      "Subdued GDP growth (0.6%-0.9% in 2025), moderating inflation (1.2%-1.9% in 2025), high public debt and fiscal consolidation.",
      "Significant healthcare spending (11.9% GDP in 2022), but system deficit (€22B+ in 2025) pressures cost-containment.",
      "Research funding (MERRI, ANR) potentially impacted by France 2030 cuts.",
      "VC market correction, focus on profitability; AI/HealthTech still attract interest but late-stage MedTech funding is scarce.",
      "Rising operational costs (talent, hardware, software).",
      "Supply chain vulnerabilities for tech components.",
      "EUR exchange rate volatility risks.",
      "Complex reimbursement for DMNs (HAS evaluation)."
    ]
  },
  {
    factor: "Social",
    details: [
      "Mixed public/patient perception of AI (usefulness vs. dehumanization concerns) and VR (potential recognized, but cybercinetosis a risk).",
      "Digital illiteracy (illectronisme) affects 15.4% (2021), higher among seniors (61.9% of 75+); RGAA accessibility standards exist.",
      "Aging population increasing prevalence of target diseases (Alzheimer's ~1M, Parkinson's ~270k, Schizophrenia ~600k, MS ~120k).",
      "Active patient associations (France Alzheimer, France Parkinson, etc.).",
      "Ethical concerns around AI (bias, transparency) and VR (psychological effects).",
      "Stigmatization of neurodegenerative and mental health conditions can delay diagnosis."
    ]
  },
  {
    factor: "Technological",
    details: [
      "Rapid advancements in AI/ML for diagnostics (XAI for transparency) and VR for assessment/rehabilitation.",
      "Active research in digital biomarkers (gait, speech, eye-tracking, motor symptoms) for Parkinson's, Alzheimer's, Schizophrenia, and MS.",
      "Good digital infrastructure: high internet penetration (92.6%), advancing 5G/broadband.",
      "Data security standards: HDS certification for health data hosting, Health Data Hub, CNIL oversight.",
      "Interoperability framework (CI-SIS, DMP, ANS), but practical integration challenges remain.",
      "Strong tech talent pool, but shortages for broader digital transformation."
    ]
  },
  {
    factor: "Environmental",
    details: [
      "EU WEEE Directive mandates e-waste management for tablets/VR; producer responsibility via éco-organismes (Ecologic, Ecosystem).",
      "High energy consumption of AI models/data centers and VR technology is a concern. EU AI Act includes energy transparency for GPAI models.",
      "'Frugal AI' promoted by French government.",
      "EU CSRD mandates sustainability reporting for companies, including MedTech."
    ]
  },
  {
    factor: "Legal",
    details: [
      "Strict data privacy laws (GDPR, French Data Protection Act) for health data.",
      "Explicit patient consent required, special considerations for vulnerable adults. CNIL guidance available.",
      "AI/VR diagnostic tools likely classified as medical devices under EU MDR/IVDR (SaMD classification based on risk).",
      "EU AI Act imposes risk-based framework; diagnostic tools likely 'high-risk' with stringent requirements and significant compliance costs. Support via regulatory sandboxes envisioned.",
      "IP protection for AI algorithms/VR methods (patents, copyright, trade secrets).",
      "Evolving product liability rules for AI systems."
    ]
  }
];

// SWOT Analysis
export interface SwotItem {
  category: string;
  items: string[];
}

export const swotAnalysis: SwotItem[] = [
  {
    category: "Strengths",
    items: [
      "Innovative AI/VR diagnostic technology.",
      "Addresses unmet needs in early detection of Parkinson's, Alzheimer's, schizophrenia, MS.",
      "Potential for more accurate, objective, faster diagnoses via multimodal data analysis.",
      "High scalability of software-based platform.",
      "Non-invasive assessment method improving patient acceptance.",
      "Focus on high-impact, prevalent diseases."
    ]
  },
  {
    category: "Weaknesses",
    items: [
      "Reliance on emerging AI/VR technologies; slow clinical adoption possible.",
      "High development and clinical validation costs.",
      "Dependency on hardware (tablets, VR headsets) leading to procurement/maintenance costs.",
      "Significant regulatory hurdles (MDR, EU AI Act).",
      "Need for large, high-quality, ethically sourced patient datasets for AI training.",
      "Limited brand recognition as a startup in the medical field.",
      "Difficulty in acquiring and retaining specialized AI, MedTech, VR talent.",
      "Ensuring good user experience for elderly or impaired target populations."
    ]
  },
  {
    category: "Opportunities",
    items: [
      "Growing market due to aging population and increased awareness of target diseases.",
      "Strong French government support/funding (France 2030, Bpifrance, ANR).",
      "Continuous technological advancements in AI, VR, sensors, digital biomarkers.",
      "Potential for partnerships (research institutions, hospitals, pharma, MedTech).",
      "Increased acceptance of digital health and telemedicine.",
      "EU initiatives like European Health Data Space (EHDS) and EU funding.",
      "Strong clinical/research focus on early diagnosis benefits."
    ]
  },
  {
    category: "Threats",
    items: [
      "Economic downturn, inflation impacting healthcare spending/funding.",
      "Complex and costly regulatory environment (MDR, EU AI Act, GDPR).",
      "Difficult and uncertain reimbursement process in France (HAS evaluation, SNITEM concerns).",
      "Competition from established methods and larger MedTech companies.",
      "Data security breaches and privacy risks.",
      "Slow adoption by healthcare professionals (skepticism, training, interoperability).",
      "Ethical concerns (AI bias, transparency) and public trust issues.",
      "Stigmatization of target diseases hindering diagnosis seeking.",
      "Supply chain disruptions for hardware components.",
      "Tightening VC market, especially for late-stage MedTech in Europe.",
      "Changes to R&D tax credits (CIR, CII) reducing benefits."
    ]
  }
];
