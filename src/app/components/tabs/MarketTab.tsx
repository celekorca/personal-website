'use client';

import { useState } from 'react';
import CompetitorsSection from './CompetitorsSection';
import ClientsSection from './ClientsSection';
import MarketAnalysis from './MarketAnalysis';
import SuppliersSection from './SuppliersSection';

const subTabs = [
  { id: 'market-analysis', label: 'Market Analysis' },
  { id: 'competitors', label: 'Competitors' },
  { id: 'target-audience', label: 'Target Audience' },
  { id: 'suppliers', label: 'Suppliers' },
  { id: 'sources', label: 'Sources' },
];

export default function MarketTab() {
  const [activeSubTab, setActiveSubTab] = useState(subTabs[0].id);

  return (
    <div className="space-y-6">
      {/* Sub-tabs navigation */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {subTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
              activeSubTab === tab.id
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
        {activeSubTab === 'market-analysis' ? (
          <MarketAnalysis />
        ) : activeSubTab === 'competitors' ? (
          <CompetitorsSection />
        ) : activeSubTab === 'target-audience' ? (
          <ClientsSection />
        ) : activeSubTab === 'suppliers' ? (
          <SuppliersSection />
        ) : (
          <p className="text-gray-600">
            Content for <span className="font-semibold text-indigo-600">
              {subTabs.find(t => t.id === activeSubTab)?.label}
            </span> will appear here.
          </p>
        )}
      </div>
    </div>
  );
}
