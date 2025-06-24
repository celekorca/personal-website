'use client';

import VisionProductSection from '@/app/components/admin/sections/VisionProductSection';
import PathToMarketSection from '@/app/components/admin/sections/PathToMarketSection';
import EngineRoomSection from '@/app/components/admin/sections/EngineRoomSection';
import FiveYearJourneySection from '@/app/components/admin/sections/FiveYearJourneySection';
import RegulatoryComplianceTable from '@/app/components/admin/sections/RegulatoryComplianceTable';

export default function AdminDashboard() {
  // Removed unused state and scroll function

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

      <main className="container mx-auto px-4 py-8">
        <VisionProductSection />
        <PathToMarketSection />
        <RegulatoryComplianceTable />
        <EngineRoomSection />
        <FiveYearJourneySection />
      </main>
    </div>
  );
}
