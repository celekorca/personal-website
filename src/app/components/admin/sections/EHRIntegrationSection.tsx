'use client';

export default function EHRIntegrationSection() {
  return (
    <>
      <section id="ehr-integration" className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">EHR Integration</h2>
            <p className="text-sm text-gray-600 mt-2">
              Seamless integration with Electronic Health Record systems for clinical workflow
            </p>
          </header>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="space-y-4">
              <div className="text-sm italic text-gray-600 bg-gray-50 p-3 rounded">
                A well-executed EHR integration strategy is a key enabler for Mely, transforming the platform from a standalone tool into an integral part of the clinical diagnostic pathway.
              </div>

              {/* Standards Adoption */}
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Standards Adoption</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  <li>
                    <strong>HL7 FHIR (Fast Healthcare Interoperability Resources)</strong> is prioritized for EHR integration, using modern web-based technologies (RESTful APIs, JSON/XML) for secure data exchange between healthcare systems.
                  </li>
                  <li className="mt-1">
                    <strong>Compatibility:</strong> Supports older HL7 versions (e.g., HL7 v2) for legacy hospital systems, though this may require additional interface programming.
                  </li>
                </ul>
              </div>

              {/* Integration Approach */}
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Integration Approach</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  <li>Develop standardized APIs based on FHIR resources (Patient, Observation, DiagnosticReport)</li>
                  <li>Utilize SMART on FHIR protocols for secure, authorized app integration within EHR portals</li>
                </ul>
                
                <div className="mt-3 bg-blue-50 p-3 rounded-md">
                  <h5 className="text-sm font-medium text-blue-800 mb-1">Integration Capabilities:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-blue-700">
                    <li>Retrieve patient demographic and clinical data from EHR</li>
                    <li>Securely transmit diagnostic reports and biomarker data back to EHR</li>
                    <li>Must meet stringent requirements for durability, disinfection, and regulatory compliance. Key features include antimicrobial coatings, drop resistance, and medical device certification.</li>
                  </ul>
                </div>
              </div>

              {/* Challenges and Solutions */}
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Challenges and Solutions</h4>
                <div className="space-y-3">
                  {[
                    {
                      challenge: "Outdated Technology/Legacy Systems",
                      solution: "Offer flexible integration options, potentially using middleware as a bridge. Focus partnerships on hospitals with modern, FHIR-enabled EHRs initially."
                    },
                    {
                      challenge: "Data Security Concerns",
                      solution: "Implement robust security measures (encryption, access controls, secure APIs). Ensure all data exchange is authenticated and authorized."
                    },
                    {
                      challenge: "Inconsistent Data Standards",
                      solution: "Rigorous testing with each EHR system. Develop configurable data mapping tools."
                    },
                    {
                      challenge: "Limited Interoperability (Vendor-Specific Implementations)",
                      solution: "Work closely with EHR vendors where possible. Prioritize EHRs with strong FHIR API support."
                    },
                    {
                      challenge: "Resource Constraints (Hospital IT)",
                      solution: "Design the integration process to be as simple and low-effort as possible for hospital IT. Provide excellent technical support and documentation."
                    }
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-blue-100 pl-3 py-1">
                      <div className="text-sm font-medium text-gray-800">{item.challenge}</div>
                      <div className="text-xs text-gray-600 mt-0.5">{item.solution}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scenarios */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-md border border-green-100">
                  <div className="flex items-center">
                    <span className="text-green-500 text-lg mr-2">✓</span>
                    <h5 className="text-sm font-medium text-green-800">Best-Case Scenario</h5>
                  </div>
                  <p className="mt-1 text-xs text-green-700">
                    Mely&apos;s platform integrates seamlessly with major EHR systems used in target European hospitals via FHIR APIs. Clinicians can easily access Mely&apos;s insights within their existing workflows, leading to high adoption.
                  </p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-md border border-red-100">
                  <div className="flex items-center">
                    <span className="text-red-500 text-lg mr-2">⚠️</span>
                    <h5 className="text-sm font-medium text-red-800">Worst-Case Scenario</h5>
                  </div>
                  <p className="mt-1 text-xs text-red-700">
                    Significant technical hurdles and costs associated with EHR integration. Poor interoperability limits adoption and utility. Data exchange issues lead to errors or inefficiencies. Hospitals are reluctant to integrate due to security concerns or resource limitations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
