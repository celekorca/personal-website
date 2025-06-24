import React, { useState, useMemo } from 'react';
import Card from '../../components/Card';
import TableComponent from '../../components/TableComponent';
import { TableColumn, SortConfig, TableData } from '../../../types';
import { LightBulbIcon } from '../../components/Icon';

interface CompetitorMappingDataItem extends TableData {
  name: string;
  creationDate: string;
  location: string;
  headcount: string;
  revenue: string;
  productsServices: string;
  pricing: string;
  otherInfo: string;
  qualitativeInfo: string;
  [key: string]: string | number | boolean | null | undefined | string[] | number[];
}

interface SummaryRDKPDataItem extends TableData {
  company: string;
  funding: string;
  status: string;
  trials: string;
  modelFocus: string;
  [key: string]: string | number | boolean | null | undefined | string[] | number[];
}

const CompetitorsSection: React.FC = () => {
  const [sortConfigMain, setSortConfigMain] = useState<SortConfig | null>(null);
  const [sortConfigSummary, setSortConfigSummary] = useState<SortConfig | null>(null);

  const competitorMappingColumns: TableColumn[] = [
    { header: "Competitor Name", accessor: "name", render: (item) => <span className="font-semibold text-sky-700">{(item as CompetitorMappingDataItem).name}</span>, sortable: true },
    { header: "Date of Creation", accessor: "creationDate", sortable: true },
    { header: "Location", accessor: "location", sortable: true },
    { header: "Headcount", accessor: "headcount", sortable: true },
    { header: "Revenue (Turnover)", accessor: "revenue", sortable: true },
    { header: "Products/Services Offered", accessor: "productsServices" },
    { header: "Pricing", accessor: "pricing" },
    { header: "Other Information", accessor: "otherInfo" },
    { header: "Qualitative Information", accessor: "qualitativeInfo" }
  ];

  const competitorMappingData = [
    {
      name: 'ClearSky Medical Diagnostics',
      creationDate: '2013 [35, 36]',
      location: 'York, UK [16, 36]',
      headcount: '8 [37]',
      revenue: 'Not available',
      productsServices: 'Wearable devices and AI/ML for gait and movement analysis (PD-Monitor, LID-Monitor, MCI-Monitor) for Parkinson\'s, Alzheimer\'s [1, 16, 38]',
      pricing: 'Not public',
      otherInfo: 'Spin-out from the University of York; collaboration with Shimmer Research for clinical trials [17, 39]',
      qualitativeInfo: 'Passionate about improving lives of affected individuals; diverse expertise [16]'
    },
    {
      name: 'Emteq (Emteq Labs)',
      creationDate: '2015 [40]',
      location: 'Brighton, UK [18, 41]',
      headcount: '11-50 [42]',
      revenue: 'Est. $3.8M USD (2023 Dealroom [42])',
      productsServices: 'OCOsense glasses with OMG sensors for facial expression & emotion analysis; applications in research, health, marketing [1, 18]',
      pricing: 'Not public (HW sales to researchers) [18]',
      otherInfo: 'VC-backed; CEO Steen Strand (ex-Snap Inc.); founder Dr. Charles Nduka [1, 18]',
      qualitativeInfo: 'Praised by professionals; technology seen as major breakthrough [18]'
    },
    {
      name: 'RetiSpec',
      creationDate: '2016 [1, 43]',
      location: 'Toronto, Canada [43]',
      headcount: '28 [44]',
      revenue: 'Not available',
      productsServices: 'Hyperspectral retinal imaging and AI for early AD detection (pre-symptom) [1, 4, 11]',
      pricing: 'Not public (B2B for clinics & OEMs) [1, 4, 45]',
      otherInfo: 'Funding $17M USD (Series A $10M 2024); collab. Topcon, Eli Lilly; Bio-Hermes-002 study [1, 46, 47]',
      qualitativeInfo: 'Strong potential for early, affordable, scalable diagnosis; positive testimonials [4, 48]'
    },
    {
      name: 'C. Light Technologies',
      creationDate: '2014 [49]',
      location: 'Medford/Boston, MA, USA [49, 50]',
      headcount: '11-50 [213]; 3 execs [247]',
      revenue: 'Est. <$10M USD [53]',
      productsServices: 'Retitrack™: FDA 510(k) cleared retinal eye-tracking (FEM, saccades) [1, 21, 50]',
      pricing: 'Not public (sale/license; CPT codes) [51, 52]',
      otherInfo: 'Funding >$8M USD; investors: Yamaha Motor Ventures, Creative Ventures, ADDF [49, 50, 53]',
      qualitativeInfo: 'Innovative eye movement quantification; CEO Christy Sheehy, PhD [50, 54, 55]'
    },
    {
      name: 'NeuraLight',
      creationDate: '2021 [1, 56]',
      location: 'Tel Aviv, Israel [56]',
      headcount: '42 [57]',
      revenue: 'Not available',
      productsServices: 'AI platform analyzing oculometrics for digital biomarkers (AD, PD, MS, ALS) [1, 14]',
      pricing: 'SaaS for pharma & clinical trials [1, 14, 58]',
      otherInfo: 'Funding >$30.5M USD (Series A $25M 2022); clinical partnerships [1, 57, 59]',
      qualitativeInfo: 'Aims to transform CNS clinical dev, diagnosis; "Digital Biomarker-as-a-Service" [1, 57]'
    },
    {
      name: 'Altoida',
      creationDate: '2016 [61]; 2013 [60][65]',
      location: 'Washington, DC, USA [60, 61]',
      headcount: '29 [60]; 7 execs [219]',
      revenue: 'Not available',
      productsServices: 'NeuroMarker Platform™: AI, AR, sensor-based cognitive/functional assessments (tablet) for early MCI/AD [1, 6]',
      pricing: 'Not public (pharma, research, care partnerships) [6, 62, 63]',
      otherInfo: 'Funding $21.53M USD (Series A-III $14M 2022); FDA Breakthrough; collab. Eisai [1, 61, 64, 65]',
      qualitativeInfo: '"Ingenious" tech, positive testimonials [63, 66]'
    },
    {
      name: 'Akili Interactive Labs',
      creationDate: '2011 [1]',
      location: 'Boston, MA, USA',
      headcount: 'Not available',
      revenue: 'Not available',
      productsServices: 'Digital medicine platform for cognitive dysfunction. EndeavorRx (AKL-T01) video game PDT for pediatric ADHD; exploring depression, MS, AD [1]',
      pricing: 'Prescription Digital Therapeutic (PDT) model [1]',
      otherInfo: 'Funding >$120M USD (Series C $55M 2018); AKL-T01 FDA-cleared for ADHD [1]',
      qualitativeInfo: 'Pioneer in PDTs; blends clinical & lifestyle interfaces [1]'
    },
    {
      name: 'ViewMind',
      creationDate: '2016 [67]',
      location: 'New York, NY, USA / Luxembourg [67, 68]',
      headcount: '11-50 [69]',
      revenue: 'Not available',
      productsServices: 'Precision digital cognitive assessments via VR HMD with eye-tracking for various neurocognitive conditions (early AD) [1, 70]',
      pricing: 'Subscription model for service features [71]',
      otherInfo: 'Funding $10.47M USD (Series A $6M USD); active in LATAM, Europe, ME, SE Asia [67, 68]',
      qualitativeInfo: 'High growth potential (Frost & Sullivan); covers diagnostic continuum [70, 72]'
    },
    {
      name: 'Darmiyan',
      creationDate: '2015/2016 [73, 74]',
      location: 'San Francisco, CA, USA [74]',
      headcount: '1-50 [223]; 4 employees [248]; Core team of 4 + advisors [75]',
      revenue: 'Not available',
      productsServices: 'BrainSee®: FDA-approved AI software analyzing brain MRI to predict progression from amnestic MCI to Alzheimer\'s [1, 5, 76]',
      pricing: 'Image analysis license (clinical & pharma use) [1, 5]',
      otherInfo: 'Funding $12M+ USD (Eisai led $6M round); FDA Breakthrough & De Novo approval [1, 5, 77, 78]',
      qualitativeInfo: 'Glowing testimonials on BrainSee\'s sensitivity, specificity, clinical utility [5, 79]'
    },
    {
      name: 'Accexible',
      creationDate: '2017 [80]',
      location: 'Bilbao/Barcelona, Spain [80, 81]',
      headcount: '11 [80]',
      revenue: 'Not available',
      productsServices: 'AI-based speech analysis platform for early detection & monitoring of MCI, dementia (AD, PD), depression, anxiety [1, 12, 82]',
      pricing: 'Not public (screening tool for clinicians, insurers, clinical trials) [12, 80]',
      otherInfo: 'Funding $4.5M USD; reported accuracy 91-93%; used in Spain, Colombia, Mexico, UK, USA [12, 80, 82]',
      qualitativeInfo: 'Aims to make cognitive decline detection accessible; advisors from Harvard Medical School [12, 82]'
    },
    {
      name: 'Cognetivity Neurosciences',
      creationDate: '2015 [83]',
      location: 'Vancouver, Canada / London, UK [83, 84]',
      headcount: '11-50 [84]; 17 [226]',
      revenue: 'CA$99k (TTM Oct 2023 [227])',
      productsServices: 'CognICA™: AI-based cognitive testing platform (rapid image categorization) for early cognitive impairment [1, 83, 89]',
      pricing: 'Not public (medical, commercial, consumer use) [83, 85]',
      otherInfo: 'Funding $15M+ USD; CognICA™ FDA-reg, CE Mark, Health Canada approved. Partnerships: Mediclinic, UC Health [1, 85, 86, 87, 229, 230]',
      qualitativeInfo: 'Sensitive to early AD, no cultural/educational bias; suitable for remote monitoring [86, 88, 89]'
    },
    {
      name: 'machineMD',
      creationDate: '2019 [90]',
      location: 'Bern, Switzerland / Boston, USA [90, 91]',
      headcount: '28 [90]',
      revenue: 'Not available',
      productsServices: 'neos®: VR-based neurophthalmoscope for automated, quantitative assessment of eye movements, pupils, visual fields (PD, MS) [1, 23, 24]',
      pricing: 'Not public (reimbursable neurodiagnostics) [24, 91]',
      otherInfo: 'Funding $7.95M USD (strategic investment Topcon 2025); spin-off Bern University Hospital [23, 90, 91]',
      qualitativeInfo: 'Aims for accessible, scalable, data-driven neurodiagnostics; collab. Topcon [24, 91]'
    },
    {
      name: 'Koneksa Health',
      creationDate: '2013 [92]',
      location: 'New York, NY, USA [93]',
      headcount: '~100 [94]',
      revenue: 'Not available (Series B $16M 2020 [95])',
      productsServices: 'Digital biomarker platform for clinical trials (neuroscience, PD); remote data collection via wearables, sensors [29, 30, 96]',
      pricing: 'SaaS model for biopharma sponsors [97]',
      otherInfo: 'Partnerships with Michael J. Fox Foundation, Sanofi, Aural Analytics [98, 99]',
      qualitativeInfo: 'Leader in developing and deploying digital biomarkers; rigorous scientific approach [29, 30]'
    },
    {
      name: 'Linus Health',
      creationDate: '2019 (acquired DCT in 2020 [100])',
      location: 'Boston, MA, USA / Dublin, Ireland [101]',
      headcount: '51-200 [102]',
      revenue: 'Not available (Series B $55M USD [100])',
      productsServices: 'Digital brain health platform (DCTclock™, DCR™) using AI on clock drawing & word recall for early cognitive impairment [7, 31]',
      pricing: 'Fee-for-product/service model [103]',
      otherInfo: 'Partnerships with Davos Alzheimer\'s Collaborative, Neurogen Biomarking (2025); multiple acquisitions [7, 104, 105]',
      qualitativeInfo: 'TIME Best Invention 2021 for DCTclock; numerous articles validating tech [7, 100, 104]'
    },
    {
      name: 'PKG Health (Global Kinetics Corp)',
      creationDate: '2007 [19, 106]',
      location: 'Melbourne, Australia / Beverly Hills, CA, USA [107, 108, 109]',
      headcount: '32 [107]',
      revenue: 'Not available',
      productsServices: 'PKG® System (Personal KinetiGraph): wearable device & algorithms for continuous, objective PD motor symptom assessment (bradykinesia, dyskinesia, tremor) [19, 110]',
      pricing: 'Device/system sales; clinical trial services; DTx [19]',
      otherInfo: 'FDA Class II cleared, CE, TGA approved; used in >70 clinical studies; expansion to Middle East [19]',
      qualitativeInfo: 'Strong clinical evidence; improves MDS-UPDRS scores; well-received by clinicians & patients [19, 111, 112]'
    },
    {
      name: 'ADx NeuroSciences (Fujirebio)',
      creationDate: '2011 [113]',
      location: 'Ghent, Belgium [114]',
      headcount: '23 [113]; Fujirebio 1400 [249]',
      revenue: 'Not available ($10M USD investment Samsung 2025; $15M USD Eisai 2024 [191, 192])',
      productsServices: 'Development & supply of antibodies & biomarker assays (CSF, blood) for AD (amyloid, tau, p-tau, NPTX2, sTREM-2), PD (α-synuclein), Nf-L [115, 116, 117]',
      pricing: 'Sale of assays/antibodies to IVD & pharma companies [115]',
      otherInfo: 'Partnerships with Alamar Biosciences (2024), Biogen, Beckman Coulter; part of Fujirebio [115, 118, 119, 120, 121]',
      qualitativeInfo: 'Recognized expertise in neurodegeneration biomarkers; strong scientific basis [115, 122, 123]'
    },
    {
      name: 'Natus Medical Incorporated',
      creationDate: '1987 [124]',
      location: 'Middleton, WI, USA [124]',
      headcount: '1,400 (in 2021/2022 [124, 125])',
      revenue: '$473.4M USD (2022 [125])',
      productsServices: 'Wide range of neurodiagnostic products (EEG, EMG, PSG, neurocritical care), including BrainWatch™ (point-of-care EEG) [126]',
      pricing: 'Sale of medical equipment and consumables',
      otherInfo: 'Established player with a long history; BrainWatch launch in 2025 [126, 127]',
      qualitativeInfo: 'Market leader with reliable and recognized solutions [126]'
    },
    {
      name: 'Life Molecular Imaging',
      creationDate: '2012 (acq. Bayer\'s portfolio [128, 129])',
      location: 'Matran, Switzerland / Berlin, Germany [128, 129]',
      headcount: 'Not available',
      revenue: 'Not available',
      productsServices: 'PET imaging agents (Neuraceq® for beta-amyloid; 18F-PI-2620 for Tau; 18F-DED for MAO-B) for neurodegenerative diseases [128, 130]',
      pricing: 'Sale of radiopharmaceutical products',
      otherInfo: 'Neuraceq® FDA approved; multiple production/distribution partnerships (e.g., SOFIE Biosciences 2025) [130, 131]',
      qualitativeInfo: 'Key player in molecular imaging for AD [128]'
    },
    {
      name: 'Creative Biogene',
      creationDate: '2005 [132, 133]',
      location: 'Shirley, NY, USA [134, 135]',
      headcount: '11-50 [250]; >50 [133]',
      revenue: '$6.6M USD [133, 251]',
      productsServices: 'Neurodegenerative disease detection kits (RT-PCR genetic tests for APOE, LRRK2, TREM2, GBA); genomics research services [136]',
      pricing: 'Sale of kits and research services (research use only) [136, 137]',
      otherInfo: 'Launch of gamma-retroviral products in 2025 [138]',
      qualitativeInfo: 'Mixed customer reviews on cost but positive on service range and data quality [139]'
    },
    {
      name: 'Amoneta Diagnostics',
      creationDate: '2014 [140, 141]',
      location: 'Huningue, France [140, 142]',
      headcount: '1-10 [141]; 5 [252]',
      revenue: 'Not available (grant $5.84M USD 2018 [140])',
      productsServices: 'Blood diagnostic kits for neurodegenerative diseases (MemoryLinc®, NeuroLINCs®, NeuroDeGene®, APO-Easy® for AD, PD, MS) [143, 144, 145, 146]',
      pricing: 'Sale of IVD diagnostic kits [147]',
      otherInfo: 'APO-Easy® CE-IVDR marked (2025); partnership with AD Data Initiative [148]',
      qualitativeInfo: 'Aims to revolutionize detection with blood tests [143]'
    },
    {
      name: 'Brainbox Ltd (Neuroconn)',
      creationDate: '2010 [149, 150]',
      location: 'Cardiff, UK [149, 151]',
      headcount: '11-20 [253]; 14 [254]',
      revenue: '£1.78M [149, 151]',
      productsServices: 'Neurostimulation (TMS, tES, TUS) and neuroimaging (EEG, fNIRS, neuronavigation) equipment for academic research [152, 153, 154]',
      pricing: 'Sale of equipment and training [152]',
      otherInfo: 'Partnership with Kinarm Labs; Brainbox Initiative supports young researchers [153, 154]',
      qualitativeInfo: 'Dynamic player providing integrated solutions for neuroscience research [152]'
    },
    {
      name: 'IGC Pharma',
      creationDate: 'Existing public company (recent AI focus)',
      location: 'Potomac, MD, USA [15]',
      headcount: '67 [155]',
      revenue: 'Not available',
      productsServices: 'AI platform for AD and dementia diagnosis (multimodal data analysis); therapy development (IGC-AD1) [15, 156]',
      pricing: 'Primarily focused on therapeutics; AI diagnostic model in development [15]',
      otherInfo: 'Expansion of CALMA trial with Butler Hospital (2025); genetic toxicology data presented (2025) [3, 157]',
      qualitativeInfo: 'AI is a key driver of long-term growth strategy; aims to bridge the misdiagnosis gap [15, 156]'
    },
    {
      name: 'Canary Speech',
      creationDate: '2017 [158, 159]',
      location: 'Provo, UT, USA [158, 159]',
      headcount: '11-50 [159]',
      revenue: 'Not available (Series A $13M USD 2024 [160, 161])',
      productsServices: 'AI-powered voice biomarker technology to screen for mental health, cognitive disorders (AD, PD, Huntington\'s) and energy/stress levels [13, 27, 162]',
      pricing: 'SaaS model, CPT reimbursable [163]',
      otherInfo: 'Strategic partnership with Microsoft (2025); selected for CB Insights Digital Health 50 (2024) [164, 165]',
      qualitativeInfo: 'Global leader in digital voice biomarkers; patented technology [27, 162]'
    },
    {
      name: 'Spryson Diagnostics',
      creationDate: '2019 (asset acq. from Neurokinetics/Neurolign [166, 167])',
      location: 'Pittsburgh, PA, USA [167]',
      headcount: 'Not available [166]',
      revenue: 'Not available (grant $1.17M USD 2019 [167])',
      productsServices: 'NeuroAI platform and PD-Check using eye-tracking and AI for diagnosing neurological disorders (PD, TBI). DX 200 (VNG system) [25, 26, 166, 168]',
      pricing: 'Sale of devices and platforms',
      otherInfo: 'FDA Breakthrough Designation application for PD-Check; partnership with University of Michigan for PD study [168, 169]',
      qualitativeInfo: 'Aims for a "quantum shift" in brain health; builds on NeuroKinetics legacy [166]'
    },
    {
      name: 'Neurotrack Technologies',
      creationDate: '2012 [170]',
      location: 'Redwood City, CA, USA [170, 171]',
      headcount: '37 (Leadiq, Apr 2025 [170]); 11-50 (PitchBook)',
      revenue: 'Not available (Series C $21M USD 2019 [172])',
      productsServices: 'Digital cognitive health suite (Symbol Match, etc.) for screening cognitive decline (3 min); EHR integration [8, 34]',
      pricing: 'Model for providers and payers [34]',
      otherInfo: 'Partnerships with Providence, Nationwide, Harvard; CEO Elli Kaplan [34, 173, 174]',
      qualitativeInfo: 'Aims to make cognitive screening as simple as taking a pulse; culturally agnostic [34]'
    },
    {
      name: 'NeuraMetrix',
      creationDate: '2013 [10]',
      location: 'Asheville, NC, USA [175, 176]',
      headcount: '4 [177]',
      revenue: 'Not available',
      productsServices: 'NeuraMetrix TC: digital biomarker based on keyboard typing inconsistency analysis to detect and track neurological diseases (PD, Huntington\'s, AD) and psychiatric disorders (depression) [9, 10]',
      pricing: 'Clinical support software (PC installation) [9]',
      otherInfo: 'FDA Breakthrough Designation; partnership with Rutgers University for cannabis study (2023+) [175, 178]',
      qualitativeInfo: 'Passive, language/culture-independent solution; detects 1/100th of a second changes [9]'
    },
    {
      name: 'Huma',
      creationDate: '2011 [179, 180]',
      location: 'London, UK [179]',
      headcount: '190 [255]; 600+ [256]',
      revenue: 'Not available [179]',
      productsServices: 'Digital health platform (SaMD) for remote patient monitoring, decentralized clinical trials, companion apps [32, 33, 257][179, 181]',
      pricing: 'Cloud platform model for health systems, pharma, CROs [179]',
      otherInfo: 'Partnership with Eckuity Capital and acquisition of Aluna (2025); numerous recognitions (Prix Galien, Fast Company) [181, 182, 183]',
      qualitativeInfo: 'Vast global reach; disease agnostic platform with major regulatory clearances [179]'
    },
    {
      name: 'CogniFit',
      creationDate: '1999 [184]',
      location: 'San Francisco, CA, USA [184]',
      headcount: '56 [258]; 51-200 [258]',
      revenue: 'Not available',
      productsServices: 'Digital cognitive assessments and brain training programs (games) to improve memory, attention, etc.; platforms for individuals, families, health professionals, researchers, schools [184, 185, 186]',
      pricing: 'Monthly/annual subscription models for individuals (e.g., $19.99/month); pro plans for researchers/clinicians [187, 188]',
      otherInfo: 'Partnerships with Optum, PowerBrainRx, Mutuelle GSMC (2024-2025) [189]',
      qualitativeInfo: 'Large user base; mostly positive customer reviews; some criticism on real-world transferability of benefits [184, 188, 189]'
    },
    {
      name: 'C2N Diagnostics',
      creationDate: 'Not available [190]',
      location: 'St. Louis, MO, USA [190]',
      headcount: '97 [259]; 10 [260]',
      revenue: 'Not available ($10M USD investment Samsung 2025; $15M USD Eisai 2024 [191, 192])',
      productsServices: 'Precivity™ blood tests (PrecivityAD®, PrecivityAD2™, PrecivityApoE™) based on mass spectrometry to detect amyloid pathology and ApoE status (AD) [190, 191, 193]',
      pricing: 'Specialized clinical laboratory services; services for pharma (clinical trials) [191, 194]',
      otherInfo: 'Samsung investment (2025); MHRA UK certification for PrecivityAD2 (2025); multiple publications validating tests [191, 195, 196]',
      qualitativeInfo: 'Highly accurate blood tests for AD, improving clinical decision-making; strong scientific validation [197, 198]'
    }
  ];

  const handleSortRequestMain = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfigMain && sortConfigMain.key === key && sortConfigMain.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfigMain({ key, direction });
  };

  const handleSortRequestSummary = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfigSummary && sortConfigSummary.key === key && sortConfigSummary.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfigSummary({ key, direction });
  };
  
  const sortData = <T extends TableData>(data: T[], config: SortConfig | null): T[] => {
    if (!config) return data;
    return [...data].sort((a, b) => {
      const aValue = a[config.key];
      const bValue = b[config.key];
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        if (aValue.toLocaleLowerCase() < bValue.toLocaleLowerCase()) {
          return config.direction === 'ascending' ? -1 : 1;
        }
        if (aValue.toLocaleLowerCase() > bValue.toLocaleLowerCase()) {
          return config.direction === 'ascending' ? 1 : -1;
        }
      }
      return 0;
    });
  };


  const sortedCompetitorMappingData = useMemo(() => sortData(competitorMappingData, sortConfigMain), [competitorMappingData, sortConfigMain]);

  const summaryRDKPData: SummaryRDKPDataItem[] = [
    {
      company: 'ClearSky Medical Diagnostics',
      funding: 'N/A',
      status: 'N/A',
      trials: 'Details in Other Info or public announcements',
      modelFocus: 'AD Focus; PD Focus'
    },
    {
      company: 'Emteq (Emteq Labs)',
      funding: '$3.8M USD',
      status: 'N/A',
      trials: 'N/A',
      modelFocus: 'Device/Hardware Sales'
    },
    {
      company: 'RetiSpec',
      funding: '$17M USD',
      status: 'N/A',
      trials: 'Bio-Hermes-002 study',
      modelFocus: 'B2B; AD Focus'
    },
    {
      company: 'C. Light Technologies',
      funding: '>$8M USD',
      status: 'FDA 510(k) Cleared',
      trials: 'N/A',
      modelFocus: 'Device Sales'
    },
    {
      company: 'NeuraLight',
      funding: '>$30.5M USD',
      status: 'N/A',
      trials: 'Multiple clinical partnerships',
      modelFocus: 'SaaS; Pharma Focus; Clinical Trials'
    }
  ];

  const sortedSummaryRDKPData = useMemo(() => sortData(summaryRDKPData, sortConfigSummary), [summaryRDKPData, sortConfigSummary]);


  const summaryRDKPColumns: TableColumn[] = [
    { header: "Company", accessor: "company", render: (item) => <span className="font-semibold text-sky-700">{(item as SummaryRDKPDataItem).company}</span>, sortable: true },
    { header: "Funding", accessor: "funding", sortable: true },
    { header: "FDA / CE Mark Status", accessor: "status", sortable: true },
    { header: "Notable Trials & Studies", accessor: "trials" , sortable: true},
    { header: "Business Model / Market Focus", accessor: "modelFocus", sortable: true },
  ];


  return (
    <section id="competitors" className="space-y-12">
      <Card title="Competitor Landscape Overview">
        <div className="space-y-4">
          <p>
            The digital diagnostics market for neurodegenerative diseases is dynamic and innovative. Key players 
            leverage AI/ML, wearables, AR/VR, eye-tracking, and voice/speech biomarkers (p.69-72). Trends include 
            integration into remote clinical trials, "Digital Biomarker-as-a-Service" (DBaaS), co-development with 
            pharma, and a focus on explainable AI (XAI) (p.105).
          </p>
          <p>
            Data is a primary strategic asset, with proprietary algorithms being key differentiators. Funding, 
            particularly from pharma, signals viability. A distinction exists between comprehensive platforms and 
            specialized point solutions. Geographic innovation hubs (US, UK, Canada, Israel) are prominent (p.94, 109).
          </p>
        </div>
        <div>
          <p className="font-semibold">Brand Image & Awareness</p>
          <p>Built on scientific credibility, tech advancements, and regulatory validation. Recognitions (e.g., TIME&apos;s &quot;Best Invention&quot; for Linus Health&apos;s DCTclock™) and publications are key.</p>
        </div>
        <div>
          <p className="font-semibold">Expert Feedback</p>
          <p>Crucial for acceptance. Testimonials for RetiSpec (early AD dx), Altoida (prodromal AD), Darmiyan (MCI prognosis), C. Light (objective eye metrics) highlight utility.</p>
        </div>
        <div>
          <p className="font-semibold">Market Evolution</p>
          <p>Expected growth, potential consolidation. Challenges include data privacy, interoperability, reimbursement. Opportunities in prodromal stages, personalized interventions, global expansion.</p>
        </div>
        <div>
          <p className="font-semibold">Key Differentiators</p>
          <p>Depth of clinical validation, platform breadth vs. tool specificity, IP strength, ease of use/integration, and strategic partnerships. Ecosystem players (Topcon, Microsoft, Samsung) are engaging via investments and partnerships.</p>
        </div>
      </Card>

      <TableComponent<CompetitorMappingDataItem> 
        title="Direct Competitor Mapping" 
        columns={competitorMappingColumns} 
        data={sortedCompetitorMappingData}
        caption="Full list of competitors as detailed in Report p.73-88. Click headers to sort."
        onSortRequest={handleSortRequestMain}
        currentSortConfig={sortConfigMain}
      />
      
      <TableComponent<SummaryRDKPDataItem>
        title="Summary Table: Funding, Regulation, and R&D of Key Players"
        columns={summaryRDKPColumns}
        data={sortedSummaryRDKPData}
        caption="Comparative overview of key players, highlighting their maturity and market positioning. Data derived from competitor mapping. Click headers to sort. Source: Report p.102-104"
        onSortRequest={handleSortRequestSummary}
        currentSortConfig={sortConfigSummary}
      />

      <Card title="Qualitative Assessment & Strategic Positioning">
        <p className="mb-2"><strong>Brand Image &amp; Awareness:</strong> Built on scientific credibility, tech advancements, and regulatory validation. Recognitions (e.g., TIME&apos;s &quot;Best Invention&quot; for Linus Health&apos;s DCTclock™) and publications are key (p.100).</p>
        <p className="mb-2"><strong>Expert Feedback:</strong> Crucial for acceptance. Testimonials for RetiSpec (early AD dx), Altoida (prodromal AD), Darmiyan (MCI prognosis), C. Light (objective eye metrics) highlight utility (p.100-101).</p>
        <p className="mb-2"><strong>Market Evolution:</strong> Expected growth, potential consolidation. Challenges include data privacy, interoperability, reimbursement. Opportunities in prodromal stages, personalized interventions, global expansion (p.106).</p>
        <p><strong>Key Differentiators:</strong> Depth of clinical validation, platform breadth vs. tool specificity, IP strength, ease of use/integration, and strategic partnerships (p.102). Ecosystem players (Topcon, Microsoft, Samsung) are engaging via investments and partnerships (p.100).</p>
      </Card>
    </section>
  );
};
export default CompetitorsSection;
