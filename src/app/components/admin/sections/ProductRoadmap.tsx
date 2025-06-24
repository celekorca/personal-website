'use client';

import { useState } from 'react';

const phases = [
  {
    id: 1,
    title: 'Phase 1: Parkinson\'s Disease MVP',
    duration: 'Q3 2025 - Q4 2026',
    focus: 'Parkinson\'s Disease (clearer motor/vocal biomarkers)',
    icon: '🚀',
    coreActivities: [
      'Patient data input module',
      'Validate PD biomarkers',
      'Diagnostic scoring',
      'Clinician dashboard',
      'Secure EHR integration',
      'Clinical pilot program'
    ],
    keyActivities: [
      'Pinpoint PD Dx problems',
      'Patient and Neurologists feedback',
      'MVP Success metrics',
      'Select tech stack',
      'Build POC'
    ],
    timeline: [
      { title: 'POC', date: 'Q3-Q4 2025' },
      { title: 'Pilot(s)', date: 'Q3 2026' },
      { title: 'MVP', date: 'Q1-Q2 2026' },
      { title: 'Initial release', date: 'Q4 2026' }
    ],
    bestCase: 'MVP successfully validates core technology and clinical utility for Parkinson\'s. Positive feedback from early adopters. Demonstrates potential for improving diagnostic pathways. Secures initial funding based on MVP traction.',
    worstCase: 'MVP fails to demonstrate clinical value or is difficult for clinicians to use. Technical issues plague the platform. Negative feedback from early adopters. Difficulty securing funding for further development.'
  },
  {
    id: 2,
    title: 'Phase 2: Multi-Disease Module Development',
    duration: 'Q1 2027 - Q2 2028',
    focus: 'Refine Parkinson\'s module. Develop and validate AI modules for Alzheimer\'s and MS',
    icon: '2',
    coreActivities: [
      'Parkinson\'s: Enhanced biomarker set and longitudinal monitoring',
      'Alzheimer\'s: AI analysis of cognitive/linguistic features',
      'MS: AI analysis of motor, speech, and cognitive function',
      'Advanced clinician dashboard with analytics',
      'Enhanced EHR integration (bidirectional, SMART on FHIR)'
    ],
    keyActivities: [
      'Refine Parkinson\'s module with pilot feedback',
      'Develop and validate Alzheimer\'s and MS modules',
      'Conduct clinical studies for new modules',
      'Iterate on UI/UX based on feedback',
      'Begin regulatory preparations (QMS, MDR documentation)'
    ],
    timeline: [
      { title: 'Q1-Q3 2027', date: 'Module Development' },
      { title: 'Q4 2027', date: 'Initial Testing' },
      { title: 'Q1 2028', date: 'Clinical Validation' },
      { title: 'Q2 2028', date: 'Full Release' }
    ],
    bestCase: 'Successful validation of Alzheimer\'s and MS modules. Platform demonstrates strong performance across multiple disorders. Achieves key milestones for Series A/B funding.',
    worstCase: 'Challenges in developing accurate AI models for complex biomarker profiles. Integration of multiple modules proves technically difficult. Regulatory hurdles slow down progress.'
  },
  {
    id: 3,
    title: 'Phase 3: Regulatory Approval & SCZ Module',
    duration: 'Q3 2028 - Q4 2029',
    focus: 'Achieve regulatory approval (CE Mark under MDR & AI Act) for Parkinson\'s, Alzheimer\'s, and MS modules. Commercial launch in France. Develop and validate AI module for Schizophrenia.',
    icon: '3',
    coreActivities: [
      'Schizophrenia: AI analysis of speech patterns, sentiment, and behavioral cues',
      'Comprehensive platform with all four neurological/psychiatric modules',
      'Advanced analytics for differential diagnosis support',
      'Robust PMCF features',
      'Full HDS certification for data hosting in France'
    ],
    keyActivities: [
      'Navigate CE marking process',
      'Secure reimbursement in France (PECAN initially, then Common Law)',
      'Build out commercial team',
      'Conduct clinical validation for Schizophrenia module',
      'Expand to other EU markets'
    ],
    timeline: [
      { title: 'Q3 2028', date: 'Regulatory Submission' },
      { title: 'Q1 2029', date: 'France Launch' },
      { title: 'Q3 2029', date: 'Schizophrenia Beta' },
      { title: 'Q4 2029', date: 'EU Expansion' }
    ],
    bestCase: 'Successful CE marking and reimbursement. Strong market adoption in France. Schizophrenia module shows promise. Expansion into other EU markets begins. Mely becomes a recognized name in AI diagnostics.',
    worstCase: 'Significant delays or rejection in regulatory approval. Reimbursement challenges hinder market uptake. Schizophrenia module proves too complex to validate effectively. Competitive solutions gain market share.'
  },
  {
    id: 4,
    title: 'Phase 4: Full Platform & US Expansion',
    duration: 'Q1 2030 - Q2 2031',
    focus: 'Full Platform & US Market',
    icon: '💊',
    coreActivities: [
      'Launch in US market',
      'Add treatment response monitoring',
      'Implement predictive analytics',
      'Expand to additional neurological conditions'
    ],
    bestCase: 'Industry standard for neurological assessment',
    worstCase: 'Market saturation or reimbursement challenges'
  }
];

export default function ProductRoadmap() {
  const [hoveredScenario, setHoveredScenario] = useState<{type: 'best' | 'worst', stageId: number} | null>(null);

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
        
        {phases.map((phase, index) => (
          <div key={phase.id} className="relative pl-12 pb-6">
            {/* Phase Icon */}
            <div className="absolute left-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold -ml-4">
              {phase.icon}
            </div>
            <div
              key={phase.id}
              className={`relative p-3 rounded-lg border ${
                phase.id === 1 ? 'border-red-200 bg-red-50' : 
                phase.id === 2 ? 'border-amber-200 bg-amber-50' : 
                phase.id === 3 ? 'border-blue-200 bg-blue-50' :
                'border-gray-200 bg-white'}`}
            >
              <div className={phase.id === 1 ? "p-2" : "p-4"}>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{phase.title}</h4>
                  </div>
                  {/* Scenario Icons */}
                  <div className="flex space-x-2">
                    <div 
                      className="relative group"
                      onMouseEnter={() => setHoveredScenario({type: 'best', stageId: phase.id})}
                      onMouseLeave={() => setHoveredScenario(null)}
                    >
                      <span className="text-green-500 cursor-help" title={phase.bestCase}>✓</span>
                      {hoveredScenario?.type === 'best' && hoveredScenario.stageId === phase.id && (
                        <div className="absolute z-10 right-0 w-64 p-2 text-xs text-gray-600 bg-white border border-gray-200 rounded shadow-lg">
                          {phase.bestCase}
                        </div>
                      )}
                    </div>
                    <div 
                      className="relative group"
                      onMouseEnter={() => setHoveredScenario({type: 'worst', stageId: phase.id})}
                      onMouseLeave={() => setHoveredScenario(null)}
                    >
                      <span className="text-red-500 cursor-help" title={phase.worstCase}>⚠️</span>
                      {hoveredScenario?.type === 'worst' && hoveredScenario.stageId === phase.id && (
                        <div className="absolute z-10 right-0 w-64 p-2 text-xs text-gray-600 bg-white border border-gray-200 rounded shadow-lg">
                          {phase.worstCase}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Core Activities */}
                <div className="mt-2 space-y-2">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Left Column - Core MVP Features */}
                    <div>
                      <h5 className="text-xs font-semibold text-gray-700 mb-1 flex items-center">
                        <svg className="w-3.5 h-3.5 mr-1.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        Core MVP Features
                      </h5>
                      <ul className="text-xs text-gray-600 space-y-1 pl-3">
                        {phase.coreActivities.map((activity, i) => (
                          <li key={`core-${i}`} className="flex items-start">
                            <span className="text-gray-400 mr-1">•</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Column - Key Activities */}
                    {phase.keyActivities && (
                      <div className="pl-3 border-l border-gray-200">
                        <h5 className="text-xs font-semibold text-gray-700 mb-0.5 flex items-center">
                          <svg className="w-3.5 h-3.5 mr-1.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Key Activities
                        </h5>
                        <ul className="text-xs text-gray-600 space-y-1 pl-3">
                          {phase.keyActivities.map((activity, i) => (
                            <li key={`key-${i}`} className="flex items-start">
                              <span className="text-gray-400 mr-1">•</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {phase.timeline && (
                    <div className="mt-4">
                      <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-0 right-0 h-0.5 bg-gray-200 top-1/2 transform -translate-y-1/2"></div>
                        
                        {/* Timeline items */}
                        <div className="relative flex justify-between">
                          {phase.timeline.map((item, i) => (
                            <div key={`time-${i}`} className="relative flex flex-col items-center w-1/4">
                              {/* Title */}
                              <div className="text-xs font-medium text-gray-700 text-center">
                                {item.title}
                              </div>
                              
                              {/* Dot */}
                              <div className="w-3 h-3 rounded-full bg-blue-800 border-2 border-white shadow-md z-10 my-1"></div>
                              
                              {/* Date */}
                              <div className="text-xs text-gray-500 text-center">
                                {item.date}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Connector line */}
            {index < phases.length - 1 && (
              <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200 -z-10"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
