'use client';

import { useState } from 'react';
import VisionProductSection from '@/app/components/admin/sections/VisionProductSection';
import PathToMarketSection from '@/app/components/admin/sections/PathToMarketSection';
import EngineRoomSection from '@/app/components/admin/sections/EngineRoomSection';
import FiveYearJourneySection from '@/app/components/admin/sections/FiveYearJourneySection';
import GanttSummarySection from '@/app/components/admin/sections/GanttSummarySection';
import RegulatoryComplianceTable from '@/app/components/admin/sections/RegulatoryComplianceTable';

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('vision');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

      <main className="container mx-auto px-4 py-8">
        <VisionProductSection />
        <PathToMarketSection />
        <EngineRoomSection />
        <FiveYearJourneySection />
        <GanttSummarySection />
        
        {/* Regulatory Compliance Card */}
        <section className="mt-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="ml-4 text-lg font-medium text-gray-900">Regulatory Compliance Roadmap</h3>
              </div>
              <div className="mt-4">
                <RegulatoryComplianceTable />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
