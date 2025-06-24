'use client';

import { useState } from 'react';

export default function PathToMarketSection() {
  const [hoveredScenario, setHoveredScenario] = useState<{ type: 'best' | 'worst', id: string } | null>(null);

  // Helper function to handle tooltip hover
  const handleTooltipHover = (type: 'best' | 'worst', id: string) => {
    setHoveredScenario({ type, id });
  };

  const handleTooltipLeave = () => {
    setHoveredScenario(null);
  };

  const [activeTab, setActiveTab] = useState('clinical');
  const [activeCondition, setActiveCondition] = useState('pd');

  interface ConditionData {
    title: string;
    focus: string;
    comparator: string;
    endpoints: string;
    population?: string;
    technology?: string;
    reference?: string;
    userFriendliness?: string;
  }

  const conditionData: Record<string, ConditionData> = {
    pd: {
      title: "PD (Parkinson's Disease)",
      focus: "Early diagnosis and objective monitoring of motor (tremor, bradykinesia, gait) and non-motor (voice, facial expression) symptoms.",
      comparator: "Neurologist assessment, Unified Parkinson's Disease Rating Scale (UPDRS), MDS-UPDRS, and Hoehn & Yahr staging.",
      population: "Early-stage PD patients, at-risk populations (e.g., REM sleep behavior disorder), and healthy controls. Age-matched controls for comparison.",
      endpoints: "Diagnostic accuracy (sensitivity/specificity), correlation with UPDRS-III motor scores, detection of symptom fluctuations, and response to dopaminergic therapy.",
      technology: "Wearable sensors for motor assessment, voice analysis for dysarthria and hypophonia, video-based facial expression analysis for hypomimia, and digital spiral drawing analysis for tremor and bradykinesia.",
      reference: "MDS Research Criteria for Prodromal Parkinson's Disease highlight the need for objective digital biomarkers in early detection.",
      userFriendliness: "Simple voice recording tasks, guided motor exercises, and automated analysis requiring minimal technical expertise from users."
    },
    ad: {
      title: "AD (Alzheimer's Disease)",
      focus: "Early detection of subtle cognitive decline through speech patterns, language use, and cognitive function assessment.",
      comparator: "Standard neuropsychological tests (MMSE, MoCA), CSF biomarkers (Aβ42, p-tau), and amyloid PET imaging.",
      population: "Cognitively normal elderly, mild cognitive impairment (MCI) patients, and early AD patients. APOE4 carriers for high-risk stratification.",
      endpoints: "Correlation with cognitive test scores, prediction of conversion from MCI to AD, and correlation with established biomarkers (CSF/PET).",
      technology: "Natural language processing for semantic analysis, speech pattern recognition, and cognitive assessment through interactive digital tasks. Integration with digital cognitive tests.",
      reference: "ATN research framework emphasizes the need for accessible, scalable cognitive assessment tools.",
      userFriendliness: "Conversational interface, voice-based interaction, and automated scoring with clear result interpretation."
    },
    ms: {
      title: "MS (Multiple Sclerosis)",
      focus: "Objective monitoring of motor function, speech changes, cognitive function, and fatigue levels in MS patients.",
      comparator: "Expanded Disability Status Scale (EDSS), Timed 25-Foot Walk (T25FW), 9-Hole Peg Test (9HPT), and Paced Auditory Serial Addition Test (PASAT).",
      population: "Relapsing-remitting MS (RRMS), secondary progressive MS (SPMS), and primary progressive MS (PPMS) patients across disability levels.",
      endpoints: "Correlation with EDSS, detection of subclinical disease activity, prediction of relapse, and monitoring treatment response.",
      technology: "Smartphone-based gait analysis, digital versions of 9HPT, speech analysis for dysarthria, and computerized cognitive testing. Integration with wearable devices for continuous monitoring.",
      reference: "MS Outcome Assessments Consortium emphasizes the need for sensitive digital measures in MS clinical trials.",
      userFriendliness: "Guided assessment protocols, minimal equipment requirements, and automated data collection for home-based monitoring."
    },
    scz: {
      title: "SCZ (Schizophrenia)",
      focus: "Objective assessment of negative symptoms (e.g., flattened affect, alogia), disorganized speech, and potentially early warning signs of relapse.",
      comparator: "Clinical interviews, PANSS (Positive and Negative Syndrome Scale), and other psychiatric rating scales.",
      population: "Patients with first-episode psychosis, chronic schizophrenia, and potentially individuals at clinical high risk for psychosis.",
      endpoints: "Correlation of digital vocal/facial expression biomarkers with PANSS negative symptom subscale and formal thought disorder ratings; ability to differentiate between affective states; predictive value for relapse.",
      technology: "Voice analysis for prosody, coherence, and linguistic complexity. Video analysis of facial expressions for affective flattening. NLP for analyzing text input for thought disorder.",
      reference: "The EBC Rethinking Schizophrenia Care Pathway project highlights the need for user-friendly tools for assessing cognitive functions and negative symptoms."
    }
  };

  return (
    <section id="market-path" className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">The Path to Market</h2>
          <p className="text-sm text-gray-600 mt-2">
            Clinical validation, regulatory strategy, and market entry approach
          </p>
        </header>

        <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="border-b border-gray-200 mb-4">
          <nav className="-mb-px flex space-x-4 overflow-x-auto text-sm" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('clinical')}
              className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-xs ${activeTab === 'clinical'
                ? 'border-cyan-500 text-cyan-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              Clinical Validation & Research Partnerships
            </button>
            <button
              onClick={() => setActiveTab('regulatory')}
              className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-xs ${activeTab === 'regulatory'
                ? 'border-cyan-500 text-cyan-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              Regulatory & Reimbursement
            </button>
          </nav>
        </div>

        <div id="tab-content">
          {activeTab === 'clinical' && (
            <div id="clinical" className="space-y-3">
              <p className="text-xs text-gray-600 mb-4">
                Our clinical strategy relies on phased and gradually increasing clinical trials for each condition, to compare our digital biomarkers against
                established clinical standards to prove accuracy and utility.
              </p>

              {/* 2x2 Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Top Left - Clinical Validation Approach */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
                  <h4 className="font-bold text-base text-gray-800 mb-1">Clinical Validation Approach</h4>
                  <p className="text-xs text-gray-500 mb-4">Our Clinical Validation Approach is encapsulated in the following questions</p>
                  <div className="space-y-4">
                    <div className="flex items-start group hover:bg-gray-50 p-2 rounded-lg transition-colors">
                      <span className="font-bold text-lg text-navy-700 mr-3 w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                      <div>
                        <p className="text-xs text-gray-600 leading-relaxed">Is the AI platform safe for use in clinical settings with minimal risk to patients? <span className="font-semibold text-navy-700">(Clinical Safety)</span></p>
                      </div>
                    </div>
                    <div className="flex items-start group hover:bg-gray-50 p-2 rounded-lg transition-colors">
                      <span className="font-bold text-lg text-navy-700 mr-3 w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                      <div>
                        <p className="text-xs text-gray-600 leading-relaxed">Does the output reliably associate with the targeted clinical condition? <span className="font-semibold text-navy-700">(Scientific Validity)</span></p>
                      </div>
                    </div>
                    <div className="flex items-start group hover:bg-gray-50 p-2 rounded-lg transition-colors">
                      <span className="font-bold text-lg text-navy-700 mr-3 w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                      <div>
                        <p className="text-xs text-gray-600 leading-relaxed">Can the AI platform accurately and reliably generate the intended output from input data? <span className="font-semibold text-navy-700">(Analytical Performance)</span></p>
                      </div>
                    </div>
                    <div className="flex items-start group hover:bg-gray-50 p-2 rounded-lg transition-colors">
                      <span className="font-bold text-lg text-navy-700 mr-3 w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                      <div>
                        <p className="text-xs text-gray-600 leading-relaxed">Does the output lead to accurate and effective healthcare decisions and outcomes? <span className="font-semibold text-navy-700">(Clinical Performance)</span></p>
                      </div>
                    </div>
                    <div className="text-sm text-navy-700 italic bg-orange-50 p-4 rounded-lg border-l-4 border-orange-300 mt-4">
                      <p className="leading-relaxed">Our clinical validation strategy relies on a phased approach, beginning with pilot studies and progressing to large-scale trials, to compare our digital biomarkers against established clinical standards for each neurological condition, thereby proving their scientific validity, accuracy, utility, and safety.</p>
                    </div>
                  </div>
                </div>

                {/* Top Right - Target Diseases */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  {/* Disease Tabs */}
                  <div className="flex border-b border-gray-200 bg-gray-50/50 rounded-t-lg overflow-hidden">
                    {['pd', 'ad', 'ms', 'scz'].map((condition) => (
                      <button
                        key={condition}
                        onClick={() => setActiveCondition(condition)}
                        className={`px-3 py-2 text-sm font-semibold flex-1 text-center border-b-2 transition-all duration-200 ${activeCondition === condition
                          ? 'border-cyan-600 text-cyan-800 bg-white shadow-sm'
                          : 'border-transparent text-gray-500 hover:text-cyan-700 hover:bg-white/70 hover:border-cyan-200'
                          }`}
                      >
                        {conditionData[condition as keyof typeof conditionData].title.split(' ')[0]}
                      </button>
                    ))}
                  </div>

                  {/* Disease Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-sm text-gray-800">
                        {conditionData[activeCondition as keyof typeof conditionData].title}
                      </h4>
                      <div className="flex items-center gap-1">
                        <div
                          className="relative group"
                          data-tooltip-id={`best-case-${activeCondition}`}
                          data-tooltip-content={
                            activeCondition === 'ad'
                              ? "Best-Case Scenario: Platform identifies subtle, early linguistic and vocal markers predictive of AD progression with high accuracy. Provides a less invasive and more accessible tool for cognitive screening and monitoring."
                              : activeCondition === 'ms'
                                ? "Best-Case Scenario: Platform provides sensitive and objective measures of MS-related functional decline, complementing clinician assessments and enabling more frequent, remote monitoring."
                                : activeCondition === 'scz'
                                  ? "Best-Case Scenario: Platform offers objective, quantifiable measures for difficult-to-assess symptoms like negative symptoms and thought disorder, aiding in treatment monitoring and relapse prevention."
                                  : `Best-Case Scenario: Clinical trials demonstrate high diagnostic accuracy for early ${conditionData[activeCondition as keyof typeof conditionData].title.split(' ')[0]}, superior to or significantly augmenting current methods. Digital biomarkers show strong correlation with disease severity and progression.`
                          }
                        >
                          <span className="text-green-500 cursor-help">✓</span>
                        </div>
                        <div
                          className="relative group"
                          data-tooltip-id={`worst-case-${activeCondition}`}
                          data-tooltip-content={
                            activeCondition === 'ad'
                              ? "Worst-Case Scenario: High inter-individual variability in language and speech makes it difficult to establish reliable diagnostic markers. Confounding factors (education, multilingualism, depression) impact accuracy. Digital biomarkers show weak correlation with established cognitive measures or gold-standard biomarkers."
                              : activeCondition === 'ms'
                                ? "Worst-Case Scenario: Difficulty in capturing the diverse and fluctuating symptoms of MS with a standardized set of digital biomarkers. Challenges in correlating digital measures with complex clinical endpoints like EDSS."
                                : activeCondition === 'scz'
                                  ? "Worst-Case Scenario: Subjectivity and complexity of psychiatric symptoms make it extremely challenging to develop reliable and valid digital biomarkers. Stigma may affect patient willingness to engage with voice/video recording. High variability in symptom presentation."
                                  : `Worst-Case Scenario: Difficulty in differentiating ${conditionData[activeCondition as keyof typeof conditionData].title.split(' ')[0]} from atypical parkinsonism or essential tremor using digital biomarkers alone. High variability in biomarker expression. Poor correlation with established clinical measures.`
                          }
                        >
                          <span className="text-red-500 cursor-help">⚠️</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="space-y-3">
                        <div>
                          <span className="font-medium text-xs text-gray-700">Focus:</span>
                          <p className="text-xs text-gray-600">
                            {conditionData[activeCondition as keyof typeof conditionData].focus}
                          </p>
                        </div>
                        <div>
                          <span className="font-medium text-xs text-gray-700">Trial Design:</span>
                          <div className="mt-1 space-y-2">
                            <div className="border-l-2 border-cyan-100 pl-2">
                              <p className="text-xs text-gray-600"><span className="font-medium">Comparator:</span> <span dangerouslySetInnerHTML={{ __html: conditionData[activeCondition as keyof typeof conditionData].comparator }} /></p>
                            </div>
                            {'population' in conditionData[activeCondition as keyof typeof conditionData] && (
                              <div className="border-l-2 border-cyan-100 pl-2">
                                <p className="text-xs text-gray-600"><span className="font-medium">Population:</span> {conditionData[activeCondition as keyof typeof conditionData].population}</p>
                              </div>
                            )}
                            <div className="border-l-2 border-cyan-100 pl-2">
                              <p className="text-xs text-gray-600"><span className="font-medium">Endpoints:</span> {conditionData[activeCondition as keyof typeof conditionData].endpoints}</p>
                            </div>
                            {'technology' in conditionData[activeCondition as keyof typeof conditionData] && (
                              <div className="border-l-2 border-cyan-100 pl-2">
                                <p className="text-xs text-gray-600"><span className="font-medium">Technology:</span> {conditionData[activeCondition as keyof typeof conditionData].technology}</p>
                              </div>
                            )}
                            {'userFriendliness' in conditionData[activeCondition as keyof typeof conditionData] && (
                              <div className="border-l-2 border-cyan-100 pl-2">
                                <p className="text-xs text-gray-600"><span className="font-medium">User-Friendliness:</span> {conditionData[activeCondition as keyof typeof conditionData].userFriendliness}</p>
                              </div>
                            )}
                          </div>
                        </div>
                        {'reference' in conditionData[activeCondition as keyof typeof conditionData] && (
                          <div className="mt-2 p-2 bg-blue-50 rounded border border-blue-100">
                            <p className="text-xs text-blue-700 italic">
                              {conditionData[activeCondition as keyof typeof conditionData].reference}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Left - Clinical Trial Design Principles */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                  <div className="flex items-center gap-2">
                    <h5 className="font-medium text-xs text-gray-700">Clinical Trial Design</h5>
                    <div className="flex items-center gap-1">
                      <div className="relative group">
                        <span
                          className="text-green-500 text-sm cursor-help"
                          onMouseEnter={() => handleTooltipHover('best', 'trial-design')}
                          onMouseLeave={handleTooltipLeave}
                        >
                          ✓
                        </span>
                        {hoveredScenario?.type === 'best' && hoveredScenario.id === 'trial-design' && (
                          <div className="absolute z-10 right-0 w-64 p-2 text-xs text-gray-600 bg-white border border-gray-200 rounded shadow-lg">
                            Best-Case Scenario: Clear, well-defined endpoints align with regulatory expectations. Efficient trial design with appropriate controls and blinding. High-quality data collection and monitoring.
                          </div>
                        )}
                      </div>
                      <div className="relative group">
                        <span
                          className="text-red-500 text-sm cursor-help"
                          onMouseEnter={() => handleTooltipHover('worst', 'trial-design')}
                          onMouseLeave={handleTooltipLeave}
                        >
                          ⚠️
                        </span>
                        {hoveredScenario?.type === 'worst' && hoveredScenario.id === 'trial-design' && (
                          <div className="absolute z-10 right-0 w-64 p-2 text-xs text-gray-600 bg-white border border-gray-200 rounded shadow-lg">
                            Worst-Case Scenario: Endpoints not accepted by regulators. Inadequate statistical power. High dropout rates. Data quality issues. Failure to demonstrate clinical utility.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <div className="p-3 bg-cyan-50 rounded-lg">
                      <h5 className="font-medium text-xs text-cyan-800 mb-1">Objective Measures</h5>
                      <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                        <li>Digital biomarkers</li>
                        <li>Reduced subjectivity</li>
                        <li>Enhanced detection</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-cyan-50 rounded-lg">
                      <h5 className="font-medium text-xs text-cyan-800 mb-1">Continuous Monitoring</h5>
                      <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                        <li>Real-world data</li>
                        <li>Portable Tech</li>
                        <li>Symptom tracking</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-cyan-50 rounded-lg">
                      <h5 className="font-medium text-xs text-cyan-800 mb-1">Advanced Analytics</h5>
                      <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                        <li>ML insights</li>
                        <li>Data processing</li>
                        <li>Pattern analysis</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-cyan-50 rounded-lg">
                      <h5 className="font-medium text-xs text-cyan-800 mb-1">Study Design</h5>
                      <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                        <li>Clear endpoints</li>
                        <li>Clinical utility</li>
                        <li>Validation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom Right - Partnerships */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className="font-semibold text-sm text-gray-800">Key Partnerships & Research Networks</h4>
                    <div className="flex items-center gap-1">
                      <div className="relative group">
                        <span
                          className="text-green-500 text-sm cursor-help"
                          onMouseEnter={() => handleTooltipHover('best', 'partnerships')}
                          onMouseLeave={handleTooltipLeave}
                        >
                          ✓
                        </span>
                        {hoveredScenario?.type === 'best' && hoveredScenario.id === 'partnerships' && (
                          <div className="absolute z-10 right-0 w-64 p-2 text-xs text-gray-600 bg-white border border-gray-200 rounded shadow-lg">
Best-Case Scenario: Mely establishes strong collaborations with leading KOLs and institutions in France and other EU countries for each target condition. Access to high-quality patient data and expertise accelerates clinical validation and enhances the platform&apos;s credibility. Joint publications in high-impact journals.
                          </div>
                        )}
                      </div>
                      <div className="relative group">
                        <span
                          className="text-red-500 text-sm cursor-help"
                          onMouseEnter={() => handleTooltipHover('worst', 'partnerships')}
                          onMouseLeave={handleTooltipLeave}
                        >
                          ⚠️
                        </span>
                        {hoveredScenario?.type === 'worst' && hoveredScenario.id === 'partnerships' && (
                          <div className="absolute z-10 right-0 w-64 p-2 text-xs text-gray-600 bg-white border border-gray-200 rounded shadow-lg">
                            Worst-Case Scenario: Difficulty engaging KOLs due to lack of established reputation or perceived novelty of the approach. Competition for patient recruitment in trials. Challenges in aligning research goals with academic partners.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Strategy Message */}
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 mb-3">
                      <p className="text-xs text-blue-800 leading-relaxed">
                        Engaging with KOLs and leading research institutions is crucial for designing robust clinical trials, gaining access to patient populations, validating the technology, and building credibility.
                      </p>
                    </div>

                    {/* Combined Partnerships Card */}
                    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* France Column */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="bg-purple-100 p-1 rounded-full">
                              <svg className="w-3.5 h-3.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h6 className="text-xs font-medium text-gray-700">France</h6>
                          </div>
                          <ul className="space-y-1.5 text-xs text-gray-600">
                            <li className="flex items-start">
                              <span className="mr-1">•</span>
                              <span>CHUs, TLEs</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-1">•</span>
                              <span>FCRIN4MS</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-1">•</span>
                              <span>Pitié-Salpêtrière, etc.</span>
                            </li>
                          </ul>
                        </div>

                        {/* European Network Column */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="bg-blue-100 p-1 rounded-full">
                              <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                              </svg>
                            </div>
                            <h6 className="text-xs font-medium text-gray-700">Europe</h6>
                          </div>
                          <ul className="space-y-1.5 text-xs text-gray-600">
                            <li className="flex items-start">
                              <span className="mr-1">•</span>
                              <span>Germany: Charité Berlin</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-1">•</span>
                              <span>Netherlands: VUMC</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-1">•</span>
                              <span>Spain: Charcot Foundation</span>
                            </li>
                          </ul>
                        </div>

                        {/* Research Networks Column */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="bg-green-100 p-1 rounded-full">
                              <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                              </svg>
                            </div>
                            <h6 className="text-xs font-medium text-gray-700">Networks</h6>
                          </div>
                          <ul className="space-y-1.5 text-xs text-gray-600">
                            <li className="flex items-start">
                              <span className="mr-1">•</span>
                              <span>Charcot</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-1">•</span>
                              <span>EGRIS</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-1">•</span>
                              <span>FondaMental</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'regulatory' && (
            <div id="regulatory" className="space-y-6">
              {/* Regulatory Section */}
              <div>
                <p className="text-sm text-black italic bg-gray-100 p-4 rounded-md mb-6">
                  An integrated compliance strategy addressing both the MDR and the EU AI Act regulations (including FDA for the USA) simultaneously is crucial from the very beginning. This strategy should address device safety, performance, and AI trustworthiness, ensuring that the platform meets the requirements of both regulations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-cyan-200 p-4 rounded-lg bg-cyan-50">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-cyan-800 text-base">
                        Medical Device Regulation <span className="font-normal italic">(Reg. (EU) 2017/745)</span>: Class IIa/IIb
                      </h4>
                      <div className="flex items-center gap-1">
                        <div className="relative group">
                          <span
                            className="text-green-500 cursor-help"
                            onMouseEnter={() => handleTooltipHover('best', 'mdr')}
                            onMouseLeave={handleTooltipLeave}
                          >
                            ✓
                          </span>
                          {hoveredScenario?.type === 'best' && hoveredScenario.id === 'mdr' && (
                            <div className="absolute z-10 right-0 w-64 p-2 text-xs text-gray-600 bg-white border border-gray-200 rounded shadow-lg">
                              Best-Case Scenario: Smooth MDR certification process. Class IIa classification confirmed. Strong clinical evidence supports safety and performance claims. Efficient QMS in place.
                            </div>
                          )}
                        </div>
                        <div className="relative group">
                          <span
                            className="text-red-500 cursor-help"
                            onMouseEnter={() => handleTooltipHover('worst', 'mdr')}
                            onMouseLeave={handleTooltipLeave}
                          >
                            ⚠️
                          </span>
                          {hoveredScenario?.type === 'worst' && hoveredScenario.id === 'mdr' && (
                            <div className="absolute z-10 right-0 w-64 p-2 text-xs text-gray-600 bg-white border border-gray-200 rounded shadow-lg">
                              Worst-Case Scenario: MDR certification delays. Class IIb classification required (more stringent requirements). Insufficient clinical evidence. QMS not fully compliant. Need for additional clinical investigations.
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="font-semibold text-sm mb-3">Key requirements with focus on safety & performance:</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                      <div className="flex items-start">
                        <span className="mr-1">•</span>
                        <span>ISO 13485 QMS</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-1">•</span>
                        <span>Post-Market Clinical Follow-up (PMCF)</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-1">•</span>
                        <span>Clinical Evaluation (CER)</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-1">•</span>
                        <span>Usability (IEC 62366-1)</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-1">•</span>
                        <span>Risk Management (ISO 14971)</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-1">•</span>
                        <span>Software Lifecycle (IEC 62304)</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-1">•</span>
                        <span>Post-Market Surveillance (PMS)</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-1">•</span>
                        <span>Technical Documentation</span>
                      </div>
                    </div>
                  </div>
                  <div className="border border-purple-200 p-4 rounded-lg bg-purple-50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-purple-800 text-base">
                        EU AI Act <span className="font-normal italic">(Reg. (EU) 2024/1689)</span>: High-Risk AI System
                      </h4>
                      <div className="flex items-center gap-1">
                        <div className="relative group">
                          <span
                            className="text-green-500 cursor-help"
                            onMouseEnter={() => handleTooltipHover('best', 'ai-act')}
                            onMouseLeave={handleTooltipLeave}
                            aria-label="Best case scenario"
                          >
                            ✓
                          </span>
                          {hoveredScenario?.type === 'best' && hoveredScenario.id === 'ai-act' && (
                            <div className="absolute z-10 right-0 w-64 p-2 text-xs text-gray-600 bg-white border border-gray-200 rounded shadow-lg">
                              Best-Case Scenario: Smooth AI Act compliance process. High-risk classification confirmed with clear regulatory pathway. Strong alignment with MDR requirements. Efficient conformity assessment process in place.
                            </div>
                          )}
                        </div>
                        <div className="relative group">
                          <span
                            className="text-red-500 cursor-help"
                            onMouseEnter={() => handleTooltipHover('worst', 'ai-act')}
                            onMouseLeave={handleTooltipLeave}
                            aria-label="Worst case scenario"
                          >
                            ⚠️
                          </span>
                          {hoveredScenario?.type === 'worst' && hoveredScenario.id === 'ai-act' && (
                            <div className="absolute z-10 right-0 w-64 p-2 text-xs text-gray-600 bg-white border border-gray-200 rounded shadow-lg">
                              Worst-Case Scenario: Significant challenges in meeting AI Act requirements. High-risk classification leads to extensive documentation and testing requirements. Misalignment between MDR and AI Act requirements. Delays in conformity assessment process.
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="font-semibold text-sm mb-3">Key requirements with focus on AI trustworthiness, risk management:</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                      <div className="flex items-start">
                        <span className="mr-1">•</span>
                        <span>Technical Documentation</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-1">•</span>
                        <span>Data and Data Governance</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-1">•</span>
                        <span>Logging/Record-Keeping</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-1">•</span>
                        <span>Transparency and Dissemination</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-1">•</span>
                        <span>Human Oversight</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-1">•</span>
                        <span>Accuracy, Robustness, and Cybersecurity</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-1">•</span>
                        <span>Conformity Assessment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reimbursement Section */}
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <p className="text-sm italic text-black bg-gray-100 p-4 rounded-md">France has relatively developed reimbursement pathways for digital health technologies. The French government&apos;s Plan France 2030 has committed €718.4 million to accelerate digital health adoption, creating a supportive ecosystem for Mely. Careful planning for evidence generation and certification processes will be done from the very start. Up to 72% of digital health startups face challenges with regulatory approval timelines.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Key Regulatory Bodies */}
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-blue-800 text-sm">Key Regulatory Bodies</h4>
                      <div className="flex items-center gap-2">
                        <div className="relative group">
                          <span
                            className="text-green-600 cursor-help"
                            onMouseEnter={() => handleTooltipHover('best', 'reimbursement')}
                            onMouseLeave={handleTooltipLeave}
                            aria-label="Best case scenario"
                          >
                            ✓
                          </span>
                          {hoveredScenario?.type === 'best' && hoveredScenario.id === 'reimbursement' && (
                            <div className="absolute z-10 right-0 w-72 p-2 text-xs text-gray-600 bg-white border border-gray-200 rounded shadow-lg">
                              Best-Case Scenario: Successful ANS certification and positive CNEDiMTS opinion, enabling access to PECAN and LPPR. Favorable reimbursement terms are negotiated, with a commercially viable price point. Early engagement with payers and health technology assessment (HTA) bodies facilitates a smooth reimbursement process.
                            </div>
                          )}
                        </div>
                        <div className="relative group">
                          <span
                            className="text-red-600 cursor-help"
                            onMouseEnter={() => handleTooltipHover('worst', 'reimbursement')}
                            onMouseLeave={handleTooltipLeave}
                            aria-label="Worst case scenario"
                          >
                            ⚠️
                          </span>
                          {hoveredScenario?.type === 'worst' && hoveredScenario.id === 'reimbursement' && (
                            <div className="absolute z-10 right-0 w-72 p-2 text-xs text-gray-600 bg-white border border-gray-200 rounded shadow-lg">
                              Worst-Case Scenario: Failure to meet ANS certification criteria or receive a positive CNEDiMTS opinion, blocking access to PECAN and LPPR. Reimbursement is denied or significantly delayed, severely impacting revenue generation in France. The negotiated price under LPPR is too low to be commercially viable. Underestimating FDA approval timelines is a common failure point for US startups (72% fail here); similar risks apply to EU/French pathways.
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-xs">
                      <li className="flex items-start">
                        <span className="font-semibold mr-1">•</span>
                        <div>
                          <span className="font-medium text-blue-700">HAS/CNEDiMTS: </span>
                          <span>Evaluates clinical and organizational benefits of DTx/DMDs</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-1">•</span>
                        <div>
                          <span className="font-medium text-blue-700">ANS: </span>
                          <span>Technical certification for security and interoperability</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-1">•</span>
                        <div>
                          <span className="font-medium text-blue-700">CEPS: </span>
                          <span>Negotiates product pricing</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* PECAN Pathway */}
                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                    <h4 className="font-bold text-amber-800 text-sm mb-2">PECAN (Prise en Charge Anticipée Numérique)</h4>
                    <ul className="space-y-2 text-xs">
                      <li className="flex items-start">
                        <span className="font-semibold mr-1">•</span>
                        <div><span className="font-medium">Strategic Implication: </span>Early revenue and real-world evidence.</div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-1">•</span>
                        <div><span className="font-medium">Purpose: </span>1-year non-renewable early reimbursement</div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-1">•</span>
                        <div><span className="font-medium">Eligibility: </span>Innovative DMDs meeting ANS certification</div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-1">•</span>
                        <div><span className="font-medium">Reimbursement: </span>€435 initial + €38.3/month (max €780/year)</div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-1">•</span>
                        <div><span className="font-medium">Timeline: </span>Must apply for LPPR within 6 months</div>
                      </li>
                    </ul>
                  </div>

                  {/* Common Law Pathway */}
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <h4 className="font-bold text-green-800 text-sm mb-2">Common Law (LPPR Listing)</h4>
                    <ul className="space-y-2 text-xs">
                      <li className="flex items-start">
                        <span className="font-semibold mr-1">•</span>
                        <div><span className="font-medium">Strategic Implication: </span>Sustainable revenue in France.</div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-1">•</span>
                        <div><span className="font-medium">Purpose: </span>Long-term reimbursement (5+ years)</div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-1">•</span>
                        <div><span className="font-medium">Requirements: </span>Strong clinical evidence, ANS certification</div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-1">•</span>
                        <div><span className="font-medium">Process: </span>CNEDiMTS evaluation → CEPS price negotiation</div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-1">•</span>
                        <div><span className="font-medium">Timeline: </span>Typically follows PECAN period</div>
                      </li>
                    </ul>
                  </div>
                </div>


                {/* Data Governance Regulations Section */}

                <div className="space-y-4 pt-4 border-t border-gray-200">
                  <p className="text-sm italic text-black bg-gray-100 p-4 rounded-md">Robust data governance is essential for Mely, requiring ongoing investment in expertise (e.g., Data Protection Officer), processes, and technology to maintain compliance as the platform evolves. Ethical handling of sensitive health data in AI applications is crucial for building trust with patients, clinicians, and regulators.</p>

                  {/* Two-column layout for GDPR and HDS cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* GDPR Card */}
                    <div className="border border-blue-200 p-4 rounded-lg bg-blue-50">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-blue-800 text-lg">
                          GDPR <span className="font-normal italic">(Reg. (EU) 2016/679)</span>
                        </h4>
                        <div className="flex items-center gap-2">
                          <div className="relative group">
                            <span
                              className="text-green-600 cursor-help"
                              onMouseEnter={() => handleTooltipHover('best', 'gdpr')}
                              onMouseLeave={handleTooltipLeave}
                              aria-label="Best case scenario"
                            >
                              ✓
                            </span>
                            {hoveredScenario?.type === 'best' && hoveredScenario.id === 'gdpr' && (
                              <div className="absolute z-10 right-0 w-72 p-2 text-xs text-gray-600 bg-white border border-gray-200 rounded shadow-lg">
                                Best-Case Scenario: Robust GDPR compliance framework embedded in all operations. Clear patient consent processes. DPIAs proactively identify and mitigate risks. No data breaches or complaints.
                              </div>
                            )}
                          </div>
                          <div className="relative group">
                            <span
                              className="text-red-600 cursor-help"
                              onMouseEnter={() => handleTooltipHover('worst', 'gdpr')}
                              onMouseLeave={handleTooltipLeave}
                              aria-label="Worst case scenario"
                            >
                              ⚠️
                            </span>
                            {hoveredScenario?.type === 'worst' && hoveredScenario.id === 'gdpr' && (
                              <div className="absolute z-10 right-0 w-72 p-2 text-xs text-gray-600 bg-white border border-gray-200 rounded shadow-lg">
                                Worst-Case Scenario: GDPR violations lead to substantial fines (up to 4% of annual global turnover or €20 million), reputational damage, and loss of trust. Inadequate consent or security measures.
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-700 space-y-2">
                        <p className="font-semibold">Core GDPR Principles:</p>
                        <ol className="list-decimal pl-5 space-y-1">
                          <li><span className="font-medium">Lawfulness, Fairness, and Transparency:</span> Processing must have a lawful basis (e.g., explicit consent for research, necessity for medical diagnosis under professional responsibility). Patients must be clearly informed about how their data is used, the AI decision-making process, and their rights.</li>
                          <li><span className="font-medium">Purpose Limitation:</span> Data collected for specific, explicit, and legitimate purposes (e.g., diagnosing Parkinson's) should not be further processed in a manner incompatible with those purposes.</li>
                          <li><span className="font-medium">Data Minimization:</span> Collect only the data necessary for the intended purpose.</li>
                          <li><span className="font-medium">Accuracy:</span> Ensure personal data is accurate and kept up to date.</li>
                          <li><span className="font-medium">Storage Limitation:</span> Keep data in an identifiable form only for as long as necessary.</li>
                          <li><span className="font-medium">Integrity and Confidentiality (Security):</span> Implement appropriate technical and organizational measures to protect data (encryption, access controls, pseudonymization).</li>
                          <li><span className="font-medium">Accountability:</span> Mely must be able to demonstrate compliance with GDPR principles. This includes maintaining records of processing activities (RoPA) and conducting Data Protection Impact Assessments (DPIAs) for high-risk processing.</li>
                        </ol>

                        <p><span className="font-semibold">Data Subject Rights:</span> Mely must have procedures to facilitate patients' rights to access, rectify, erase, restrict processing, data portability, and object to processing, including automated decision-making. The "right to explanation" for automated decisions is particularly relevant for AI.</p>

                        <p><span className="font-semibold">Consent:</span> For processing health data for research or AI training where other lawful bases may not fully apply, explicit and informed consent is crucial. Consent mechanisms must be transparent, and withdrawal must be easy. Traditional consent frameworks may be inadequate for complex AI data uses.</p>

                        <p><span className="font-semibold">Bias Mitigation:</span> GDPR principles indirectly support bias mitigation by requiring fairness and accuracy. Data used for AI training must be handled to avoid discriminatory outcomes.</p>

                        <p><span className="font-medium">Data Transfers:</span> If data is transferred outside the EU/EEA, ensure appropriate safeguards are in place (e.g., adequacy decisions, Standard Contractual Clauses).</p>
                      </div>
                    </div>

                    {/* HDS Card */}
                    <div className="border border-purple-200 p-4 rounded-lg bg-purple-50">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-purple-800 text-lg">
                          HDS <span className="font-normal italic">(COFRAC / ISO 27001 & 17021)</span>
                        </h4>
                        <div className="flex items-center gap-2">
                          <div className="relative group">
                            <span
                              className="text-green-600 cursor-help"
                              onMouseEnter={() => handleTooltipHover('best', 'hds')}
                              onMouseLeave={handleTooltipLeave}
                              aria-label="Best case scenario"
                            >
                              ✓
                            </span>
                            {hoveredScenario?.type === 'best' && hoveredScenario.id === 'hds' && (
                              <div className="absolute z-10 right-0 w-72 p-2 text-xs text-gray-600 bg-white border border-gray-200 rounded shadow-lg">
                                Best-Case Scenario: Mely successfully deploys its platform on an HDS-certified cloud infrastructure in France, meeting all requirements for secure health data hosting. Smooth process with the chosen cloud provider.
                              </div>
                            )}
                          </div>
                          <div className="relative group">
                            <span
                              className="text-red-600 cursor-help"
                              onMouseEnter={() => handleTooltipHover('worst', 'hds')}
                              onMouseLeave={handleTooltipLeave}
                              aria-label="Worst case scenario"
                            >
                              ⚠️
                            </span>
                            {hoveredScenario?.type === 'worst' && hoveredScenario.id === 'hds' && (
                              <div className="absolute z-10 right-0 w-72 p-2 text-xs text-gray-600 bg-white border border-gray-200 rounded shadow-lg">
                                Worst-Case Scenario: Difficulties in finding or configuring services with an HDS-certified provider. Misconfigurations lead to non-compliance despite using certified infrastructure. Unexpected costs or complexities in meeting HDS operational requirements.
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-700 space-y-3">
                        <p>For Mely to operate in France and host personal health data collected for delivering diagnostic services, HDS certification is mandatory. This applies to any entity, including cloud service providers, that hosts such data.</p>

                        <p className="font-semibold">Key HDS Requirements:</p>
                        <p>Strong security measures:</p>
                        <ol className="list-decimal pl-5 space-y-1">
                          <li>Data encryption</li>
                          <li>Access controls</li>
                          <li>Regular security audits</li>
                          <li>Robust backup</li>
                          <li>Disaster recovery systems</li>
                        </ol>
                        <p>Ensuring data confidentiality, integrity, and availability.</p>
                        <p>Compliance with French and EU health data protection laws, including GDPR.</p>
                        <p>The certification covers activities like data storage, backup, restoration, and ensuring accessibility.</p>

                        <p className="font-semibold">Process:</p>
                        <p>While the detailed process isn't fully outlined in the provided material, it involves choosing an HDS-certified hosting provider or, if Mely were to host data itself (less likely for a startup), undergoing a rigorous certification audit by an accredited body. The certification is granted and monitored by French regulatory bodies.</p>

                        <p className="font-semibold">Our Approach:</p>
                        <p>The most practical approach for Mely will be to use a major cloud provider (AWS, Azure, GCP) that already holds HDS certification for their French data centers and relevant services. Mely would then be responsible for configuring its application and processes on top of the certified infrastructure in a compliant manner.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
    </section>
  );
}
