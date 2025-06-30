'use client';

import VisionProductSection from '../admin/sections/VisionProductSection';
import PathToMarketSection from '../admin/sections/PathToMarketSection';
import EngineRoomSection from '../admin/sections/EngineRoomSection';
import FiveYearJourneySection from '../admin/sections/FiveYearJourneySection';
import RegulatoryComplianceTable from '../admin/sections/RegulatoryComplianceTable';

export default function ThreeYearPerspectiveTab() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">3-Year Strategic Perspective</h1>
        <div className="space-y-8">
          <VisionProductSection />
          <PathToMarketSection />
          <RegulatoryComplianceTable />
          <EngineRoomSection />
          <FiveYearJourneySection />
        </div>
      </div>
    </div>
  );
}
