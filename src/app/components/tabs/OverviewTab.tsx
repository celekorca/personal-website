import { FaTabletAlt, FaDna, FaDatabase, FaLightbulb, FaCrosshairs, FaExclamationTriangle, FaClipboardList } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';

import InfoTooltip from './InfoTooltip';
import ProcessStep from './ProcessStep';
import ArrowIcon from './ArrowIcon';

export default function OverviewTab() {
  return (
    <div className="space-y-6">
      {/* Row 1: Single Card */}
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-6 border-l-4 border-indigo-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-indigo-600">
        <h3 className="text-xl font-semibold text-navy-800 mb-4">Revolutionizing Brain Health with AI</h3>
        <p className="text-gray-700 text-base">Mely is an innovative startup developing an AI-powered platform with rapid digital tests to enable the early diagnosis and effective monitoring of neurological and mental diseases. We address the significant unmet need for faster, more objective, and accessible diagnostic tools.</p>
      </div>

      {/* Row 2: Two Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md p-6 border-l-4 border-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-600">
          <div className="flex items-center mb-4">
            <FaCrosshairs className="text-akita-orange mr-3 text-3xl" />
            <h4 className="text-xl font-semibold text-navy-800">Our Mission</h4>
          </div>
          <p className="text-gray-700 text-base ml-11">To empower clinicians and researchers with cutting-edge technology, improving diagnostic accuracy and disease management for neurological and mental conditions.</p>
        </div>
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md p-6 border-l-4 border-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-600">
          <div className="flex items-center mb-4">
            <FaExclamationTriangle className="text-yellow-500 text-3xl mr-3" />
            <h4 className="text-xl font-semibold text-navy-800">Our Vision</h4>
          </div>
          <p className="text-gray-700 text-base ml-11">To become a global leader in AI-driven neuro-diagnostics, making early detection and precise monitoring a reality for millions worldwide and ultimately enhancing brain health for all.</p>
        </div>
      </div>

      {/* Row 3: Single Card */}
      <div className="bg-orange-50 rounded-xl shadow-md p-8 border-l-4 border-indigo-500">
        <div className="flex justify-center mb-6">
          <InfoTooltip content="Mely&apos;s solution utilizes engaging digital assessments (under 20 minutes, on tablets or VR headsets) to capture rich cognitive and motor data. This data is then analyzed by proprietary AI algorithms to generate objective digital biomarkers, offering a new paradigm in understanding brain health.">
            <h3 className="text-xl font-semibold text-navy-800 text-center inline-flex items-center">
              Our Innovative Approach
            </h3>
          </InfoTooltip>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <ProcessStep
            icon={<FaTabletAlt />}
            title="Digital Assessments"
            description="Tablet/VR, <20 min"
            color="text-blue-500"
          />
          <ArrowIcon />
          <ProcessStep
            icon={<FaDatabase />}
            title="Rich Data Capture"
            description="Cognitive & Motor"
            color="text-teal-500"
          />
          <ArrowIcon />
          <ProcessStep
            icon={<GiBrain />}
            title="AI Algorithms"
            description="Proprietary Analysis"
            color="text-purple-500"
          />
          <ArrowIcon />
          <ProcessStep
            icon={<FaDna />}
            title="Objective Biomarkers"
            description="Digital Indicators"
            color="text-pink-500"
          />
          <ArrowIcon />
          <ProcessStep
            icon={<FaLightbulb />}
            title="New Paradigm"
            description="Brain Health Insight"
            color="text-indigo-500"
          />
        </div>
      </div>

      {/* Row 4: Two Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-white to-teal-50 rounded-xl shadow-md p-6 border-l-4 border-teal-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-teal-600">
          <div className="flex items-center mb-4">
            <h4 className="text-xl font-semibold text-navy-800">
              Transforming Patient Care & Research
            </h4>
            <InfoTooltip content="Our platform aims to transform patient care by facilitating earlier interventions and personalized treatment strategies. It also seeks to accelerate the development of new therapies by providing pharmaceutical companies and research institutions with reliable tools for clinical trials and biomarker discovery." />
          </div>
          <ul className="space-y-2 text-base text-gray-700">
            <li className="flex items-center">
              <span className="text-teal-600 mr-2 text-lg">•</span>
              <span>Facilitates earlier interventions</span>
            </li>
            <li className="flex items-center">
              <span className="text-teal-600 mr-2 text-lg">•</span>
              <span>Enables personalized treatment</span>
            </li>
            <li className="flex items-center">
              <span className="text-teal-600 mr-2 text-lg">•</span>
              <span>Accelerates development of new therapies</span>
            </li>
            <li className="flex items-center">
              <span className="text-teal-600 mr-2 text-lg">•</span>
              <span>Reliable tools for clinical trials</span>
            </li>
            <li className="flex items-center">
              <span className="text-teal-600 mr-2 text-lg">•</span>
              <span>Biomarker discovery</span>
            </li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-md p-6 border-l-4 border-purple-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-purple-600">
          <div className="mb-4">
            <div className="flex items-center">
              <h4 className="text-xl font-semibold text-navy-800">Focus Areas & Future Directions</h4>
              <InfoTooltip content="Our initial focus is on neurodegenerative conditions like Parkinson&apos;s and Alzheimer&apos;s disease. We plan to expand into a broader range of CNS disorders, including mental health and neurodevelopmental conditions, driven by a team with deep expertise in neuroscience, AI, and clinical operations." />
            </div>
            <p className="text-gray-600 text-sm mt-1 italic">Baked by a team of expertise in neuroscience, AI, and clinical operations</p>
          </div>
          <ul className="space-y-2 text-base text-gray-700">
            <li className="flex items-center">
              <span className="text-purple-500 mr-2 text-lg">•</span>
              <span>Initialy Parkinson&apos;s and Alzheimer&apos;s</span>
            </li>
            <li className="flex items-center">
              <span className="text-purple-500 mr-2 text-lg">•</span>
              <span>Broader CNS disorders next</span>
            </li>
            <li className="flex items-center">
              <span className="text-purple-500 mr-2 text-lg">•</span>
              <span>Mental health and neurodevelopmental conditions later</span>
            </li>
          </ul>

        </div>
      </div>

      {/* Lean Canvas Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-navy-800 mb-6 flex items-center">
          <FaClipboardList className="mr-2" />
          MELY Lean Canvas
        </h2>

        {/* First Row - 5 columns */}
        <div className="grid grid-cols-5 gap-4 mb-4">
          {/* Problem */}
          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-red-500">
            <h3 className="font-semibold text-lg mb-2 text-red-600">Problem</h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Need for accessible, reliable and affordable tools for neurodegenerative disease (ND) diagnosis and follow up</li>
              <li>• Aid specialists in preliminary screenings for ND</li>
              <li>• Objective biomarkers to measure drug efficacy in ND clinical trials</li>
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-green-500">
            <h3 className="font-semibold text-lg mb-2 text-green-600">Solution</h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• AI-powered digital assessments</li>
              <li>• Rapid, objective testing (under 20 min)</li>
              <li>• Digital biomarkers for early detection</li>
              <li>• Accessible tablet/VR platform</li>
            </ul>
          </div>

          {/* Unique Value Proposition */}
          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-purple-500">
            <h3 className="font-semibold text-lg mb-2 text-purple-600">Unique Value Proposition</h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• First AI platform combining tablet & VR</li>
              <li>• 80% faster than traditional methods</li>
              <li>• 30% more accurate than standard assessments</li>
              <li>• Scalable digital solution</li>
            </ul>
          </div>

          {/* Unfair Advantage */}
          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-yellow-500">
            <h3 className="font-semibold text-lg mb-2 text-yellow-600">Unfair Advantage</h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Proprietary AI algorithms</li>
              <li>• Strong IP portfolio</li>
              <li>• Expert team in neuro + AI</li>
              <li>• First-mover advantage in digital biomarkers</li>
            </ul>
          </div>

          {/* Customer Segments */}
          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-indigo-500">
            <h3 className="font-semibold text-lg mb-2 text-indigo-600">Customer Segments</h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Neurologists & clinicians</li>
              <li>• Pharmaceutical companies</li>
              <li>• Research institutions</li>
              <li>• Clinical trial organizations</li>
            </ul>
          </div>
        </div>

        {/* Second Row - 5 columns */}
        <div className="grid grid-cols-5 gap-4 mb-4">
          {/* Existing Alternatives */}
          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-gray-400">
            <h3 className="font-semibold text-lg mb-2 text-gray-700">Existing Alternatives</h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Traditional cognitive assessments</li>
              <li>• Paper-based questionnaires</li>
              <li>• Basic digital assessments</li>
              <li>• In-person neurological exams</li>
              <li>• MRI/CT scans</li>
            </ul>
          </div>

          {/* Key Metrics */}
          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-blue-500">
            <h3 className="font-semibold text-lg mb-2 text-blue-600">Key Metrics</h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Number of assessments completed</li>
              <li>• Accuracy of predictions</li>
              <li>• Time to diagnosis</li>
              <li>• User engagement rates</li>
              <li>• Clinical validation results</li>
            </ul>
          </div>

          {/* High-Level Concept */}
          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-teal-500">
            <h3 className="font-semibold text-lg mb-2 text-teal-600">High-Level Concept</h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• AI-powered digital neurology platform</li>
              <li>• Combines tablet and VR for comprehensive assessment</li>
              <li>• Generates objective digital biomarkers</li>
              <li>• Enables early detection and monitoring</li>
            </ul>
          </div>

          {/* Channels */}
          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-pink-500">
            <h3 className="font-semibold text-lg mb-2 text-pink-600">Channels</h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Direct sales to healthcare providers</li>
              <li>• Partnerships with pharma for trials</li>
              <li>• Research institution collaborations</li>
              <li>• Medical conferences and publications</li>
            </ul>
          </div>

          {/* Early Adopters */}
          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-orange-500">
            <h3 className="font-semibold text-lg mb-2 text-orange-600">Early Adopters</h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Progressive neurology clinics</li>
              <li>• Academic medical centers</li>
              <li>• Pharma R&D departments</li>
              <li>• Clinical research organizations</li>
            </ul>
          </div>
        </div>

        {/* Third Row - 2 columns */}
        <div className="grid grid-cols-2 gap-4">
          {/* Cost Structure */}
          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-gray-600">
            <h3 className="font-semibold text-lg mb-2 text-gray-700">Cost Structure</h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• R&D and AI development</li>
              <li>• Clinical validation studies</li>
              <li>• Regulatory compliance and approvals</li>
              <li>• Sales and marketing</li>
              <li>• Platform maintenance and support</li>
            </ul>
          </div>

          {/* Revenue Streams */}
          <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-green-600">
            <h3 className="font-semibold text-lg mb-2 text-green-700">Revenue Streams</h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Subscription model for clinics/hospitals</li>
              <li>• Per-assessment pricing for providers</li>
              <li>• Licensing to pharma for clinical trials</li>
              <li>• Research grants and partnerships</li>
              <li>• Enterprise solutions for large providers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
