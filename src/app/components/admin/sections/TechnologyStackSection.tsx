'use client';

import { useState } from 'react';

export default function TechnologyStackSection() {
  const [hoveredScenario, setHoveredScenario] = useState<{type: 'best' | 'worst', section: string} | null>(null);

  return (
    <section id="technology-stack" className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Technology Stack</h2>
          <p className="text-sm text-gray-600 mt-2">
            Overview of the technologies powering Mely's platform
          </p>
        </header>

        <div className="space-y-5">
          {/* Card 1: Technology Stack */}
          <div className="bg-white overflow-hidden shadow rounded-lg border border-blue-100">
        <div className="p-5">
          <div className="flex items-center mb-3">
            <div className="flex-shrink-0 bg-blue-500 rounded-md p-0.5">
              <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="ml-3 text-base font-medium text-gray-900">Technology Stack</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-xs">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-2 py-1.5 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider w-1/4">
                    Category
                  </th>
                  <th scope="col" className="px-2 py-1.5 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider w-3/4">
                    Technologies
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-xs">
                {/* AI/ML Row */}
                <tr className="hover:bg-gray-50">
                  <td className="px-2 py-1 align-top font-medium text-gray-900 w-1/4 leading-tight">
                    AI/ML
                  </td>
                  <td className="px-2 py-1 w-3/4">
                    <div className="flex flex-wrap gap-0.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-blue-100 text-blue-800">Python</span>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-orange-100 text-orange-800">TensorFlow</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-red-100 text-red-800">PyTorch</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-yellow-100 text-yellow-800">Scikit-learn</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-green-100 text-green-800">Pandas</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-purple-100 text-purple-800">Matplotlib</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-pink-100 text-pink-800">Jupyter</span>
                    </div>
                  </td>
                </tr>

                {/* Backend Row */}
                <tr className="hover:bg-gray-50">
                  <td className="px-2 py-1 align-top font-medium text-gray-900 w-1/4 leading-tight">
                    Backend
                  </td>
                  <td className="px-2 py-1 w-3/4">
                    <div className="flex flex-wrap gap-0.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-green-100 text-green-800">Node.js</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-blue-100 text-blue-800">Python</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-yellow-100 text-yellow-800">Django/Flask</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-red-100 text-red-800">Java</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-purple-100 text-purple-800">RESTful APIs</span>
                    </div>
                  </td>
                </tr>

                {/* Frontend Row */}
                <tr className="hover:bg-gray-50">
                  <td className="px-2 py-1 align-top font-medium text-gray-900 w-1/4 leading-tight">
                    Frontend
                  </td>
                  <td className="px-2 py-1 w-3/4">
                    <div className="space-y-1.5">
                      <div>
                        <div className="font-medium text-xs text-gray-700 mb-0.5">Web</div>
                        <div className="flex flex-wrap gap-0.5">
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-blue-100 text-blue-800">React</span>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-blue-100 text-blue-800">Next.js</span>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-blue-100 text-blue-800">TypeScript</span>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-blue-100 text-blue-800">Tailwind CSS</span>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-xs text-gray-700 mb-0.5">Tablet</div>
                        <div className="flex flex-wrap gap-0.5">
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-green-100 text-green-800">React Native</span>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-green-100 text-green-800">Flutter</span>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-green-100 text-green-800">SwiftUI</span>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-green-100 text-green-800">Jetpack Compose</span>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-xs text-gray-700 mb-0.5">VR/AR</div>
                        <div className="flex flex-wrap gap-0.5">
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-purple-100 text-purple-800">Unity</span>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-purple-100 text-purple-800">Unreal Engine</span>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-purple-100 text-purple-800">WebXR</span>
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-purple-100 text-purple-800">ARKit/ARCore</span>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>

                {/* Database Row */}
                <tr className="hover:bg-gray-50">
                  <td className="px-2 py-1 align-top font-medium text-gray-900 w-1/4 leading-tight">
                    Database
                  </td>
                  <td className="px-2 py-1 w-3/4">
                    <div className="flex flex-wrap gap-0.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-blue-100 text-blue-800">PostgreSQL</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-green-100 text-green-800">MongoDB</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-purple-100 text-purple-800">MySQL</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-red-100 text-red-800">Redis</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-yellow-100 text-yellow-800">Elasticsearch</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-indigo-100 text-indigo-800">Neo4j</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-pink-100 text-pink-800">InfluxDB</span>
                    </div>
                  </td>
                </tr>

                {/* Cloud Platform Row */}
                <tr className="hover:bg-gray-50">
                  <td className="px-2 py-1 align-top font-medium text-gray-900 w-1/4 leading-tight">
                    Cloud Platform
                  </td>
                  <td className="px-2 py-1 w-3/4">
                    <div className="flex flex-wrap gap-0.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-yellow-100 text-yellow-800">AWS</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-blue-100 text-blue-800">GCP</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-green-100 text-green-800">Azure</span>
                    </div>
                  </td>
                </tr>

                {/* Container & Orchestration Row */}
                <tr className="hover:bg-gray-50">
                  <td className="px-2 py-1 align-top font-medium text-gray-900 w-1/4 leading-tight">
                    Container & Orchestration
                  </td>
                  <td className="px-2 py-1 w-3/4">
                    <div className="flex flex-wrap gap-0.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-blue-100 text-blue-800">Docker</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-blue-100 text-blue-800">Kubernetes</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-blue-100 text-blue-800">Helm</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-blue-100 text-blue-800">Kustomize</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Card 2: Scalability and Performance */}
      <div className="bg-white overflow-hidden shadow rounded-lg border border-green-100">
        <div className="p-5">
          <div className="flex items-center mb-3">
            <div className="flex-shrink-0 bg-green-500 rounded-md p-1">
              <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="ml-3 text-base font-medium text-gray-900">Scalability and Performance</h3>
          </div>
          
          <div className="space-y-3 text-sm text-gray-600">
            <div className="space-y-1">
              <div className="flex items-center gap-1 flex-wrap">
                <span className="font-medium text-gray-700">Architecture:</span>
                <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs">Multi-tenant</span>
                <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded text-xs">Microservices</span>
                <span className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded text-xs">99.999% Uptime</span>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-1 flex-wrap">
                <span className="font-medium text-gray-700">Infrastructure:</span>
                <span className="bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded text-xs">AWS Lambda</span>
                <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded text-xs">Auto-scaling</span>
                <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded text-xs">RDS/Aurora</span>
                <span className="bg-pink-50 text-pink-700 px-2 py-0.5 rounded text-xs">CDN</span>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-1 flex-wrap">
                <span className="font-medium text-gray-700">Performance:</span>
                <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded text-xs">High TPS</span>
                <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs">Low Latency</span>
                <span className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded text-xs">EHR Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: Security and Compliance */}
      <div className="bg-white overflow-hidden shadow rounded-lg border border-red-100">
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-red-500 rounded-md p-1">
                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="ml-3 text-base font-medium text-gray-900">Security and Compliance by Design</h3>
            </div>
            <div className="flex space-x-1 relative z-10">
              <div className="relative group">
                <span className="text-green-500 cursor-help">✓</span>
                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-full right-0 mb-2 px-3 py-2 text-sm text-white bg-gray-900 rounded whitespace-normal w-64">
                  <div className="font-semibold mb-1">Best-Case Scenario</div>
                  <div className="text-gray-200 text-xs">
                    A robust, scalable, and secure platform that meets all regulatory requirements (GDPR, HDS). High uptime and performance, supporting a growing user base and data volume.
                  </div>
                  <div className="absolute bottom-0 right-4 transform translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
              </div>
              <div className="relative group ml-2">
                <span className="text-red-500 cursor-help">⚠️</span>
                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-full right-0 mb-2 px-3 py-2 text-sm text-white bg-gray-900 rounded whitespace-normal w-64">
                  <div className="font-semibold mb-1">Worst-Case Scenario</div>
                  <div className="text-gray-200 text-xs">
                    Security breaches compromise patient data, leading to severe legal and reputational damage. Scalability issues result in poor performance as user numbers grow. Non-compliance with data protection regulations incurs heavy fines.
                  </div>
                  <div className="absolute bottom-0 right-4 transform translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-xs">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-2 py-1 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider w-1/4">
                    Area
                  </th>
                  <th scope="col" className="px-2 py-1 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider w-3/4">
                    Implementation
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Data Protection */}
                <tr className="hover:bg-gray-50">
                  <td className="px-2 py-1 whitespace-nowrap font-medium text-gray-900 w-1/4">
                    Data Protection
                  </td>
                  <td className="px-2 py-1 w-3/4">
                    <div className="flex flex-wrap gap-0.5">
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-blue-700">Encryption</span>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-green-50 text-green-700">Access Controls</span>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-yellow-50 text-yellow-700">Data Masking</span>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-pink-50 text-pink-700">Audit Logs</span>
                    </div>
                  </td>
                </tr>
                
                {/* Compliance */}
                <tr className="hover:bg-gray-50">
                  <td className="px-2 py-1 whitespace-nowrap font-medium text-gray-900 w-1/4">
                    Compliance
                  </td>
                  <td className="px-2 py-1 w-3/4">
                    <div className="flex flex-wrap gap-0.5">
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-purple-50 text-purple-700">GDPR</span>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-blue-700">HIPAA</span>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-green-50 text-green-700">HDS</span>
                    </div>
                  </td>
                </tr>
                
                {/* Development */}
                <tr className="hover:bg-gray-50">
                  <td className="px-2 py-1 whitespace-nowrap font-medium text-gray-900 w-1/4">
                    Development
                  </td>
                  <td className="px-2 py-1 w-3/4">
                    <div className="flex flex-wrap gap-0.5">
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-blue-700">SSDLC</span>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-green-50 text-green-700">Security Audits</span>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-purple-50 text-purple-700">Pen Testing</span>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-yellow-50 text-yellow-700">Vulnerability Mgmt</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}
