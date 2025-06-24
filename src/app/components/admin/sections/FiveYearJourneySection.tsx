'use client';

import { useState } from 'react';

type Risk = {
  category: string;
  risk: string;
  mitigation: string;
};

export default function FiveYearJourneySection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const risks: Risk[] = [
    { 
      category: 'Technical', 
      risk: 'AI model underperforms in real-world diverse populations.', 
      mitigation: 'Implement advanced bias detection, prospective validation in diverse cohorts.' 
    },
    { 
      category: 'Regulatory', 
      risk: 'Significant delay (>12 months) in CE marking under MDR/AI Act.', 
      mitigation: 'Early, iterative engagement with Notified Body; build buffer into timelines.' 
    },
    { 
      category: 'Market', 
      risk: 'Failure to secure PECAN reimbursement in France post-launch.', 
      mitigation: 'Develop robust health economic value proposition; early discussions with HAS/CEPS.' 
    },
    { 
      category: 'Financial', 
      risk: 'Inability to secure Series A funding.', 
      mitigation: 'Aggressively pursue non-dilutive funding; develop lean operational model.' 
    },
    { 
      category: 'Organizational', 
      risk: 'Difficulty hiring/retaining senior AI/ML engineers.', 
      mitigation: 'Enhance employer branding; offer competitive compensation and BSPCEs.' 
    },
    { 
      category: 'IP', 
      risk: 'Core diagnostic algorithm faces patent challenges.', 
      mitigation: 'Maintain robust trade secret protections; file defensive publications.' 
    },
  ];

  const filteredRisks = activeFilter === 'all' 
    ? risks 
    : risks.filter(risk => risk.category === activeFilter);

  return (
    <section id="journey" className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">5-Year Journey & Risk Management</h2>
          <p className="text-sm text-gray-600 mt-2 max-w-4xl mx-auto">
            High-level operational roadmap with key milestones and 
          interactive register of the primary risks Mely must navigate to succeed.
        </p>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Phased 5-Year Roadmap</h3>
          <ul className="space-y-6">
            <li className="relative pl-6 pb-6 border-l-2 border-cyan-500">
              <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-2"></div>
              <h4 className="font-bold text-cyan-700 text-lg">Year 1-2: Foundation</h4>
              <p className="text-sm mt-1">
                Secure Seed funding, build core team, develop Parkinson's MVP, initiate PD validation trial, and draft 
                initial QMS/regulatory documentation.
              </p>
            </li>
            <li className="relative pl-6 pb-6 border-l-2 border-cyan-500">
              <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-2"></div>
              <h4 className="font-bold text-cyan-700 text-lg">Year 2-3: Commercialization & Expansion</h4>
              <p className="text-sm mt-1">
                Obtain PD CE Mark, secure PECAN reimbursement, launch in France, complete AD/MS pilots, and secure Series A.
              </p>
            </li>
            <li className="relative pl-6">
              <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-2"></div>
              <h4 className="font-bold text-cyan-700 text-lg">Year 3-5: Scale-up</h4>
              <p className="text-sm mt-1">
                Expand PD module to EU, achieve permanent LPPR reimbursement, initiate Schizophrenia pilots, and prepare 
                for Series B.
              </p>
            </li>
          </ul>
        </div>
        
        <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Interactive Risk Register</h3>
          <p className="text-sm mb-4">Filter to explore key operational risks and mitigation strategies.</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                activeFilter === 'all' ? 'bg-cyan-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              All
            </button>
            {Array.from(new Set(risks.map(r => r.category))).map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  activeFilter === category ? 'bg-cyan-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {filteredRisks.map((risk, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-cyan-100 text-cyan-800 rounded-full mb-2">
                      {risk.category}
                    </span>
                    <h4 className="font-semibold text-gray-800">{risk.risk}</h4>
                  </div>
                </div>
                <div className="mt-2 p-3 bg-gray-50 rounded text-sm">
                  <span className="font-medium text-gray-700">Mitigation:</span> {risk.mitigation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
