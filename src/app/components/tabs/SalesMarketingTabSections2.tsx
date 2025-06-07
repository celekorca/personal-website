import React from 'react';
import { FaBriefcase, FaUserMd, FaStethoscope, FaEuroSign, FaGlobe, FaBullhorn } from 'react-icons/fa';

function SectionCard({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex-1 min-w-[260px] max-w-[340px] flex flex-col items-center border border-gray-100">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold mb-2 text-navy-800 text-center">{title}</h3>
      <div className="text-gray-600 text-sm text-center">{children}</div>
    </div>
  );
}

function SectionGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap gap-6 justify-center mb-6">{children}</div>
  );
}

export default function SalesMarketingTabSections2() {
  return (
    <div className="space-y-12">
      {/* Section 9: Customer Segments */}
      <section>
        <h2 className="text-2xl font-bold text-center text-navy-800 mb-2">Customer Segments</h2>
        <div className="text-center text-gray-700 mb-6 max-w-3xl mx-auto">
          <strong>Confirmed Primary B2B Targets:</strong>
          <ul className="list-disc list-inside text-left max-w-xl mx-auto mt-2">
            <li>Healthcare Providers: Neurologists, psychiatrists, geriatricians. Crucial for clinical adoption.</li>
            <li>Pharmaceutical Companies: R&D departments, clinical trial teams for CNS diseases. High-value.</li>
            <li>Research Institutes and Universities: Neuroscience researchers. Generates collaborations.</li>
          </ul>
          <strong className="block mt-4">Secondary B2B Targets (Initially or Short-Term):</strong>
          <ul className="list-disc list-inside text-left max-w-xl mx-auto mt-2">
            <li>Neurological Rehabilitation Centers: Monitoring functional recovery.</li>
            <li>Contract Research Organizations (CROs): Integrating Mely into their service offerings.</li>
            <li>Manufacturers of Other Medical Devices: Partnerships or integration of Mely as a module.</li>
            <li>General Practitioner Offices (longer term): First-line screening, referral to specialists.</li>
          </ul>
          <strong className="block mt-4">B2B2C Segment (Future Target):</strong>
          <ul className="list-disc list-inside text-left max-w-xl mx-auto mt-2">
            <li>Approach envisioned for the longer term, Mely&apos;s platform is designed to be flexible and scalable, adapting to the evolving needs of healthcare providers and researchers.</li>
          </ul>
        </div>
      </section>

      {/* Section 10: Persona Development */}
      <section>
        <h2 className="text-2xl font-bold text-center text-navy-800 mb-2">Persona Development</h2>
        <SectionGrid>
          <SectionCard title="Persona 1: Neurologist (Dr. Isabelle M.)" icon={<FaUserMd className="text-blue-500" />}>
            <ul className="list-disc list-inside text-left">
              <li>Age: 48 years old | 18 years in clinical neurology</li>
              <li>Challenges: Early diagnosis, subjectivity, limited time</li>
              <li>Goals: Best care, early diagnosis, contribute to research</li>
              <li>Tech Savviness: Moderate to high</li>
              <li>Adoption Factors: Evidence, accuracy, ease of use, time savings</li>
              <li>Concerns: Reliability, cost, learning curve, data privacy</li>
            </ul>
          </SectionCard>
          <SectionCard title="Persona 2: Clinical Trial Manager (David L.)" icon={<FaBriefcase className="text-orange-500" />}>
            <ul className="list-disc list-inside text-left">
              <li>Role: Senior Clinical Trial Manager, pharma company (CNS drugs)</li>
              <li>Responsibilities: Timelines, budgets, data quality, sites</li>
              <li>Challenges: Recruitment, subjectivity, costs</li>
              <li>Solutions Sought: Objective biomarkers, remote tools, AI</li>
              <li>Decision Criteria: Validation, reliability, ROI, support</li>
            </ul>
          </SectionCard>
        </SectionGrid>
      </section>

      {/* Section 11: Marketing Mix (4Ps) */}
      <section>
        <h2 className="text-2xl font-bold text-center text-navy-800 mb-2">Marketing Mix (4Ps)</h2>
        <SectionGrid>
          <SectionCard title="Product" icon={<FaStethoscope className="text-indigo-500" />}>
            Intuitive, user-friendly interface with clear visualizations. Comprehensive training and support. Regular updates and EHR/CTMS integration.
          </SectionCard>
          <SectionCard title="Price" icon={<FaEuroSign className="text-green-500" />}>
            Subscription-based for providers; license or subscription for pharma/research. Value-based, competitive, and accessible.
          </SectionCard>
          <SectionCard title="Place" icon={<FaGlobe className="text-blue-500" />}>
            Cloud SaaS platform, accessible via browser/app. Direct sales, strategic partnerships, and IT providers.
          </SectionCard>
          <SectionCard title="Promotion" icon={<FaBullhorn className="text-orange-500" />}>
            Conferences, publications, webinars, digital marketing, PR, and KOL engagement. Key messages tailored to each segment.
          </SectionCard>
        </SectionGrid>
      </section>

      {/* Section 12: Sales Process and KPIs */}
      <section>
        <h2 className="text-2xl font-bold text-center text-navy-800 mb-2">Sales Process & KPIs</h2>
        <div className="text-center text-gray-700 mb-6 max-w-3xl mx-auto">
          <strong>Sales Funnel:</strong>
          <ol className="list-decimal list-inside text-left max-w-xl mx-auto mt-2">
            <li>Lead Generation: Inbound/Outbound marketing.</li>
            <li>Lead Qualification: Evaluate fit based on criteria (BANT).</li>
            <li>Initial Contact & Discovery: Understand prospect's needs and challenges.</li>
            <li>Demo/Presentation: Personalized presentation of Mely's value.</li>
            <li>Pilot Study/Validation: Trial phase in prospect's environment.</li>
            <li>Proposal: Detailed offer (scope, pricing, terms).</li>
            <li>Negotiation & Closing: Finalize terms and sign contract.</li>
            <li>Onboarding & Training: Critical for adoption.</li>
            <li>Follow-up & Retention: Maintain relationship for satisfaction and renewal.</li>
          </ol>
          <strong className="block mt-4">Sales Indicators (KPIs):</strong>
          <ul className="list-disc list-inside text-left max-w-xl mx-auto mt-2">
            <li>Lead Volume, MQL to SQL Conversion Rate</li>
            <li>Pipeline Efficiency, Average Sales Cycle Length</li>
            <li>CAC, MRR/ARR, Churn, NPS, Product Adoption</li>
          </ul>
        </div>
      </section>

      {/* Section 13: Sales Forecast and Turnover */}
      <section>
        <h2 className="text-2xl font-bold text-center text-navy-800 mb-2">Sales Forecast & Turnover</h2>
        <div className="text-center text-gray-700 mb-6 max-w-3xl mx-auto">
          <strong>Key Hypotheses:</strong>
          <ul className="list-disc list-inside text-left max-w-xl mx-auto mt-2">
            <li>CE Marking (Europe): End of Year 0 / beginning of Year 1.</li>
            <li>FDA Authorization (USA): End of Year 1 / beginning of Year 2.</li>
            <li>Positive results from pilot studies/publications: Year 1-2.</li>
            <li>Pricing: Avg. annual subscription at Y€/clinician; Avg. project license at Z€.</li>
          </ul>
          <strong className="block mt-4">Sales Objectives (Illustrative):</strong>
          <table className="w-full text-sm mt-2 border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-2 py-1 border">Year</th>
                <th className="px-2 py-1 border">Healthcare Provider Segment</th>
                <th className="px-2 py-1 border">Pharma/Research Segment</th>
                <th className="px-2 py-1 border">Est. Turnover</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 py-1 border">Year 1</td>
                <td className="px-2 py-1 border">Objective: 5-10 clinics (15-30 u)</td>
                <td className="px-2 py-1 border">Objective: 2-3 projects</td>
                <td className="px-2 py-1 border">€150k - €300k</td>
              </tr>
              <tr>
                <td className="px-2 py-1 border">Year 2</td>
                <td className="px-2 py-1 border">Objective: 20-30 clinics (60-100 u)</td>
                <td className="px-2 py-1 border">Objective: 4-6 projects</td>
                <td className="px-2 py-1 border">€500k - €1M</td>
              </tr>
              <tr>
                <td className="px-2 py-1 border">Year 3</td>
                <td className="px-2 py-1 border">Objective: 50-75 clinics (150-250 u)</td>
                <td className="px-2 py-1 border">Objective: 7-10 projects</td>
                <td className="px-2 py-1 border">€1.5M - €3M</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-2">Ambition: These forecasts are ambitious but achievable given the unmet need, Mely's innovative nature, and high growth rates in the digital health/AI in diagnostics sector.</div>
        </div>
      </section>

      {/* Section 14: Conclusion */}
      <section>
        <h2 className="text-2xl font-bold text-center text-navy-800 mb-2">Conclusion</h2>
        <div className="text-center text-gray-700 mb-6 max-w-3xl mx-auto">
          Mely presents a promising technological offer, capable of meeting critical unmet needs in the diagnosis and monitoring of neurological and mental diseases. The proposed sales and marketing strategy aims to position Mely as an innovative and credible leader in this rapidly expanding market.
          <ul className="list-disc list-inside text-left max-w-xl mx-auto mt-2">
            <p>• <strong>Healthcare Professionals</strong>: &quot;Empowering your practice with AI-driven insights for better patient outcomes.&quot;</p>
            <p>• <strong>Trust &amp; Credibility</strong>: &quot;Backed by medical experts and AI specialists&quot;, clinical validation, publications).</p>
            <p>• <strong>Emotional Connection</strong>: &quot;Peace of mind for you and your loved ones&quot;ales process will guide all efforts.</p>
            <p>• <strong>Healthcare Institutions</strong>: &quot;Transforming healthcare delivery through innovative AI solutions.&quot;</p>
          </ul>
        </div>
      </section>
    </div>
  );
}
