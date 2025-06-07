import React from 'react';
import { FaBrain, FaUsers, FaBriefcase, FaGraduationCap, FaUserMd, FaRegClock } from 'react-icons/fa';

function FeatureCard({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex-1 min-w-[260px] max-w-[340px] flex flex-col items-center border border-gray-100">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold mb-2 text-navy-800 text-center">{title}</h3>
      <div className="text-gray-600 text-sm text-center">{children}</div>
    </div>
  );
}

function ValuePropCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex-1 min-w-[260px] max-w-[340px] flex flex-col items-center border border-gray-100">
      <div className="text-3xl mb-3">{icon}</div>
      <h4 className="font-semibold text-base mb-2 text-navy-800 text-center">{title}</h4>
      <div className="text-gray-600 text-sm text-center">{children}</div>
    </div>
  );
}

import SalesMarketingTabSections from './SalesMarketingTabSections';
import SalesMarketingTabSections2 from './SalesMarketingTabSections2';

export default function SalesMarketingTab() {
  return (
    <div className="space-y-12">
      {/* Section 1: Key Features & Functionalities */}
      <section>
        <h2 className="text-2xl font-bold text-center text-navy-800 mb-2">Key Features &amp; Functionalities</h2>
        <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
          Mely&apos;s primary offer is an artificial intelligence (AI) platform with rapid, accessible, easy-to-perform, and engaging digital tests for the early diagnosis and monitoring of neurodegenerative diseases.
        </p>
        <div className="flex flex-wrap gap-6 justify-center mb-4">
          <FeatureCard title="What is Mely?" icon={<FaBrain className="text-indigo-500" />}>
            <div className="mb-2 font-semibold">🧠 AI-Powered Platform</div>
            Leveraging advanced AI and ML to analyze complex neuro data for deeper insights.&lt;br /&gt;
            &lt;div className=&quot;mb-2 mt-2 font-semibold&quot;&gt;📊 Objective Digital Biomarkers&lt;/div&gt;
            Capturing cognitive &amp; motor data to generate rich, objective biomarkers.
            <div className="mb-2 mt-2 font-semibold">💊 Accelerating Research &amp; Therapy</div>
            Capturing cognitive & motor data to generate rich, objective biomarkers.
            <div className="mb-2 mt-2 font-semibold">💊 Accelerating Research & Therapy</div>
            Provides robust, standardized, high-quality data for pharma and research.
          </FeatureCard>
          <FeatureCard title="Key User Benefits" icon={<FaUsers className="text-green-500" />}>
            <div className="mb-2 font-semibold">🎯 Enhanced Diagnostic Confidence</div>
            Objective data and quantifiable metrics support clinical judgment.<br />
            <div className="mb-2 mt-2 font-semibold">⚡️ Increased Efficiency</div>
            Rapid tests (&lt;20 mins) and intuitive UI streamline workflows.<br />
            <div className="mb-2 mt-2 font-semibold">📈 Precise Longitudinal Tracking</div>
            Regular tests and data comparison for detailed monitoring.<br />
            <div className="mb-2 mt-2 font-semibold">🤝 Improved Patient Engagement</div>
            Engaging tests and clear reports involve patients in their care.
          </FeatureCard>
          <FeatureCard title="How It Works" icon={<FaRegClock className="text-blue-500" />}>
            <div className="mb-2 font-semibold">⏱️ Rapid Tests (&lt;20 mins)</div>
            Seamless integration into clinical workflows.<br />
            <div className="mb-2 mt-2 font-semibold">👋🧠 Cognitive & Motor Data Capture</div>
            Collects rich data through interactive assessments.<br />
            <div className="mb-2 mt-2 font-semibold">🔬 Proprietary AI Analysis</div>
            Sophisticated AI algorithms unveil complex patterns.
          </FeatureCard>
        </div>
      </section>

      {/* Section 2: Value Proposition */}
      <section>
        <h2 className="text-2xl font-bold text-center text-navy-800 mb-2">Value Proposition</h2>
        <blockquote className="text-center italic text-gray-700 mb-6 max-w-3xl mx-auto border-l-4 border-indigo-400 pl-4">
          "Our value is the integrated approach combining digital technologies and AI to extract clinically relevant information, enabling earlier interventions, personalized treatment, and accelerating therapeutic innovation. With faster, more objective, and more accessible tools than current methods, we aim to solve the problems of our customers:"
        </blockquote>
        <div className="flex flex-wrap gap-6 justify-center">
          <ValuePropCard icon={<FaUserMd className="text-blue-500" />} title="Healthcare Providers">
            Mely offers a solution to the lack of specific and objective diagnostic tools, particularly for diseases like Parkinson's and Alzheimer's, leading to earlier diagnoses and greater diagnostic confidence.
          </ValuePropCard>
          <ValuePropCard icon={<FaBriefcase className="text-orange-500" />} title="Pharmaceutical Companies">
            Mely addresses the need for more sensitive and objective biomarkers for clinical trials in neurology, a field facing major challenges like patient recruitment and high failure rates.
          </ValuePropCard>
          <ValuePropCard icon={<FaGraduationCap className="text-purple-500" />} title="Research Institutes">
            Mely opens new avenues for studying the mechanisms of neurological and mental diseases, enabling collaborations and advanced research.
          </ValuePropCard>
        </div>
      </section>
      {/* Additional sections */}
      <SalesMarketingTabSections />
      <SalesMarketingTabSections2 />
    </div>
  );
}
