'use client';

import { useState } from 'react';
import OverviewTab from './components/tabs/OverviewTab';
import ProjectTab from './components/tabs/ProjectTab';
import PlaceholderTab from './components/tabs/PlaceholderTab';
import SalesMarketingTab from './components/tabs/SalesMarketingTab';
import CommunicationTab from './components/tabs/CommunicationTab';
import ResourcesTab from './components/tabs/ResourcesTab';
import MarketTab from './components/tabs/MarketTab';

const tabs = [
  { id: 'overview', label: 'Overview', component: <OverviewTab /> },
  { id: 'project', label: 'Project', component: <ProjectTab /> },
  { id: 'market-study', label: 'Market', component: <MarketTab /> },
  { id: 'sales-marketing', label: 'Sales & Marketing', component: <SalesMarketingTab /> },
  { id: 'communication', label: 'Communication', component: <CommunicationTab /> },
  { id: 'resources', label: 'Resources', component: <ResourcesTab /> },
  { id: 'administration', label: 'Administration', component: <PlaceholderTab tabName="Administration" /> },
  { id: 'finance', label: 'Finance', component: <PlaceholderTab tabName="Finance" /> },
  { id: 'perspectives', label: 'In 3 Years', component: <PlaceholderTab tabName="3-Year Perspective" /> },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div className="border-b border-navy-700 bg-navy-800 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <nav className="flex overflow-x-auto hide-scrollbar" aria-label="Tabs">
            <div className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base ${activeTab === tab.id
                      ? 'border-orange-500 text-white font-semibold'
                      : 'border-transparent text-white hover:text-orange-200 hover:border-orange-300'
                    } transition-colors duration-200`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-gray-600">
            {activeTabData?.component}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
