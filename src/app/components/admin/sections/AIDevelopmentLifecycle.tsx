'use client';

import { useState } from 'react';

const stages = [
  {
    id: 1,
    title: '1. Problem Definition & Goals',
    icon: '🎯',
    coreActivities: [
      'Define diagnostic challenges for each neurological disorder',
      'Set SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound)',
      'Collaborate with stakeholders (neurologists, psychiatrists, patient groups)'
    ],
    bestCase: 'Precise problem definition leads to focused AI solution with strong stakeholder buy-in',
    worstCase: 'Vague definition results in a tool that doesn\'t address clear clinical needs'
  },
  {
    id: 2,
    title: '2. Data Collection & Exploration',
    icon: '🔍',
    coreActivities: [
      'Acquire diverse datasets (internal, external, clinical studies)',
      'Conduct Exploratory Data Analysis (EDA)',
      'Assess data integrity and identify biases'
    ],
    bestCase: 'Access to large, diverse, well-annotated datasets with clear patterns',
    worstCase: 'Difficulty acquiring quality data, leading to biased or unreliable models'
  },
  {
    id: 3,
    title: '3. Data Preparation',
    icon: '🧹',
    coreActivities: [
      'Clean and standardize raw data (voice, video, text)',
      'Extract and engineer features',
      'Address data imbalances and quality issues'
    ],
    bestCase: 'Efficient preprocessing pipelines yield highly predictive features',
    worstCase: 'Complex preprocessing leads to information loss or suboptimal features'
  },
  {
    id: 4,
    title: '4. Model Development',
    icon: '🧠',
    coreActivities: [
      'Select appropriate algorithms (RNNs, Transformers, CNNs, BERT)',
      'Design model architecture',
      'Conduct hyperparameter tuning'
    ],
    bestCase: 'Optimal architectures identified with high accuracy and interpretability',
    worstCase: 'Models fail to capture patterns or become overly complex "black boxes"'
  },
  {
    id: 5,
    title: '5. Training & Testing',
    icon: '⚙️',
    coreActivities: [
      'Split data into training/validation/test sets',
      'Train models with cross-validation',
      'Evaluate performance (accuracy, precision, recall, F1, AUC-ROC)'
    ],
    bestCase: 'High performance across diverse patient cohorts with robust validation',
    worstCase: 'Poor generalization to test sets or biased performance across demographics'
  },
  {
    id: 6,
    title: '6. Deployment',
    icon: '🚀',
    coreActivities: [
      'Deploy to cloud infrastructure',
      'Develop RESTful APIs',
      'Integrate with hospital EHR systems'
    ],
    bestCase: 'Smooth deployment with seamless EHR integration',
    worstCase: 'Deployment issues or complex integration challenges with hospital IT'
  },
  {
    id: 7,
    title: '7. Monitoring & Improvement',
    icon: '🔄',
    coreActivities: [
      'Monitor performance in real-world settings',
      'Detect and address data/concept drift',
      'Implement continuous improvement cycles'
    ],
    bestCase: 'Sustained high performance with continuous improvements',
    worstCase: 'Performance degradation in production without effective monitoring'
  }
];

export default function AIDevelopmentLifecycle() {
  const [hoveredScenario, setHoveredScenario] = useState<{type: 'best' | 'worst', stageId: number} | null>(null);

  return (
    <div className="space-y-4">
      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
        
        {stages.map((stage, index) => (
          <div key={stage.id} className="relative pl-12 pb-6">
            {/* Stage Icon */}
            <div className="absolute left-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold -ml-4">
              {stage.icon}
            </div>
            
            {/* Stage Content */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-gray-900 text-sm">{stage.title}</h4>
                  {/* Scenario Icons */}
                  <div className="flex space-x-2">
                    <div 
                      className="relative group"
                      onMouseEnter={() => setHoveredScenario({type: 'best', stageId: stage.id})}
                      onMouseLeave={() => setHoveredScenario(null)}
                    >
                      <span className="text-green-500 cursor-help" title={stage.bestCase}>✓</span>
                      {hoveredScenario?.type === 'best' && hoveredScenario.stageId === stage.id && (
                        <div className="absolute z-10 right-0 w-64 p-2 text-xs text-gray-600 bg-white border border-gray-200 rounded shadow-lg">
                          {stage.bestCase}
                        </div>
                      )}
                    </div>
                    <div 
                      className="relative group"
                      onMouseEnter={() => setHoveredScenario({type: 'worst', stageId: stage.id})}
                      onMouseLeave={() => setHoveredScenario(null)}
                    >
                      <span className="text-red-500 cursor-help" title={stage.worstCase}>⚠️</span>
                      {hoveredScenario?.type === 'worst' && hoveredScenario.stageId === stage.id && (
                        <div className="absolute z-10 right-0 w-64 p-2 text-xs text-gray-600 bg-white border border-gray-200 rounded shadow-lg">
                          {stage.worstCase}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Core Activities */}
                <ul className="mt-2 text-xs text-gray-600 space-y-1 pl-2">
                  {stage.coreActivities.map((activity, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-gray-400 mr-1">•</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Connector line */}
            {index < stages.length - 1 && (
              <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200 -z-10"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
