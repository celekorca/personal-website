'use client';

import AIDevelopmentLifecycle from './AIDevelopmentLifecycle';
import ProductRoadmap from './ProductRoadmap';
import TechnologyStackSection from './TechnologyStackSection';
import EHRIntegrationSection from './EHRIntegrationSection';

export default function VisionProductSection() {
  return (
    <section id="vision" className="py-1">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-2">
        <header className="text-center mb-2">
          <h2 className="text-2xl font-semibold text-gray-800">Product Development</h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: AI Development Lifecycle */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="ml-4 text-lg font-medium text-gray-900">AI Development Lifecycle for Mely&apos;s Diagnostic Tool</h3>
              </div>
              <div className="mt-4">
                <AIDevelopmentLifecycle />
              </div>
            </div>
          </div>

          {/* Card 2: Development Phases */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="ml-4 text-lg font-medium text-gray-900">Product Roadmap: MVP to Full-Featured Platform</h3>
              </div>
              <div className="mt-4">
                <ProductRoadmap />
              </div>
            </div>
          </div>

          {/* Card 3: Technology Stack */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-1.5">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="ml-4 text-lg font-medium text-gray-900">Technology Stack, Scalability, and Security</h3>
              </div>
              <TechnologyStackSection />
            </div>
          </div>

          {/* Card 4: EHR Integration */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="ml-4 text-lg font-medium text-gray-900">EHR Integration Strategy (HL7 FHIR)</h3>
              </div>
              <div className="mt-4">
                <EHRIntegrationSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
