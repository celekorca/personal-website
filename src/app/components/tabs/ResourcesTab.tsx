import React from 'react';
import { FaBuilding, FaUserCircle, FaLaptop, FaUsers, FaGraduationCap, FaBriefcase, FaCogs, FaChartLine } from 'react-icons/fa';

function Section({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-2xl font-bold text-navy-800">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
}

export default function ResourcesTab() {
  return (
    <div className="space-y-12">
      {/* Section 1: Premises */}
      <Section title="Initial and Evolving Premises Strategy" icon={<FaBuilding className="text-indigo-500" />}>  
        <div className="mb-6 text-gray-700">
          Mely&#39;s strategy for physical or virtual premises is designed to evolve with its growth, ensuring rigorous compliance with data security regulations. Rennes is a relevant focal point given the available offerings.
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Initial Phase Options</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li><strong>Full Remote Work:</strong> Minimizes costs, widens talent pool, requires strict data security and team cohesion policies. Relevant for seed phase to preserve capital.</li>
            <li><strong>Virtual Office in Rennes:</strong> Commercial address, mail services, occasional meeting room. Official presence at low cost (€55-€129/month).</li>
            <li><strong>Coworking Space in Rennes:</strong> Flexible offices, networking, but may raise confidentiality issues. Nomad spots from €10-19/day or dedicated desks from €139/person/month.</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Strategic Timeline</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-gray-50 rounded-xl p-4 border-l-4 border-indigo-400 mb-2">
              <div className="font-semibold mb-1">Years 1-2: Flexibility &amp; Cost Control</div>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>Full Remote Work</li>
                <li>Virtual Office</li>
                <li>Coworking (Occasional/Dedicated)</li>
              </ul>
            </div>
            <div className="flex-1 bg-gray-50 rounded-xl p-4 border-l-4 border-gray-400 mb-2">
              <div className="font-semibold mb-1">Transition Triggers</div>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>Team Growth (10-15+)</li>
                <li>Specific R&amp;D Needs</li>
                <li>Controlled Environment Need</li>
                <li>Strengthen Company Culture</li>
              </ul>
            </div>
            <div className="flex-1 bg-gray-50 rounded-xl p-4 border-l-4 border-green-400 mb-2">
              <div className="font-semibold mb-1">Years 3-5: Dedicated Space</div>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>Serviced Private Office</li>
                <li>Traditional Lease &amp; Fit-out</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Recommendations</h3>
          <div className="text-gray-700 mb-2">A hybrid approach is recommended for Years 1-2: full remote for most of the team, a virtual office in Rennes for the address, and occasional coworking meeting room rental. This allows adaptation to growth and cash flow, prioritizing product development and talent acquisition.</div>
          <div className="text-gray-700">For Years 3-5, transition to a dedicated office as needed. Options include serviced private offices (e.g., Regus) or traditional lease &amp; fit-out (Rennes rents ~€188/m²/year).</div>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Specific Needs and Compliance</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li><strong>Health Data Management (GDPR &amp; HDS):</strong> Strict compliance for any on-premises access. &#39;Clean desk&#39; policies, privacy screens, restricted access, and private rooms for sensitive meetings. Staff training is essential.</li>
            <li><strong>R&amp;D Spaces:</strong> Initially software-focused, needs high-performance workstations. Calm, private space for tests with external participants.</li>
            <li><strong>Compliance Work (future office):</strong> Physical/data security, secure zones, general standards for a traditional lease.</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Fit-out, Layout &amp; Financial Estimates</h3>
          <div className="mb-2">For a future dedicated office, mixed layouts with open and quiet zones are ideal. Fit-out costs in France: €700/m² to €2250/m².</div>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li><strong>Initial Phase (Years 1-2):</strong> No major work. Virtual Office: ~€600-€1,500/year. Coworking (2 desks): ~€3,300-€4,800/year. Meeting rooms: ~€200-€500/year.</li>
            <li><strong>Growth Phase (Years 3-5, 50m²):</strong> Annual rent: ~€8,500. Fit-out: ~€35,000 (one-time). Security: ~€2,000-€10,000.</li>
          </ul>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border mt-4">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-3 border">Option</th>
                <th className="py-2 px-3 border">Services Included</th>
                <th className="py-2 px-3 border">Advantages</th>
                <th className="py-2 px-3 border">Drawbacks/Risks</th>
                <th className="py-2 px-3 border">Est. Monthly Cost</th>
                <th className="py-2 px-3 border">Est. Annual Cost</th>
                <th className="py-2 px-3 border">Health Data Compliance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-3 border">Remote Work + Virtual Office</td>
                <td className="py-2 px-3 border">Address, mail mgmt, opt. meeting rooms</td>
                <td className="py-2 px-3 border">Minimal costs, max flexibility</td>
                <td className="py-2 px-3 border">Team cohesion, home data security</td>
                <td className="py-2 px-3 border">€50 - €125</td>
                <td className="py-2 px-3 border">€600 - €1,500</td>
                <td className="py-2 px-3 border">Strict remote policies. Secure rooms.</td>
              </tr>
              <tr>
                <td className="py-2 px-3 border">Coworking (2 Dedicated Desks)</td>
                <td className="py-2 px-3 border">Desk, internet, furniture, common areas</td>
                <td className="py-2 px-3 border">Flexibility, networking, structure</td>
                <td className="py-2 px-3 border">Higher cost, confidentiality risk</td>
                <td className="py-2 px-3 border">€280 - €400</td>
                <td className="py-2 px-3 border">€3,360 - €4,800</td>
                <td className="py-2 px-3 border">Private rooms required.</td>
              </tr>
              <tr>
                <td className="py-2 px-3 border">Small Serviced Office (2-3 people)</td>
                <td className="py-2 px-3 border">Private space, furniture, internet, services</td>
                <td className="py-2 px-3 border">High confidentiality, controlled env.</td>
                <td className="py-2 px-3 border">Higher cost, less flexible</td>
                <td className="py-2 px-3 border">€400 - €800</td>
                <td className="py-2 px-3 border">€4,800 - €9,600</td>
                <td className="py-2 px-3 border">Better GDPR control.</td>
              </tr>
            </tbody>
          </table>
          <div className="text-gray-600 text-xs mt-2">Balance costs, flexibility, and compliance for health data.</div>
        </div>
      </Section>

      {/* Section 2: Human Resources */}
      <Section title="Human Resources" icon={<FaUsers className="text-blue-400" />}>  
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Founding Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="bg-white rounded-xl shadow p-4 border border-gray-100">
              <div className="flex items-center gap-2 mb-2"><FaUserCircle className="text-indigo-500" /> Marsel Mano (CEO/Founder)</div>
              <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                <li>President (CEO), Corporate officer</li>
                <li>Salary: TBD (minimal in seed phase)</li>
                <li>Hiring: Start of activity</li>
                <li>Strategy, biz dev, investors</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-4 border border-gray-100">
              <div className="flex items-center gap-2 mb-2"><FaUserCircle className="text-indigo-500" /> Reinaldo Argjiri (Co-founder/CTO)</div>
              <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                <li>Technical Director (CTO), Corporate officer</li>
                <li>Salary: TBD (minimal in seed phase)</li>
                <li>Hiring: Start of activity</li>
                <li>Tech vision, AI dev, security</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Short-Term Recruitment Plan (Years 1-2)</h3>
          <div className="mb-2 font-semibold flex items-center gap-2"><FaCogs className="text-gray-600" /> Technical Team</div>
          <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-4">
            <li>AI/Machine Learning Engineer: 1-2, CDI, €38k-€55k. Hire Y1.</li>
            <li>Full-Stack Developer: 1, CDI, €38k-€48k. Hire Y1/Y2.</li>
            <li>Data Scientist: 0-1, CDI/Freelance, €31k-€58k. Hire Y1/Y2.</li>
          </ul>
          <div className="mb-2 font-semibold flex items-center gap-2"><FaGraduationCap className="text-purple-500" /> Medical &amp; Clinical Team</div>
          <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-4">
            <li>Medical Director: 1, CDI/Associate, €70k-€130k. Hire Y1.</li>
            <li>Clinical Research Associate: 1, CDI/Consultant, ~€45k. Hire End Y1.</li>
            <li>Regulatory Affairs Specialist: 0-1, Consultant/Part-time, ~€49k. Hire Y1.</li>
          </ul>
          <div className="mb-2 font-semibold flex items-center gap-2"><FaBriefcase className="text-orange-400" /> Commercial/Operational Staff</div>
          <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-4">
            <li>Business Developer/Marketing Manager: 0-1, CDI, €30k-€42k + var. Hire Y2.</li>
            <li>Administrative Assistant: 1, Part-time CDD/CDI, ~€25k-€27k (FTE). Hire Y2.</li>
          </ul>
          <div className="mb-2 font-semibold flex items-center gap-2"><FaChartLine className="text-indigo-500" /> Medium-Term Team Growth Plan (Years 3-5)</div>
          <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
            <li>Strengthen technical, medical, commercial, and support teams as company grows (15-30+).</li>
          </ul>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border mt-4">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-3 border">Functions</th>
                <th className="py-2 px-3 border">#</th>
                <th className="py-2 px-3 border">Contract Type</th>
                <th className="py-2 px-3 border">Est. Gross Annual Salary (€)</th>
                <th className="py-2 px-3 border">Est. Total Annual Cost (€)</th>
                <th className="py-2 px-3 border">Hiring</th>
                <th className="py-2 px-3 border">Comments</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-3 border">CEO (President)</td><td className="py-2 px-3 border">1</td><td className="py-2 px-3 border">Corporate Officer</td><td className="py-2 px-3 border">TBD</td><td className="py-2 px-3 border">Variable</td><td className="py-2 px-3 border">Startup</td><td className="py-2 px-3 border">Strategy, funding, partnerships</td></tr>
              <tr><td className="py-2 px-3 border">CTO (Technical Director)</td><td className="py-2 px-3 border">1</td><td className="py-2 px-3 border">Corporate Officer</td><td className="py-2 px-3 border">TBD</td><td className="py-2 px-3 border">Variable</td><td className="py-2 px-3 border">Startup</td><td className="py-2 px-3 border">AI dev, security</td></tr>
              <tr><td className="py-2 px-3 border">AI/ML Engineer</td><td className="py-2 px-3 border">1-2</td><td className="py-2 px-3 border">CDI</td><td className="py-2 px-3 border">45,000-55,000</td><td className="py-2 px-3 border">65,250-79,750</td><td className="py-2 px-3 border">Y1</td><td className="py-2 px-3 border">Deep learning, BSPCE eligible</td></tr>
              <tr><td className="py-2 px-3 border">Full-Stack Developer</td><td className="py-2 px-3 border">1</td><td className="py-2 px-3 border">CDI</td><td className="py-2 px-3 border">40,000-48,000</td><td className="py-2 px-3 border">58,000-69,600</td><td className="py-2 px-3 border">Y1/Y2</td><td className="py-2 px-3 border">Platform, UI/UX, BSPCE eligible</td></tr>
              <tr><td className="py-2 px-3 border">Medical Director</td><td className="py-2 px-3 border">1</td><td className="py-2 px-3 border">CDI/Associate</td><td className="py-2 px-3 border">70,000-130,000</td><td className="py-2 px-3 border">101,500-188,500</td><td className="py-2 px-3 border">Y1/Y2</td><td className="py-2 px-3 border">Medical strategy, clinical trials</td></tr>
              <tr><td className="py-2 px-3 border">Clinical Research Assoc (CRA)</td><td className="py-2 px-3 border">1</td><td className="py-2 px-3 border">CDI/Consultant</td><td className="py-2 px-3 border">45,000-50,000</td><td className="py-2 px-3 border">65,250-72,500</td><td className="py-2 px-3 border">End Y1</td><td className="py-2 px-3 border">Clinical trial mgmt. Can be external</td></tr>
              <tr><td className="py-2 px-3 border">Regulatory Affairs Specialist</td><td className="py-2 px-3 border">1</td><td className="py-2 px-3 border">Consultant/Part-time</td><td className="py-2 px-3 border">~25,000</td><td className="py-2 px-3 border">~36,250</td><td className="py-2 px-3 border">Y1/Y2</td><td className="py-2 px-3 border">Regulatory strategy. External at first</td></tr>
              <tr><td className="py-2 px-3 border">Business Developer</td><td className="py-2 px-3 border">0-1</td><td className="py-2 px-3 border">CDI</td><td className="py-2 px-3 border">38,000-45,000 + var</td><td className="py-2 px-3 border">55,100-65,250 + var</td><td className="py-2 px-3 border">Y2</td><td className="py-2 px-3 border">Partnerships, commercial strategy</td></tr>
              <tr><td className="py-2 px-3 border">Administrative Assistant</td><td className="py-2 px-3 border">1</td><td className="py-2 px-3 border">Part-time CDI/CDD</td><td className="py-2 px-3 border">~25,000</td><td className="py-2 px-3 border">~36,250</td><td className="py-2 px-3 border">Y2</td><td className="py-2 px-3 border">Admin support, HR, accounting</td></tr>
            </tbody>
          </table>
          <div className="text-gray-600 text-xs mt-2">Salaries are gross annual estimates. Total cost includes ~45% employer contributions.</div>
        </div>
      </Section>

      {/* Section 3: Material Resources */}
      <Section title="Material Resources" icon={<FaLaptop className="text-green-600" />}>  
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">IT Infrastructure and Hardware</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700 mb-2">
            <li>Mely&#39;s data will be stored on secure servers in France, ensuring compliance with GDPR and HDS requirements.</li>
            <li>High-performance laptops for each team member (€1.5k-2k/unit).</li>
            <li>Tablets: 2-4 professional tablets for testing (€500-900/unit).</li>
            <li>VR Headsets: 2-3 enterprise-grade headsets (€580-700/unit).</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Software and Licenses</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700 mb-2">
            <li>Development tools: IDEs (VS Code, JetBrains), open-source AI/ML frameworks (TensorFlow, PyTorch), cloud AI services (OpenAI, Mistral).</li>
            <li>CRM: HubSpot (starter/free plan, paid from $20-45/user/month).</li>
            <li>Project Management: Jira (free for 10 users).</li>
            <li>Office Suite: Google Workspace or Microsoft 365 (~€5.75/user/month).</li>
            <li>Medical software: Start with secure generic tools, adopt specific solutions as needed.</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Data Storage and Cloud Services</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700 mb-2">
            <li>HDS certification required (Azure, OVHcloud in France).</li>
            <li>Cloud compute for AI training, storage for all data.</li>
            <li>Estimated costs: €500-€2,000/month initially. FinOps is critical for cost control.</li>
            <li>Backup and disaster recovery strategy with HDS provider.</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Intellectual Property (IP)</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700 mb-2">
            <li>Patents: Evaluate for technical inventions (costly, involves disclosure).</li>
            <li>Copyright: Automatically protects code.</li>
            <li>Trade Secrets: Strict protection (NDAs, secure practices).</li>
            <li>Soleau Envelope (INPI): Low-cost proof of prior art.</li>
            <li>Trademarks: Register 'Mely' brand and products.</li>
            <li>NDAs and rights assignments for all external creations.</li>
          </ul>
          <div className="text-gray-700 text-sm mt-2">In seed phase, IP value relies more on team than formal assessment. A solid IP strategy builds investor credibility.</div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border mt-4">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-3 border">Resource Category</th>
                <th className="py-2 px-3 border">Description</th>
                <th className="py-2 px-3 border">Qty</th>
                <th className="py-2 px-3 border">Unit Cost (€)</th>
                <th className="py-2 px-3 border">Total Initial (€)</th>
                <th className="py-2 px-3 border">Recurring (€)</th>
                <th className="py-2 px-3 border">Acq. Phase</th>
                <th className="py-2 px-3 border">Supplier/Comments</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-3 border">Developer Laptop</td><td className="py-2 px-3 border">High Perf.</td><td className="py-2 px-3 border">3-5</td><td className="py-2 px-3 border">1,500-2,000</td><td className="py-2 px-3 border">4,500-10,000</td><td className="py-2 px-3 border">-</td><td className="py-2 px-3 border">Startup/Y1</td><td className="py-2 px-3 border">Dell, Apple, Lenovo</td></tr>
              <tr><td className="py-2 px-3 border">Professional Tablet</td><td className="py-2 px-3 border">For tests</td><td className="py-2 px-3 border">2-4</td><td className="py-2 px-3 border">500-900</td><td className="py-2 px-3 border">1,000-3,600</td><td className="py-2 px-3 border">-</td><td className="py-2 px-3 border">Startup/Y1</td><td className="py-2 px-3 border">Samsung, Apple</td></tr>
              <tr><td className="py-2 px-3 border">VR Headset (Pro)</td><td className="py-2 px-3 border">Enterprise</td><td className="py-2 px-3 border">2-3</td><td className="py-2 px-3 border">580-700</td><td className="py-2 px-3 border">1,160-2,100</td><td className="py-2 px-3 border">-</td><td className="py-2 px-3 border">Startup/Y1</td><td className="py-2 px-3 border">Meta, Pico</td></tr>
              <tr><td className="py-2 px-3 border">IDE (JetBrains Suite)</td><td className="py-2 px-3 border">Annual license</td><td className="py-2 px-3 border">3-5</td><td className="py-2 px-3 border">~200/year</td><td className="py-2 px-3 border">~600-1,000</td><td className="py-2 px-3 border">~600-1,000/year</td><td className="py-2 px-3 border">Startup/Y1</td><td className="py-2 px-3 border">JetBrains</td></tr>
              <tr><td className="py-2 px-3 border">CRM (HubSpot Starter)</td><td className="py-2 px-3 border">2 users</td><td className="py-2 px-3 border">~20-45/mo</td><td className="py-2 px-3 border">~40-90/mo</td><td className="py-2 px-3 border">~480-1,080/year</td><td className="py-2 px-3 border">Startup</td><td className="py-2 px-3 border">HubSpot</td></tr>
              <tr><td className="py-2 px-3 border">Cloud & HDS Storage</td><td className="py-2 px-3 border">VMs, DB, etc.</td><td className="py-2 px-3 border">N/A</td><td className="py-2 px-3 border">Variable</td><td className="py-2 px-3 border">Variable</td><td className="py-2 px-3 border">500-2,000/mo</td><td className="py-2 px-3 border">Startup</td><td className="py-2 px-3 border">Azure, OVHcloud</td></tr>
              <tr><td className="py-2 px-3 border">Trademark Filing (France)</td><td className="py-2 px-3 border">1-2 classes</td><td className="py-2 px-3 border">1-2</td><td className="py-2 px-3 border">~250/class</td><td className="py-2 px-3 border">~250-500</td><td className="py-2 px-3 border">Renewal fees</td><td className="py-2 px-3 border">Startup</td><td className="py-2 px-3 border">INPI</td></tr>
              <tr><td className="py-2 px-3 border">Patent Attorney Consultation</td><td className="py-2 px-3 border">Initial</td><td className="py-2 px-3 border">1</td><td className="py-2 px-3 border">1,000-3,000</td><td className="py-2 px-3 border">1,000-3,000</td><td className="py-2 px-3 border">-</td><td className="py-2 px-3 border">Y1</td><td className="py-2 px-3 border">IP firm</td></tr>
            </tbody>
          </table>
          <div className="text-gray-600 text-xs mt-2">Recurring costs for software/cloud may evolve with growth.</div>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Conclusion</h3>
          <div className="text-gray-700">Mely's resource strategy is marked by financial prudence, flexibility, and compliance, especially for health data. A phased, scalable approach focuses resources on core business: developing innovative AI for neurological and mental health.</div>
        </div>
      </Section>
    </div>
  );
}
