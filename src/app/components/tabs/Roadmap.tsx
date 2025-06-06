import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { RoadmapItem } from './types/project.types';

interface RoadmapProps {
  items: RoadmapItem[];
}

/**
 * Roadmap component displays a timeline of roadmap items
 */
const Roadmap: React.FC<RoadmapProps> = ({ items }) => {
  return (
    <div className="bg-orange-50 rounded-2xl shadow-lg p-6 border border-orange-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Strategic Roadmap</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div 
            key={index}
            className={`bg-gradient-to-b to-white rounded-xl p-6 border-t-4 shadow-sm hover:shadow-md transition-all ${item.bgColor} ${item.borderColor}`}
          >
            <div className={`text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4 ${item.bgColor.replace('from-', 'bg-').replace(' ', '')} ${item.textColor}`}>
              {item.period}
            </div>
            <ul className="space-y-3">
              {item.items.map((roadmapItem, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <div className={`flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mr-3 mt-0.5 ${item.checkColor}`}>
                    <FaCheck className="h-3 w-3" aria-hidden="true" />
                  </div>
                  <span className="text-gray-700">{roadmapItem}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
