'use client';

export default function RegulatoryComplianceTable() {
  return (
    <section id="regulatory-compliance" className="py-2">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="bg-white p-2 rounded-lg shadow overflow-x-auto text-xs">
          <div className="w-full">
            <table className="w-full table-fixed divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[12%]">
                    Stage & Est. Time
                  </th>
                  <th scope="col" className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[12%]">
                    Step
                  </th>
                  <th scope="col" className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[60%]">
                    Key Considerations for this SaMD
                  </th>
                  <th scope="col" className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[16%]">
                    Key References & Requirements
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-xs align-top">
                {/* Stage 1 */}
                <tr>
                  <td rowSpan={3} className="px-2 py-1 text-left whitespace-normal break-words align-top border-r border-gray-200 font-medium text-xs">
                    <strong>Stage 1: Foundation & Planning</strong><br />(1-2 Months)
                  </td>
                  <td className="px-2 py-1 text-left whitespace-normal break-words align-top">
                    1. Define Intended Purpose & Classify Device
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    <strong>Intended Purpose:</strong> Clearly define: &quot;Software using AI to analyze cognitive and motor data collected via a mobile app to aid in the diagnosis of specific neurodegenerative diseases (e.g., Alzheimer&apos;s, Parkinson&apos;s).&quot; <br />
                    <strong>Classification:</strong> Confirmed Class IIb via MDR Rule 11 (diagnostic software with potential for serious deterioration). <br />
                    <strong>SaMD:</strong> Yes. <br />
                    <strong>High-Risk AI:</strong> Yes, under EU AI Act due to diagnostic nature and potential impact.
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    MDR Annex VIII, Rule 11; MDCG 2019-11; EU AI Act
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-1 whitespace-normal">
                    2. Establish Quality Management System (QMS)
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    Implement ISO 13485. <br />
                    <strong>Specific SOPs needed for:</strong> Software development (agile/waterfall, version control), AI model development lifecycle (data acquisition, annotation, training, validation, monitoring), data privacy (GDPR), cybersecurity.
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    ISO 13485:2016; MDR Article 10
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-1 whitespace-normal">
                    3. Appoint PRRC & Select Notified Body
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    <strong>PRRC:</strong> Must have expertise in SaMD, AI, and relevant medical fields. <br />
                    <strong>Notified Body:</strong> Select an NB designated for SaMD, particularly those experienced with AI-driven diagnostic software. Check NANDO database.
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    MDR Article 15; NANDO Database
                  </td>
                </tr>

                {/* Stage 2 */}
                <tr className="bg-gray-50">
                  <td rowSpan={4} className="px-2 py-1 text-left whitespace-normal break-words align-top border-r border-gray-200 font-medium text-xs">
                    <strong>Stage 2: Technical Documentation & Risk Management</strong><br />(4-6 Months)
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    4. Implement Lifecycle & Risk Management
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    <strong>Software Lifecycle (IEC 62304):</strong> Detail processes for mobile app and AI model development, including version control, bug tracking, and AI model retraining. <br /><br />
                    <strong>Risk Analysis (ISO 14971):</strong> Identify hazards like misdiagnosis (false positive/negative), AI bias, algorithm drift, data input errors, cybersecurity breaches. Implement robust risk controls.
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    IEC 62304; ISO 14971
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-2 py-1 whitespace-normal">
                    5. Address Cybersecurity & Data Privacy
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    <strong>Secure by Design:</strong> For mobile app, data transmission, backend systems, and AI model. <br />
                    <strong>Threat Modeling:</strong> Specific to mobile platform vulnerabilities, network communication, and data storage. <br />
                    <strong>Encryption:</strong> For data at rest (on device/server) and in transit. <br />
                    <strong>Data Protection (GDPR):</strong> DPIA required. Consent mechanisms for sensitive health data. Anonymization/pseudonymization strategies.
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    MDR Annex I (GSPR 17.2, 17.4); GDPR (Regulation (EU) 2016/679); MDCG 2019-16
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-2 py-1 whitespace-normal">
                    6. Develop Clinical Evaluation Plan (CEP)
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    <strong>Clinical Evidence Strategy:</strong> How to demonstrate the AI's diagnostic accuracy against current gold standards for target neurodegenerative diseases. <br />
                    <strong>State-of-the-Art:</strong> Define current diagnostic pathways. <br />
                    <strong>Benefit-Risk Analysis:</strong> Quantify benefits (e.g., early detection, accessibility) vs. risks (misdiagnosis). <br />
                    <strong>PMCF Plan:</strong> Outline how real-world performance and AI algorithm integrity will be monitored.
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    MDR Article 61 & Annex XIV; MEDDEV 2.7/1 rev 4
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-2 py-1 whitespace-normal">
                    7. Compile Technical Documentation
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    <strong>Technical File Contents:</strong> Include AI algorithm architecture, training/validation dataset characteristics, performance metrics, software architecture, usability engineering file (IEC 62366-1), verification and validation reports for both software and AI. GSPR checklist.
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    MDR Annex II & III; IEC 82304-1
                  </td>
                </tr>

                {/* Stage 3 */}
                <tr>
                  <td rowSpan={2} className="px-2 py-1 whitespace-normal align-top border-r border-gray-200 font-medium">
                    <strong>Stage 3: Validation & Clinical Evidence</strong><br />(6-12 Months)
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    8. Conduct Analytical & Clinical Validation
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    <strong>Analytical Validation:</strong> Verify the app accurately collects and processes cognitive/motor data. <br />
                    <strong>Algorithm Validation (Technical):</strong> Assess AI model's standalone performance (e.g., accuracy, precision, recall). <br />
                    <strong>Clinical Validation:</strong> Conduct clinical investigation(s) to demonstrate diagnostic performance (sensitivity, specificity, PPV, NPV) in the intended patient population against clinical gold standards. <br />
                    <strong>AI Act:</strong> Ensure training, validation, and testing datasets are high quality, relevant, and representative to mitigate bias.
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    MDR Annex XIV; IMDRF/SaMD WG/N41; EU AI Act
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-1 whitespace-normal">
                    9. Finalize Clinical Evaluation Report (CER)
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    <strong>Systematic Literature Review:</strong> On current diagnostic methods for the specific neurodegenerative diseases, existing SaMD/AI tools. <br />
                    <strong>Analysis of Clinical Data:</strong> From your own clinical investigations. <br />
                    <strong>Benefit-Risk Ratio:</strong> Justify based on evidence, addressing AI model limitations and uncertainties. Equivalence to an existing device is unlikely for novel AI.
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    MDR Article 61 & Annex XIV; MDCG 2020-5
                  </td>
                </tr>

                {/* Stage 4 */}
                <tr className="bg-gray-50">
                  <td rowSpan={2} className="px-2 py-1 whitespace-normal align-top border-r border-gray-200 font-medium">
                    <strong>Stage 4: Audit & Certification</strong><br />(3-5 Months)
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    10. Notified Body Audit
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    <strong>QMS Audit:</strong> Focus on IEC 62304 compliance, AI development processes, data management, cybersecurity. <br />
                    <strong>Technical Documentation Review:</strong> Scrutiny of AI algorithm design, validation data, clinical evidence, risk management for AI-specific hazards. <br />
                    <strong>Conformity Assessment:</strong> Typically Annex IX (Full QMS + TD Review) for Class IIb SaMD.
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    MDR Annex IX (Chapter I & II) or Annex XI
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-2 py-1 whitespace-normal">
                    11. Obtain CE Certificate & Declare Conformity
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    <strong>CE Marking:</strong> Applied to software (e.g., "About" screen, website). <br />
                    <strong>Declaration of Conformity (DoC):</strong> Manufacturer signs. <br />
                    <strong>SRN & UDI:</strong> Register in EUDAMED. Assign Basic UDI-DI for the SaMD product line and UDI-DIs for specific versions/releases.
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    MDR Article 20; MDR Article 19 & Annex IV; MDR Articles 27, 29, 31
                  </td>
                </tr>

                {/* Stage 5 */}
                <tr>
                  <td rowSpan={2} className="px-2 py-1 whitespace-normal align-top border-r border-gray-200 font-medium text-xs">
                    <strong>Stage 5: Post-Market</strong><br />(Ongoing)
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    12. Implement Post-Market Surveillance (PMS)
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    <strong>PMS Plan:</strong> Focus on monitoring real-world AI performance, detection of algorithm drift, user feedback on app usability and data quality, new cybersecurity threats. <br />
                    <strong>PMCF:</strong> Plan studies to track long-term AI diagnostic accuracy, gather data on diverse populations. <br />
                    <strong>Vigilance:</strong> Reporting serious incidents related to misdiagnosis or software malfunction.
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    MDR Articles 83-86 & Annex III; MDCG 2022-21
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-1 whitespace-normal">
                    13. Maintain Compliance & Update Documentation
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    <strong>Change Management:</strong> For software updates (OS compatibility, new features, bug fixes), AI model retraining or updates. <br />
                    <strong>PSUR:</strong> Update at least annually. Include AI performance trends, user feedback, incident data. <br />
                    <strong>SSCP:</strong> Create and maintain a publicly available Summary of Safety and Clinical Performance, especially important for transparency of an AI diagnostic tool. <br />
                    <strong>Continuous Monitoring:</strong> Of AI algorithm performance, data integrity, cybersecurity vulnerabilities, and evolving clinical guidelines.
                  </td>
                  <td className="px-2 py-1 whitespace-normal">
                    MDR Article 10(9); MDR Article 86; MDR Article 32
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
