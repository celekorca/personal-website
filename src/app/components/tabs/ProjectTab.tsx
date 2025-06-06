import { FaExclamationTriangle, FaRegLightbulb, FaUserMd, FaFlask, FaPills, FaUserInjured } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import InfoTooltip from './InfoTooltip';
import InfoCard from './InfoCard';
import TeamMemberCard from './TeamMemberCard';
import TargetAudience from './TargetAudience';
import Roadmap from './Roadmap';
import { TeamMember, TargetAudience as TargetAudienceType, RoadmapItem } from './types/project.types';

/**
 * Main ProjectTab component that displays information about the Mely project
 */
function ProjectTab() {
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
          description="Current neuro-diagnostics are often slow and exclusionary. There&apos;s a pressing need for faster, reliable, and accessible tools for early detection and management."
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
          <div className="flex items-center space-x-3 mt-3">
            <i className="fas fa-tablet-alt text-gray-500" aria-hidden="true"></i>
            <i className="fas fa-vr-cardboard text-gray-500" aria-hidden="true"></i>
          </div>
        </InfoCard>
      </div>

      {/* Founders & Team Section */}
      <div className="bg-gray-50 rounded-2xl shadow-xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-navy-800 mb-8">Founding Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>

      {/* Target Audience Section */}
      <TargetAudience audiences={targetAudiences} />

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
                <span className="text-gray-600 ml-1">Neurodegenerative diseases (Parkinson&apos;s, Alzheimer&apos;s, Schizophrenia)</span>
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
      <Roadmap items={roadmapItems} />
    </div>
  );
}

export default ProjectTab;
