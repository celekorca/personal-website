import { FaExclamationTriangle, FaRegLightbulb, FaCheck, FaUserMd, FaFlask, FaPills, FaUserInjured, FaCheckCircle } from 'react-icons/fa';
import { FaStar, FaLinkedin, FaDumbbell, FaBullseye } from 'react-icons/fa6';
import InfoTooltip from './InfoTooltip';
import InfoCard from './InfoCard';
import TeamMemberCard from './TeamMemberCard';
import TargetAudience from './TargetAudience';
import Roadmap from './Roadmap';
import { TeamMember, TargetAudience as TargetAudienceType, RoadmapItem } from './types/project.types';

/**
 * Main ProjectTab component that displays information about the Mely project
 */
const ProjectTab: React.FC = () => {
  // Team members data
  const teamMembers: TeamMember[] = [
    {
      name: 'Marsel Mano, PhD',
      title: 'Neuroscience, AI & Clinical Lead',
      linkedinUrl: 'https://linkedin.com/in/marselmano',
      photoPlaceholder: 'Photo',
      strengths: [
        "PhD Neuroscience, AI/CS Master's",
        '20+ yrs CNS clinical trials & biomarkers',
        'Patented Neurofeedback tech',
        'Entrepreneurial vision & drive'
      ]
    },
    {
      name: 'Reinaldo Argjiri, EMBA',
      title: 'Technology, Infrastructure & Security Lead',
      linkedinUrl: 'https://linkedin.com/in/reinaldoargjiri',
      photoPlaceholder: 'Photo',
      strengths: [
        'EMBA, MS Computer Science',
        '20+ yrs IT leadership (Cloud, Security)',
        'CISO experience, ISO 27001',
        'Scalable platform architecture'
      ]
    }
  ];

  // Target audience data
  const targetAudiences: TargetAudienceType[] = [
    {
      id: 'neurologists',
      title: 'Neurologists',
      icon: FaUserMd,
      color: '#10B981', // green-500
      benefits: [
        'Early and accurate diagnosis',
        'Objective monitoring'
      ]
    },
    {
      id: 'researchers',
      title: 'Clinical Researchers',
      icon: FaFlask,
      color: '#3B82F6', // blue-500
      benefits: [
        'Precise patient stratification',
        'Treatment response tracking'
      ]
    },
    {
      id: 'pharma',
      title: 'Pharma Companies',
      icon: FaPills,
      color: '#8B5CF6', // purple-500
      benefits: [
        'Faster drug development',
        'Objective trial endpoints'
      ]
    },
    {
      id: 'patients',
      title: 'Patients (B2B2B)',
      icon: FaUserInjured,
      color: '#F59E0B', // amber-500
      benefits: [
        'Remote patient monitoring',
        'Clinician supervision',
        'Enhanced accessibility'
      ]
    }
  ];

  // Roadmap data
  const roadmapItems: RoadmapItem[] = [
    {
      period: 'Short-Term (1-2 Yrs)',
      title: 'Short-Term',
      borderColor: 'border-blue-500',
      bgColor: 'from-blue-50',
      textColor: 'text-blue-800',
      checkColor: 'bg-blue-100 text-blue-500',
      items: [
        "Develop & validate Parkinson's MVP",
        'First pilot study',
        'Secure seed funding',
        'Initiate CE marking'
      ]
    },
    {
      period: 'Medium-Term (3-5 Yrs)',
      title: 'Medium-Term',
      borderColor: 'border-purple-500',
      bgColor: 'from-purple-50',
      textColor: 'text-purple-800',
      checkColor: 'bg-purple-100 text-purple-500',
      items: [
        "Parkinson's regulatory approval",
        'Commercial launch France/EU',
        "Expand studies (Alzheimer's, MS, Schiz.)",
        'Series A funding'
      ]
    },
    {
      period: 'Long-Term (5+ Yrs)',
      title: 'Long-Term',
      borderColor: 'border-teal-500',
      bgColor: 'from-teal-50',
      textColor: 'text-teal-800',
      checkColor: 'bg-teal-100 text-teal-500',
      items: [
        'Global leader in AI neuro-diagnostics',
        'International adoption & reimbursement',
        'Expand diagnostic portfolio',
        'Implement B2B2C model'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* The Critical Need Card */}
        <InfoCard
          title="The Critical Need"
          description="Current neuro-diagnostics are often slow and exclusionary. There's a pressing need for faster, reliable, and accessible tools for early detection and management."
          borderColor="border-red-500"
          icon={
            <>
              <FaExclamationTriangle className="text-red-500 text-2xl" aria-hidden="true" />
              <InfoTooltip content="The genesis of Mely is twofold: a profound personal experience with Parkinson's disease and over 15 years in CNS drug development highlighted a significant market gap. Current diagnostic processes are often lengthy and based on exclusion, creating a critical need for rapid, reliable, and accessible tools for early detection and ongoing management of neurodegenerative and mental illnesses to improve patient care and accelerate therapy development." />
            </>
          }
        />

        {/* Mely's Innovative Solution Card */}
        <InfoCard
          title="Mely's Innovative Solution"
          description="Rapid (15-20 min) tests collecting rich cognitive & motor data to train AI algorithms, supporting diagnostic hypotheses and improving patient care."
          borderColor="border-blue-500"
          icon={
            <>
              <div className="relative">
                <FaRegLightbulb className="text-yellow-500 text-2xl relative z-10" />
                <FaStar className="absolute -top-2 -right-2 text-yellow-400 animate-pulse" size={12} />
                <FaStar className="absolute -bottom-1 -left-1 text-yellow-300 animate-pulse" size={10} style={{ animationDelay: '0.5s' }} />
              </div>
              <InfoTooltip content="Mely offers a platform using rapid digital tests (less than 20 minutes, deployable on tablet or VR headset) to generate digital biomarkers. By collecting rich data from cognitive and motor tasks, our AI algorithm provides crucial support for diagnostic hypotheses, aiming to provide a faster, more objective diagnostic aid." />
            </>
          }
        >
          <div className="flex items-center space-x-2 mt-3">
            <span className="text-gray-500 text-sm">Compatible with:</span>
            <i className="fas fa-tablet-alt text-gray-500" aria-hidden="true"></i>
            <i className="fas fa-vr-cardboard text-gray-500" aria-hidden="true"></i>
          </div>
        </InfoCard>
      </div>

      {/* Founders & Team Section */}
      <div className="bg-gray-50 rounded-2xl shadow-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-center text-navy-800 mb-8">Founding Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Marsel Mano Card */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                {/* Photo placeholder */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                  <span className="text-sm">Photo</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-800">Marsel Mano, PhD</h4>
              <p className="text-navy-800 font-medium mb-3">Neuroscience, AI & Clinical Lead</p>
              
              <a 
                href="https://linkedin.com/in/marselmano" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
              >
                <FaLinkedin className="mr-2" />
                LinkedIn
              </a>
              
              <div className="text-left w-full">
                <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <FaDumbbell className="mr-2 text-indigo-600" />
                  Key Strengths:
                </h5>
                <ul className="text-sm text-gray-700 space-y-2 pl-1">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-700 mt-0.5 mr-2 flex-shrink-0" />
                    <span>PhD Neuroscience, AI/CS Master's</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-700 mt-0.5 mr-2 flex-shrink-0" />
                    <span>20+ yrs CNS clinical trials & biomarkers</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-700 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Patented Neurofeedback tech</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-700 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Entrepreneurial vision & drive</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reinaldo Argjiri Card */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                {/* Photo placeholder */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                  <span className="text-sm">Photo</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-800">Reinaldo Argjiri, EMBA</h4>
              <p className="text-navy-800 font-medium mb-3">Technology, Infrastructure & Security Lead</p>
              
              <a 
                href="https://linkedin.com/in/reinaldoargjiri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
              >
                <FaLinkedin className="mr-2" />
                LinkedIn
              </a>
              
              <div className="text-left w-full">
                <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <FaDumbbell className="mr-2 text-indigo-600" />
                  Key Strengths:
                </h5>
                <ul className="text-sm text-gray-700 space-y-2 pl-1">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-700 mt-0.5 mr-2 flex-shrink-0" />
                    <span>EMBA, MS Computer Science</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-700 mt-0.5 mr-2 flex-shrink-0" />
                    <span>20+ yrs IT leadership (Cloud, Security)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-700 mt-0.5 mr-2 flex-shrink-0" />
                    <span>CISO experience, ISO 27001</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-700 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Scalable platform architecture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Target Audience Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center flex items-center justify-center">
          <FaBullseye className="mr-2 text-indigo-600" />
          Target Audience
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-green-500">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base mb-2 flex items-center">
              <FaUserMd className="mr-2 text-green-600" />
              Neurologists
            </h4>
            <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5">
              <li className="flex items-start">
                <span className="text-green-500 mr-1.5 mt-0.5">•</span>
                <span>Early and accurate diagnosis</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-1.5 mt-0.5">•</span>
                <span>Objective monitoring</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-blue-500">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base mb-2 flex items-center">
              <FaFlask className="mr-2 text-blue-500" />
              Clinical Researchers
            </h4>
            <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5">
              <li className="flex items-start">
                <span className="text-blue-500 mr-1.5 mt-0.5">•</span>
                <span>Precise patient stratification</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-1.5 mt-0.5">•</span>
                <span>Treatment response tracking</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-purple-500">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base mb-2 flex items-center">
              <FaPills className="mr-2 text-purple-500" />
              Pharma Companies
            </h4>
            <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5">
              <li className="flex items-start">
                <span className="text-purple-500 mr-1.5 mt-0.5">•</span>
                <span>Faster drug development</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-1.5 mt-0.5">•</span>
                <span>Objective trial endpoints</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-amber-500">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base mb-2 flex items-center">
              <FaUserInjured className="mr-2 text-amber-500" />
              Patients (B2B2B)
            </h4>
            <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5">
              <li className="flex items-start">
                <span className="text-amber-500 mr-1.5 mt-0.5">•</span>
                <span>Remote patient monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-1.5 mt-0.5">•</span>
                <span>Clinician supervision</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-1.5 mt-0.5">•</span>
                <span>Enhanced accessibility</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Market Focus & Expansion Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-indigo-500">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Market Focus & Expansion</h3>
          <ul className="space-y-3">
            <li className="flex">
              <span className="text-indigo-500 mr-2 font-bold">•</span>
              <div>
                <span className="font-medium text-gray-800">Initial:</span>
                <span className="text-gray-600 ml-1">Neurodegenerative diseases (Parkinson's, Alzheimer's, Schizophrenia)</span>
              </div>
            </li>
            <li className="flex">
              <span className="text-indigo-500 mr-2 font-bold">•</span>
              <div>
                <span className="font-medium text-gray-800">Future:</span>
                <span className="text-gray-600 ml-1">Neurodevelopmental disorders & broader mental health</span>
              </div>
            </li>
            <li className="flex">
              <span className="text-indigo-500 mr-2 font-bold">•</span>
              <div>
                <span className="font-medium text-gray-800">Geography:</span>
                <span className="text-gray-600 ml-1">France → EU → Asia → North America</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Regulatory & Compliance Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-teal-500">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Regulatory & Compliance</h3>
          <p className="text-gray-600 mb-4">
            Committed to adhering to strict regulations with an experienced team.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-gray-50 p-3 rounded-lg">
              <h4 className="font-medium text-teal-700 text-sm mb-1">Regulatory Approvals</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• CE Mark</li>
                <li>• FDA Considerations</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <h4 className="font-medium text-teal-700 text-sm mb-1">Data Protection</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• GDPR Compliant</li>
                <li>• HIPAA Compliant</li>
                <li>• EU AI Act Compliant</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Roadmap Section */}
      <div className="bg-orange-50 rounded-2xl shadow-lg p-6 border border-orange-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Strategic Roadmap</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Short-Term Card */}
          <div className="bg-gradient-to-b from-blue-50 to-white rounded-xl p-6 border-t-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
              Short-Term (1-2 Yrs)
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 text-blue-500">
                  <FaCheck className="h-3 w-3" />
                </div>
                <span className="text-gray-700">Develop & validate Parkinson's MVP</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 text-blue-500">
                  <FaCheck className="h-3 w-3" />
                </div>
                <span className="text-gray-700">First pilot study</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 text-blue-500">
                  <FaCheck className="h-3 w-3" />
                </div>
                <span className="text-gray-700">Secure seed funding</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 text-blue-500">
                  <FaCheck className="h-3 w-3" />
                </div>
                <span className="text-gray-700">Initiate CE marking</span>
              </li>
            </ul>
          </div>

          {/* Medium-Term Card */}
          <div className="bg-gradient-to-b from-purple-50 to-white rounded-xl p-6 border-t-4 border-purple-500 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
              Medium-Term (3-5 Yrs)
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5 text-purple-500">
                  <FaCheck className="h-3 w-3" />
                </div>
                <span className="text-gray-700">Parkinson's regulatory approval</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5 text-purple-500">
                  <FaCheck className="h-3 w-3" />
                </div>
                <span className="text-gray-700">Commercial launch France/EU</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5 text-purple-500">
                  <FaCheck className="h-3 w-3" />
                </div>
                <span className="text-gray-700">Expand studies (Alzheimer's, MS, Schiz.)</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5 text-purple-500">
                  <FaCheck className="h-3 w-3" />
                </div>
                <span className="text-gray-700">Series A funding</span>
              </li>
            </ul>
          </div>

          {/* Long-Term Card */}
          <div className="bg-gradient-to-b from-teal-50 to-white rounded-xl p-6 border-t-4 border-teal-500 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
              Long-Term (5+ Yrs)
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-0.5 text-teal-500">
                  <FaCheck className="h-3 w-3" />
                </div>
                <span className="text-gray-700">Global leader in AI neuro-diagnostics</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-0.5 text-teal-500">
                  <FaCheck className="h-3 w-3" />
                </div>
                <span className="text-gray-700">International adoption & reimbursement</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-0.5 text-teal-500">
                  <FaCheck className="h-3 w-3" />
                </div>
                <span className="text-gray-700">Expand diagnostic portfolio</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center mr-3 mt-0.5 text-teal-500">
                  <FaCheck className="h-3 w-3" />
                </div>
                <span className="text-gray-700">Implement B2B2C model</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTab;
