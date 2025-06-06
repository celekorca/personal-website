import React from 'react';
import { FaBullseye } from 'react-icons/fa';
import { TargetAudience as TargetAudienceType } from './types/project.types';

interface TargetAudienceProps {
  audiences: TargetAudienceType[];
}

/**
 * TargetAudience component displays a grid of target audience segments
 */
const TargetAudience: React.FC<TargetAudienceProps> = ({ audiences }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center flex items-center justify-center">
        <FaBullseye className="mr-2 text-indigo-600" aria-hidden="true" />
        Target Audience
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {audiences.map((audience) => {
          const Icon = audience.icon;
          return (
            <div 
              key={audience.id}
              className="bg-gray-50 rounded-xl p-4 border-l-4 transition-colors hover:bg-gray-100"
              style={{ borderColor: audience.color }}
            >
              <h4 className="font-semibold text-gray-800 text-sm sm:text-base mb-2 flex items-center">
                <Icon 
                  className={`mr-2`} 
                  style={{ color: audience.color }}
                  aria-hidden="true"
                />
                {audience.title}
              </h4>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5">
                {audience.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-1.5 mt-0.5" style={{ color: audience.color }}>•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TargetAudience;
