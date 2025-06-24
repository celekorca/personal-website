import React from 'react';
import Card from '../../components/Card';
import TableComponent from '../../components/TableComponent';
import { TableColumn, TableData } from '../../../types';
import { UsersIcon, GlobeAltIcon, ShieldCheckIcon, BeakerIcon } from '../../components/Icon';

interface HealthcareFranceDataItem extends TableData {
  characteristic: string;
  neurology: string;
  psychiatry: string;
  hospital: string;
  [key: string]: string | number | boolean | null | undefined | string[] | number[];
}

interface RegulatorySnapshotDataItem extends TableData {
  aspect: string;
  eu: string;
  germany: string;
  italy: string;
  spain: string;
  [key: string]: string | number | boolean | null | undefined | string[] | number[];
}

interface HealthcareUSADataItem extends TableData {
  characteristic: string;
  neurology: string;
  psychiatry: string;
  hospital: string;
  [key: string]: string | number | boolean | null | undefined | string[] | number[];
}

const ClientsSection: React.FC = () => {

  const healthcareFranceColumns: TableColumn[] = [
    { header: "Characteristic", accessor: "characteristic", render: (item) => <span className="font-semibold text-sky-700">{(item as HealthcareFranceDataItem).characteristic}</span> },
    { header: "Neurology Practices", accessor: "neurology" },
    { header: "Psychiatry Practices", accessor: "psychiatry" },
    { header: "Hospital Departments (Neuro/Psych)", accessor: "hospital" },
  ];

  const healthcareFranceData: HealthcareFranceDataItem[] = [
    { characteristic: "Typical Size/Structure", neurology: "~2,850 neurologists (2023), growing.² Mix of private & hospital-based. Hospital depts can have ~20 neurologists (e.g., Paris ³).", psychiatry: "Density above EU average.⁵ Mix of hospital depts, clinics, private practice. Historical shift from urban centers.⁴", hospital: "Variable. Large CHUs with specialized units. Smaller general hospitals. Interdisciplinary collaboration needed.⁷" },
    { characteristic: "Tech Adoption", neurology: "Influenced by Ségur Numérique (EHRs widespread ⁸). Strong gov't push for AI in healthcare & training.⁹ Practical adoption can be slower due to cost/training time.¹¹", psychiatry: "Similar to neurology, benefiting from national digital health initiatives. Openness to AI varies, younger generation more inclined.¹⁰", hospital: "Driven by national strategies (Health Innovation 2030 ¹³). Digital pathology adoption slow pre-2024.¹² AI adoption a priority but limited to specific areas in many orgs.³⁹" },
    { characteristic: "Key Decision-Makers", neurology: "Individual practitioners. Hospital: Dept. Heads, MD/Innovation Committees, Hospital Admin/Finance.²⁸ HAS for reimbursement.³²", psychiatry: "Individual practitioners. Hospital: Dept. Heads, MD/Innovation Committees, Hospital Admin/Finance.²⁸ HAS for reimbursement.³²", hospital: "Dept. Heads (Neuro/Psych), MD/Innovation Committees (physicians, pharmacists, admin, finance), HTA units in larger hospitals, Hospital Directors.²⁸ HAS for national reimbursement decisions.³²" },
    { characteristic: "Primary Pain Points", neurology: "Lengthy/subjective diagnosis for AD, PD.¹⁴ Need for objective biomarkers. Regional disparities in access to advanced care.¹⁹", psychiatry: "Subjectivity of current screening tools (PHQ-9, GAD-7).²¹ Need for objective mental health biomarkers.²⁶ Stigma.", hospital: "Lengthy/late diagnoses, lack of objective/early biomarkers for AD/PD.¹⁴ Subjectivity in mental health assessment.²⁶ Workflow inefficiencies." },
    { characteristic: "MELY's Potential Fit", neurology: "High: Rapid, objective tests for early AD/PD diagnosis & monitoring. Can address diagnostic delays & subjectivity.", psychiatry: "High: Objective digital biomarkers for mental health. Can improve on subjective questionnaires.", hospital: "High: Addresses need for faster, objective, early diagnosis for neuro & mental conditions. Potential to improve workflow & support interdisciplinary work." },
  ];

  const regulatorySnapshotColumns: TableColumn[] = [
    { header: "Aspect", accessor: "aspect", render: (item) => <span className="font-semibold text-sky-700">{(item as RegulatorySnapshotDataItem).aspect}</span> },
    { header: "European Union (Overall)", accessor: "eu" },
    { header: "Germany", accessor: "germany" },
    { header: "Italy", accessor: "italy" },
    { header: "Spain", accessor: "spain" },
  ];
  const regulatorySnapshotData: RegulatorySnapshotDataItem[] = [
    { aspect: "Regulatory Framework SaMD", eu: "MDR EU 2017/745 (CE mark).⁴⁴ EU AI Act (high-risk AI).⁴³ EHDS for data.⁴²", germany: "MDR & EU AI Act. BfArM (DiGA eval).⁴⁹ G-BA (new methods).³³", italy: "MDR & EU AI Act. National HTA. AIFA (drugs), CSE (econ eval).⁶⁶", spain: "MDR & EU AI Act. Ministry of Health/regional HTA. Digital Health Strategy (AI, data).³³" },
    { aspect: "Reimbursement Authority", eu: "National authorities. No central EU body.", germany: "G-BA (benefit package).⁶³ GKV-Spitzenverband (DiGA price neg).⁴⁹", italy: "AIFA CSE (drug reimbursement).⁶⁶ Regional health authorities (DRGs/specific funding for devices).", spain: "Ministry of Health/regional. SNS portfolio.⁹⁵" },
    { aspect: "Key Reimbursement Pathways", eu: "Varies. Specific digital health paths (DiGA Germany, PECAN France) or existing medical device channels (HTA/hospital budgets).", germany: "DiGA (apps, mainly mental health/MSK).⁴⁷ Other AI Dx via G-BA assessment or hospital DRGs. No specific AI Dx path.", italy: "No specific national AI Dx path. Likely hospital DRGs/regional innovation funds. AIFA reform for drug access.⁶⁶", spain: "No specific national AI Dx path. Digital Health Strategy for SNS service portfolio based on evidence/value.⁹⁵ Likely hospital budgets/regional initiatives." },
    { aspect: "Evidence Requirements", eu: "Clinical effectiveness, safety, cost-effectiveness, usability, data security (GDPR), interoperability (EHDS). HTA varies.²⁸", germany: "DiGA: positive healthcare effects, safety, data protection, interoperability.⁴⁷ G-BA: benefit, quality, economic viability for other methods.⁶³", italy: "Clinical & economic evidence. AIFA CSE evaluates.⁶⁶ EU standards alignment (PICO) emphasized.⁶⁶", spain: "Clinical evidence, cost-effectiveness, SNS strategic goal alignment (5P medicine).⁹⁵ AQuAS framework: ethical, legal, regulatory, technical aspects for AI.³³" },
  ];

  const healthcareUSAColumns: TableColumn[] = [
    { header: "Characteristic", accessor: "characteristic", render: (item) => <span className="font-semibold text-sky-700">{(item as HealthcareUSADataItem).characteristic}</span> },
    { header: "Neurology Practices", accessor: "neurology" },
    { header: "Psychiatry Practices", accessor: "psychiatry" },
    { header: "Hospital Departments (Neuro/Psych)", accessor: "hospital" },
  ];

  const healthcareUSAData: HealthcareUSADataItem[] = [
    { characteristic: "Typical Size/Structure", neurology: "Mix: Academic depts (72% <60 faculty ¹⁰⁰), private groups, solo. Long patient wait times.¹⁰⁶", psychiatry: "Predominantly small: 84.1% solo practitioners.⁹⁹ 59,281 psychiatrists nationally ¹⁰¹, aging workforce.¹⁰²", hospital: "Large academic centers & IDNs with specialized neuro/psych units. Average hospital ~354k sq ft.⁹⁷ Community hospitals vary widely.⁹⁸" },
    { characteristic: "Tech Adoption", neurology: "Growing AI use (66% physicians 2024 ¹⁰³). Digital transformation a priority.⁴⁶ Barriers: tool immaturity, cost, regulation.¹⁰⁵", psychiatry: "Similar AI adoption trends. High interest in tools reducing admin burden.¹⁰³", hospital: "70% implementing GenAI.¹⁰⁴ 44% use AI for clinical decision support/imaging. Significant IT budget growth for AI.¹²³" },
    { characteristic: "Key Decision-Makers", neurology: "Individual practitioners. Hospital: Dept. Heads, VACs, C-Suite (CMIO, CIO, Chief AI Officer).¹²³ IT Depts.", psychiatry: "Individual practitioners/clinic directors.¹³¹ Hospital: Dept. Heads, VACs, C-Suite.¹²³ IT Depts.", hospital: "C-Suite (CMIO, CIO, Chief AI Officer).¹²³ Dept. Heads (Neurology, Psychiatry).¹²⁴ Value Analysis Committees (VACs).¹²⁸ IT Depts." },
    { characteristic: "Primary Pain Points", neurology: "PD misdiagnosis (~25% ¹⁰⁷). Delayed AD diagnosis.¹¹² Subjectivity of current assessments. Long wait times.¹⁰⁶", psychiatry: "Subjectivity & inconsistent use of screening tools (PHQ-9, GAD-7).¹¹⁸ Need for objective measures.¹²⁰", hospital: "Diagnostic delays/inaccuracy (PD, AD). Subjectivity of current tools. Clinician burnout. Need for workflow efficiency.¹⁰³" },
    { characteristic: "MELY's Potential Fit", neurology: "High: Objective, early diagnosis for PD/AD. Motor & cognitive data.", psychiatry: "High: Objective biomarkers for mental health. Can augment/replace subjective scales.", hospital: "High: Rapid, objective, multi-modal assessment. Potential to improve diagnostic accuracy, efficiency & reduce burden." },
  ];


  return (
    <section id="clients" className="space-y-12">
      <Card title="Client Landscape Overview" icon={<UsersIcon className="w-8 h-8" />}>
        <p>MELY&apos;s B2B clientele spans Healthcare Providers, Pharmaceutical Companies, and Research Institutions across France, EU, USA, Japan, China, and South Korea. Each market presents unique characteristics, adoption rates, and purchasing behaviors (p.127).</p>
      </Card>

      <div className="space-y-10">
        <h2 className="text-2xl font-bold text-sky-700 border-b-2 border-sky-500 pb-2">Healthcare Providers</h2>

        <Card title="Market: France" icon={<GlobeAltIcon className="w-6 h-6" />}>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li><strong>Structure:</strong> Approx. 2,800 hospitals, 2,850 neurologists (2023, growing). Mix of public university hospitals (CHU/CHR), private, and independent practitioners (p.127).</li>
            <li><strong>Tech Adoption:</strong> Actively promoting digital health (&quot;Mon espace santé&quot; EHR &gt;90% population). Strong gov&apos;t investment in AI (&quot;Health Innovation 2030&quot; €718.4M). Digital pathology slow pre-2024 (p.128).</li>
            <li><strong>Pain Points:</strong> Lengthy/subjective AD/PD diagnosis (MMSE, CSF used). Need for objective mental health biomarkers (PHQ-9, GAD-7 are subjective) (p.128-129).</li>
            <li><strong>Decision-Makers:</strong> Decentralized procurement. Hospital MD/Innovation committees, Heads of Neurology/Psychiatry, HAS for national reimbursement (p.129-130).</li>
            <li><strong>Channels:</strong> Medical conferences (JNLF), industry partnerships, direct outreach, professional networks, digital marketing, gov&apos;t initiatives (p.130).</li>
          </ul>
        </Card>
        <TableComponent title="Healthcare Provider Landscape Snapshot - France" columns={healthcareFranceColumns} data={healthcareFranceData} caption="Source: Report p.132-133" />

        <Card title="Market: European Union (Germany, Italy, Spain)" icon={<GlobeAltIcon className="w-6 h-6" />}>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li><strong>Structure:</strong> Diverse. ~85,000 neurologists (EAN/WHO Europe), varying patient loads. Psychiatrist density varies (e.g., Belgium below EU avg, France above) (p.134).</li>
            <li><strong>Tech Adoption:</strong> EU promoting digital transformation (EHDS, EU AI Act). Germany&apos;s DiGA pathway for DTx. Adoption maturity varies significantly by member state (p.134-135).</li>
            <li><strong>Pain Points:</strong> Highly prevalent neuro diseases (AD, PD, MS, migraine). Access to mental healthcare inequalities (waiting lists, stigma), esp. Spain, Italy. Dementia care barriers (p.135).</li>
            <li><strong>Decision-Makers:</strong> National HTA bodies (G-BA Germany, AIFA Italy, Min. of Health Spain). Hospital-level committees, physician champions (p.136-137).</li>
            <li><strong>Channels:</strong> EU scientific organizations (EAN, EPA, FENS), Horizon Europe, EBRAINS, national societies, KOLs (p.137-138).</li>
          </ul>
        </Card>
        <TableComponent title="Regulatory & Reimbursement Snapshot - EU & Key Countries" columns={regulatorySnapshotColumns} data={regulatorySnapshotData} caption="Source: Report p.140-141" />

        <Card title="Market: USA" icon={<GlobeAltIcon className="w-6 h-6" />}>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li><strong>Structure:</strong> Highly diverse: large academic centers, IDNs, community hospitals, many solo/small practices (84.1% solo psychiatrists). 59,281 psychiatrists (Jan 2025) (p.142).</li>
            <li><strong>Tech Adoption:</strong> Rapid AI uptake (66% physicians use AI in 2024). 70% payers/providers implementing GenAI. Barriers: perceived immaturity, cost, regulation (p.143).</li>
            <li><strong>Pain Points:</strong> Diagnostic delays (neuro appointments avg 34 days). PD misdiagnosis (1 in 4). Subjective/underutilized mental health screening (PCPs &amp; PHQ-9/GAD-7) (p.144).</li>
            <li><strong>Decision-Makers:</strong> C-Suite (CMIOs, CIOs, Chief AI Officers), Clinical Dept. Heads, Value Analysis Committees (VACs) in hospitals. Individual physicians in private clinics (p.145).</li>
            <li><strong>Channels:</strong> Major conferences (AAN, APA), publications (JAMA Neurology), EHR vendors, GPOs, KOLs (p.145-146).</li>
          </ul>
        </Card>
        <TableComponent title="Healthcare Provider Landscape Snapshot - USA" columns={healthcareUSAColumns} data={healthcareUSAData} caption="Source: Report p.149-150" />

        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Market: Japan" icon={<GlobeAltIcon className="w-6 h-6" />}>
            <p className="text-xs">Key institution: NCNP. High dementia prevalence (5.5M 2018, to 8M 2050). Gov&apos;t supports digital health/AI ($400M FY24), but telemedicine adoption slow. ~30 AI medical devices approved (Feb 2023). MHLW/PMDA for approval/reimbursement (p.151-152).</p>
          </Card>
          <Card title="Market: China" icon={<GlobeAltIcon className="w-6 h-6" />}>
            <p className="text-xs">World leader in healthcare AI adoption. &quot;Healthy China 2030&quot; drives digitalization. High neuro disorder burden (1/3 pop). NMPA approval mandatory; VBP drives prices down. Local partnerships vital (p.155-157).</p>
          </Card>
          <Card title="Market: South Korea" icon={<GlobeAltIcon className="w-6 h-6" />}>
            <p className="text-xs">Tech advanced, but slower digital health hub. Growing digital health market ($3.28B 2024 to $11.36B 2030). MFDS (AI guidelines Jan 2025)/HIRA for approval/reimbursement. KBRI for brain research (p.158-160).</p>
          </Card>
        </div>
      </div>

      <div className="space-y-8 mt-12">
        <h2 className="text-2xl font-bold text-sky-700 border-b-2 border-sky-500 pb-2">Pharmaceutical Companies</h2>
        <Card title="Key Target for Clinical Trials & Therapeutic Development" icon={<BeakerIcon className="w-8 h-8" />}>
          <p>MELY offers tools to enhance CNS clinical trials via objective digital biomarkers for patient stratification, endpoint measurement, and remote monitoring, leading to efficient trials and accelerated drug development (p.162-163).</p>
          <h4 className="text-md font-semibold mt-3 mb-1 text-sky-700">Key Needs Addressed:</h4>
          <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
            <li>Objective Endpoints & Biomarkers for early disease detection, progression monitoring.</li>
            <li>Remote Monitoring Capabilities reducing patient burden, gathering real-world data.</li>
            <li>Patient Stratification for trial efficiency using MELY&apos;s rich data.</li>
            <li>Faster Data Collection & Trial Efficiency via rapid assessments.</li>
            <li>Early Detection of Cognitive/Motor Impairment crucial for disease-modifying therapies.</li>
          </ul>
          <h4 className="text-md font-semibold mt-3 mb-1 text-sky-700">Key Decision-Makers:</h4>
          <p className="text-sm">Heads of Clinical Operations/Development, R&D Directors, Biomarker Leads, CNS Therapeutic Area Heads, Digital Health/Innovation Leads. Engagement requires demonstrating scientific validity, trial efficiency improvements, and data quality (p.164).</p>
        </Card>
      </div>

      <div className="space-y-8 mt-12">
        <h2 className="text-2xl font-bold text-sky-700 border-b-2 border-sky-500 pb-2">Research Institutions</h2>
        <Card title="Partners for Biomarker Discovery & Validation" icon={<ShieldCheckIcon className="w-8 h-8" />}>
          <p>University hospitals, neuroscience centers (e.g., Paris Brain Institute, EBRAINS), and public bodies (NIH, CNRS) are vital for biomarker discovery, understanding disease mechanisms, and validating new diagnostics (p.166-167).</p>
          <h4 className="text-md font-semibold mt-3 mb-1 text-sky-700">Research Interests Aligning with MELY:</h4>
          <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
            <li>Biomarker Discovery and Validation (novel, non-invasive, objective).</li>
            <li>Longitudinal Studies & Early Detection of cognitive/motor changes.</li>
            <li>Digital Neuroscience: using digital tools, wearables, AI for remote assessment.</li>
          </ul>
          <h4 className="text-md font-semibold mt-3 mb-1 text-sky-700">Key Decision-Makers:</h4>
          <p className="text-sm">Principal Investigators (PIs), Department Heads, Research Directors, Core Facility Directors. Engagement focus: how MELY enhances research (novel data, objectivity, remote collection) (p.167-168).</p>
        </Card>
      </div>

    </section>
  );
};

export default ClientsSection;
