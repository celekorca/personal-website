import React from 'react';
import { FaLinkedin, FaCheckCircle } from 'react-icons/fa';
import { FaDumbbell } from 'react-icons/fa6';
import { TeamMember } from './types/project.types';

interface TeamMemberCardProps {
  member: TeamMember;
}

/**
 * TeamMemberCard component displays information about a team member
 */
const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="flex flex-col items-center text-center">
        <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
            <span className="text-sm">{member.photoPlaceholder}</span>
          </div>
        </div>
        <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
        <p className="text-navy-800 font-medium mb-3">{member.title}</p>
        
        <a 
          href={member.linkedinUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors"
          aria-label={`Connect with ${member.name} on LinkedIn`}
        >
          <FaLinkedin className="mr-2" aria-hidden="true" />
          LinkedIn
        </a>
        
        <div className="text-left w-full">
          <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
            <FaDumbbell className="mr-2 text-indigo-600" aria-hidden="true" />
            Key Strengths:
          </h5>
          <ul className="text-sm text-gray-700 space-y-2 pl-1">
            {member.strengths.map((strength, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="text-green-700 mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
