import React from 'react';
import { FaBrain, FaBriefcase, FaGraduationCap, FaUserMd, FaRegClock, FaChartLine, FaShieldAlt, FaLightbulb, FaCheckCircle, FaStar } from 'react-icons/fa';

// Section Card Components
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

export default function SalesMarketingTabSections() {
  return (
    <div className="space-y-12">
      {/* Section 3: Positioning */}
      <section>
        <h2 className="text-2xl font-bold text-center text-navy-800 mb-2">Positioning</h2>
        <blockquote className="text-center italic text-gray-700 mb-6 max-w-3xl mx-auto border-l-4 border-indigo-400 pl-4">
          &quot;Mely is the leading AI platform providing rapid, objective, and data-rich digital biomarkers for the early diagnosis and precise monitoring of neurological and mental diseases, transforming patient care and accelerating the research of new therapies.&quot;
        </blockquote>
      </section>

      {/* Section 4: Differentiation */}
      <section>
        <h2 className="text-2xl font-bold text-center text-navy-800 mb-2">Differentiation</h2>
        <SectionGrid>
          <SectionCard title="Objective Digital Biomarkers" icon={<FaChartLine className="text-indigo-500" />}>
            Generates rich, multimodal digital biomarkers that offer superior objectivity and quantification.
          </SectionCard>
          <SectionCard title="Increased Efficiency" icon={<FaRegClock className="text-green-500" />}>
            Rapid (&lt;20 min) digital tests on common devices (tablets/VR) increase accessibility and reduce assessment time.
          </SectionCard>
          <SectionCard title="Advanced AI &amp; Data Capture" icon={<FaBrain className="text-blue-500" />}>
            Proprietary AI analyzes complex cognitive and motor data interactions, providing deeper insights than simple digitization.
          </SectionCard>
        </SectionGrid>
        <div className="text-center text-gray-700 mt-2 max-w-2xl mx-auto">
          <strong>Summary:</strong> Mely&#39;s key competitive advantages are its ability to rapidly generate objective and actionable digital biomarkers, its ease of access and use, and the richness of data.
        </div>
      </section>

      {/* Section 5: Customer Benefits */}
      <section>
        <h2 className="text-2xl font-bold text-center text-navy-800 mb-2">Customer Benefits</h2>
        <SectionGrid>
          <SectionCard title="Healthcare Providers" icon={<FaUserMd className="text-blue-500" />}>
            <ul className="list-disc list-inside text-left">
              <li>Improved Diagnostic Accuracy: Access to objective data to support clinical judgment.</li>
              <li>Time and Efficiency Gains: Quick tests integrating easily, freeing up time.</li>
              <li>Optimized Patient Monitoring: Objective tracking of progression for personalized adjustments.</li>
              <li>Improved Patient Communication: Clear reports to help explain the patient&#39;s condition.</li>
            </ul>
          </SectionCard>
          <SectionCard title="Pharmaceutical Companies" icon={<FaBriefcase className="text-orange-500" />}>
            <ul className="list-disc list-inside text-left">
              <li>Optimization of Clinical Trials: More precise selection, sensitive detection of effects.</li>
              <li>Higher Quality Data Collection: Objective and quantitative biomarkers reducing variability.</li>
              <li>Reduced Timelines and Costs: Increased efficiency can lead to faster market entry.</li>
              <li>Biomarker Discovery: Rich data helps identify new efficacy or response biomarkers.</li>
            </ul>
          </SectionCard>
          <SectionCard title="Research Institutes" icon={<FaGraduationCap className="text-purple-500" />}>
            <ul className="list-disc list-inside text-left">
              <li>New Research Possibilities: Study of neuro-behavioral correlates with unprecedented granularity.</li>
              <li>Improved Quality/Efficiency of Studies: Standardized and objective tools for data collection.</li>
              <li>Facilitation of Longitudinal Studies: Ease of deployment for frequent and long-term follow-ups.</li>
            </ul>
          </SectionCard>
        </SectionGrid>
      </section>

      {/* Section 6: Brand Identity */}
      <section>
        <h2 className="text-2xl font-bold text-center text-navy-800 mb-2">Brand Identity</h2>
        <SectionGrid>
          <SectionCard title="Trust &amp; Reliability" icon={<FaShieldAlt className="text-green-700" />}>
            The Akita Inu is a symbol of loyalty. Mely aims to be a trusted partner.
          </SectionCard>
          <SectionCard title="Innovation &amp; Intelligence" icon={<FaLightbulb className="text-yellow-500" />}>
            AI is at the heart of Mely, suggesting a forward-thinking, intelligent approach.
          </SectionCard>
          <SectionCard title="Precision &amp; Rigor" icon={<FaCheckCircle className="text-indigo-600" />}>
            Focus on biomarkers and validation reinforces an image of precision.
          </SectionCard>
          <SectionCard title="Benevolence &amp; Hope" icon={<FaStar className="text-orange-400" />}>
            Mely is associated with improving brain health. The Akita is a symbol of health.
          </SectionCard>
        </SectionGrid>
        <div className="text-center text-gray-700 mt-2 max-w-2xl mx-auto">
          <p>&bull; <strong>Healthcare Institutions</strong>: &quot;Transforming healthcare delivery through innovative AI solutions.&quot; Mely is committed to improving lives through its technologically advanced, scientifically sound approach.</p>
        </div>
      </section>

      {/* Section 7: Proofs */}
      <section>
        <h2 className="text-2xl font-bold text-center text-navy-800 mb-2">Proofs</h2>
        <ul className="max-w-2xl mx-auto text-gray-700 text-base list-disc list-inside mb-4">
          <li><span className="font-semibold text-indigo-600">Regulatory Approvals:</span> CE marking and FDA authorization for Mely (SaMD).</li>
          <li><span className="font-semibold text-indigo-600">Clinical Validation Studies:</span> Publication of results from rigorous clinical studies.</li>
          <li><span className="font-semibold text-indigo-600">Scientific Publications:</span> Articles detailing the technology, AI, and discoveries.</li>
          <li><span className="font-semibold text-indigo-600">KOL Endorsements:</span> Collaborations and testimonials from recognized neurologists.</li>
          <li><span className="font-semibold text-indigo-600">Quality Certifications:</span> Potentially, ISO 13485 certification.</li>
          <li><span className="font-semibold text-indigo-600">Strategic Partnerships:</span> Collaborations with leading academic or pharma companies.</li>
        </ul>
      </section>

      {/* Section 8: The Promise */}
      <section>
        <h2 className="text-2xl font-bold text-center text-navy-800 mb-2">The Promise</h2>
        <blockquote className="text-center italic text-gray-700 mb-6 max-w-3xl mx-auto border-l-4 border-indigo-400 pl-4">
          &quot;&quot;Revealing earlier and clearer insights into neurological health, to transform diagnostics, personalize care, and accelerate therapeutic innovation.&quot;&quot;
        </blockquote>
        <div className="text-center text-gray-700 mt-2 max-w-2xl mx-auto">
          This promise encompasses Mely&#39;s commitment to providing technology that improves diagnostic accuracy and disease management, empowers clinicians with objective data, and supports the research community.
        </div>
      </section>
    </div>
  );
}
