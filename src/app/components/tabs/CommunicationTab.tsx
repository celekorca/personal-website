import React from 'react';
import { FaLightbulb, FaChartBar, FaUsers, FaGraduationCap, FaCheckCircle, FaBriefcase, FaBullhorn, FaGlobe, FaFileAlt, FaShieldAlt, FaArrowRight, FaChartLine, FaStar, FaTabletAlt, FaKey, FaBuilding, FaThumbsUp, FaRocket, FaStethoscope } from 'react-icons/fa';

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

function TwoColumn({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1">{left}</div>
      <div className="flex-1">{right}</div>
    </div>
  );
}

export default function CommunicationTab() {
  return (
    <div className="space-y-12">
      {/* Section 1: Communication Goals */}
      <Section title="The 'Why': Foundation of Our Communication" icon={<FaLightbulb className="text-yellow-500" />}>  
        <TwoColumn
          left={
            <div>
              <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><FaGraduationCap className="text-purple-500" /> Our Guiding Principles</h3>
              <div className="mb-3">
                <div className="font-semibold flex items-center gap-2 mb-1"><FaChartLine className="text-indigo-500" /> Core Aims</div>
                <ul className="list-disc list-inside ml-4 text-gray-700">
                  <li>Build awareness: Enhance brand visibility and support sales.</li>
                  <li>Acquire new clients: Directly support sales, especially with long cycles.</li>
                  <li>Foster user loyalty: Build lasting relationships for engagement and advocacy.</li>
                </ul>
              </div>
              <div className="mb-3">
                <div className="font-semibold flex items-center gap-2 mb-1"><FaBullhorn className="text-orange-500" /> Target Audiences</div>
                <ul className="list-disc list-inside ml-4 text-gray-700">
                  <li>Neurologists, GPs, other Medical Professionals</li>
                  <li>Researchers (Neurosciences, AI in Health)</li>
                  <li>Pharmaceutical companies (R&D, Clinical Trials)</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold flex items-center gap-2 mb-1"><FaChartBar className="text-blue-500" /> Clear & Measurable Goals</div>
                <div className="text-gray-700">Fundamental for guiding efforts and evaluating success. Well-defined objectives provide a roadmap, ensuring resources are focused on transmitting unique value.</div>
              </div>
            </div>
          }
          right={
            <div>
              <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><FaChartBar className="text-blue-500" /> Why Measurable Objectives Are Crucial</h3>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>Track Progress: Real-time campaign effectiveness & adjustments (KPIs allow real-time tracking).</li>
                <li>Show Value to Investors: Objective proof of market traction & spend efficiency.</li>
                <li>Strategic Decision-Making: Data-driven budget allocation & strategy refinement.</li>
                <li>Transform Communication: From expense to strategic investment for growth & credibility.</li>
              </ul>
            </div>
          }
        />
        <div className="mt-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-gray-50 rounded-xl p-6 border-l-4 border-blue-400 mb-4">
              <div className="flex items-center gap-2 mb-2"><FaGlobe className="text-blue-400" /><span className="font-semibold">Awareness & Visibility</span></div>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>Increase brand recognition among target neurologists and researchers by 20% within 12 months.</li>
                <li>Secure at least 5 significant features or mentions in key industry publications annually.</li>
              </ul>
            </div>
            <div className="flex-1 bg-gray-50 rounded-xl p-6 border-l-4 border-green-500 mb-4">
              <div className="flex items-center gap-2 mb-2"><FaCheckCircle className="text-green-500" /><span className="font-semibold">Credibility & Trust</span></div>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>Publish 2-3 peer-reviewed articles or present at 3-4 major scientific conferences annually.</li>
                <li>Develop and disseminate 2 comprehensive case studies or white papers within the first 18 months.</li>
              </ul>
            </div>
            <div className="flex-1 bg-gray-50 rounded-xl p-6 border-l-4 border-orange-400 mb-4">
              <div className="flex items-center gap-2 mb-2"><FaBriefcase className="text-orange-400" /><span className="font-semibold">Lead Generation & Partnerships</span></div>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>Generate an average of 10-15 qualified leads for pilot programs with healthcare providers per quarter.</li>
                <li>Initiate 3-5 strategic partnership discussions with pharmaceutical companies or CROs annually.</li>
              </ul>
            </div>
            <div className="flex-1 bg-gray-50 rounded-xl p-6 border-l-4 border-yellow-400 mb-4">
              <div className="flex items-center gap-2 mb-2"><FaLightbulb className="text-yellow-400" /><span className="font-semibold">Community Engagement & Thought Leadership</span></div>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>Grow LinkedIn follower base by 25% and achieve an average engagement rate of 3-5% quarterly.</li>
                <li>Position Mely executives as thought leaders by securing 2-3 speaking engagements or publishing 1-2 expert opinion articles annually.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><FaBullhorn className="text-orange-500" /> Crafting Our Core Message</h3>
          <div className="bg-white rounded-xl shadow p-6 mb-6 border border-gray-100">
            <div className="mb-4">
              <span className="italic text-gray-700 block text-center text-lg font-semibold">"Mely: Revolutionizing brain health through AI-powered digital biomarkers for earlier, more objective neurological diagnosis and monitoring—transforming patient care and accelerating therapeutic innovation."</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-1"><FaUsers className="text-blue-400" /> <span className="font-semibold">For Healthcare Providers</span></div>
                <div className="text-gray-700 text-sm">Empower your clinical practice with Mely: Gain rapid, objective insights into neurological function for enhanced diagnostic confidence, personalized patient monitoring, and optimized care pathways.</div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1"><FaBriefcase className="text-orange-400" /> <span className="font-semibold">For Pharmaceutical Companies</span></div>
                <div className="text-gray-700 text-sm">Accelerate your CNS drug development with Mely: Leverage sensitive, objective digital biomarkers to optimize clinical trial design, improve data quality, and achieve milestones faster.</div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1"><FaGraduationCap className="text-purple-500" /> <span className="font-semibold">For Research Institutes</span></div>
                <div className="text-gray-700 text-sm">Unlock new frontiers in neuroscience with Mely: Access a rich, multimodal dataset and advanced AI tools for deeper understanding of neurological diseases and the discovery of novel biomarkers.</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 2: Communication Strategy */}
      <Section title="Communication Strategy" icon={<FaChartLine className="text-indigo-500" />}>  
        <div className="mb-8">
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="bg-white rounded-xl shadow p-6 flex-1 min-w-[240px] max-w-[340px] border border-gray-100">
              <div className="flex items-center gap-2 mb-2"><FaGraduationCap className="text-purple-500" /> <span className="font-semibold">Educate & Inform</span></div>
              <div className="text-gray-700 text-sm">Provide clear, evidence-based info on Mely's tech and benefits.</div>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex-1 min-w-[240px] max-w-[340px] border border-gray-100">
              <div className="flex items-center gap-2 mb-2"><FaShieldAlt className="text-green-700" /> <span className="font-semibold">Build Trust & Credibility</span></div>
              <div className="text-gray-700 text-sm">Establish Mely as a reliable, scientifically rigorous partner.</div>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex-1 min-w-[240px] max-w-[340px] border border-gray-100">
              <div className="flex items-center gap-2 mb-2"><FaUsers className="text-blue-400" /> <span className="font-semibold">Engage & Collaborate</span></div>
              <div className="text-gray-700 text-sm">Foster meaningful interactions with professionals and partners.</div>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex-1 min-w-[240px] max-w-[340px] border border-gray-100">
              <div className="flex items-center gap-2 mb-2"><FaChartLine className="text-indigo-500" /> <span className="font-semibold">Drive Impact & Adoption</span></div>
              <div className="text-gray-700 text-sm">Translate communication into platform adoption and better care.</div>
            </div>
          </div>
        </div>
        {/* Engaging Audiences */}
        <div className="mb-8">
          <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><FaUsers className="text-blue-400" /> Engaging Our Key Audiences</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-400">
              <div className="font-semibold mb-2">Healthcare Providers</div>
              <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                <li>Needs: Objective diagnostic tools, efficiency, effective monitoring, validated solutions.</li>
                <li>Tactics: Publications, webinars, peer discussions, data at conferences.</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange-400">
              <div className="font-semibold mb-2">Pharmaceutical Companies</div>
              <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                <li>Needs: Reliable biomarkers, trial optimization, high-quality data, innovative tools.</li>
                <li>Tactics: R&D portals, confidential briefings, joint publications, consortia participation.</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-purple-400">
              <div className="font-semibold mb-2">Research Institutes</div>
              <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                <li>Needs: Novel datasets, collaborative tools, publication opportunities, advanced analytics.</li>
                <li>Tactics: Grants, data access, conferences, AI workshops.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Communication Channels */}
        <div className="mb-8">
          <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><FaBullhorn className="text-orange-500" /> Our Communication Channels</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-2"><FaBuilding className="text-indigo-500" /> <span className="font-semibold">Owned Media</span></div>
              <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                <li>Website & Scientific Blog</li>
                <li>LinkedIn Company Page</li>
                <li>Scientific Publications</li>
                <li>Email Newsletters</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-2"><FaThumbsUp className="text-blue-400" /> <span className="font-semibold">Earned Media</span></div>
              <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                <li>PR & Media Outreach</li>
                <li>KOL Endorsements</li>
                <li>Conference Presentations</li>
                <li>Organic Social Mentions</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-2"><FaChartBar className="text-green-500" /> <span className="font-semibold">Paid Media</span></div>
              <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                <li>Targeted LinkedIn Advertising</li>
                <li>Sponsored Content in Journals</li>
                <li>Search Engine Marketing (SEM)</li>
                <li>Event Sponsorships</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Content Strategy */}
        <div className="mb-8">
          <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><FaLightbulb className="text-yellow-400" /> Content That Educates, Engages, and Converts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-indigo-400">
              <div className="font-semibold mb-2">The Science & Technology of Mely</div>
              <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                <li>White Papers, Research Summaries, Peer-Reviewed Publications, Explainer Videos</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-green-500">
              <div className="font-semibold mb-2">Clinical Impact & Practical Application</div>
              <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                <li>Case Studies, Testimonials, Webinars, ROI Calculators</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-yellow-400">
              <div className="font-semibold mb-2">The Future of Neuro-Diagnostics & AI in Health</div>
              <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                <li>Thought Leadership Articles, Expert Interviews, Roadmap Presentations</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange-400">
              <div className="font-semibold mb-2">Partnership & Collaboration Success</div>
              <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
                <li>Partnership Stories, Collaboration Frameworks, Integration Guides</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Crisis Communication */}
        <div className="mb-8">
          <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><FaShieldAlt className="text-green-700" /> Crisis Communication & Reputation Management</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
            <li>Proactive Monitoring & Risk Assessment: Media scanning and social listening.</li>
            <li>Rapid Response Protocol: Defined crisis team roles and templates.</li>
            <li>Transparent & Timely Communication: Honest, regular updates.</li>
            <li>Stakeholder Management: Tailored messaging to all groups.</li>
            <li>Reputation Rebuilding & Learning: Post-incident review and improvement.</li>
          </ul>
        </div>
      </Section>

      {/* Section 3: Digital Execution Strategy */}
      <Section title="Digital Execution Strategy" icon={<FaGlobe className="text-blue-400" />}>  
        <div className="mb-8">
          <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><FaGlobe className="text-blue-400" /> The Digital Hub: Website & SEO Excellence</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
            <li>Inform about Mely's mission, establish credibility, and capture leads.</li>
            <li>UX/UI: Clarity, professional aesthetics, mobile-first design.</li>
            <li>Comprehensive SEO: Keyword research, on-page & technical optimization.</li>
            <li>Strategic CTAs: "Request a Demo" or "Download Whitepaper" calls to action.</li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><FaBullhorn className="text-orange-500" /> Amplifying Our Voice: Social Media & Content Distribution</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
            <li>LinkedIn Strategy: Thought leadership, milestones, engagement.</li>
            <li>Content Adaptation: Videos and engaging digital formats.</li>
            <li>Community Engagement: Q&A sessions, employee advocacy, partner networks.</li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><FaTabletAlt className="text-indigo-500" /> Nurturing Relationships: Email Marketing & CRM</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
            <li>Audience Segmentation: By role, interest, engagement.</li>
            <li>Email Campaigns: Newsletters, feature announcements, event invites.</li>
            <li>Marketing Automation: Timely, personalized sequences.</li>
            <li>CRM for Digital Touchpoints: Track all digital interactions.</li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><FaChartBar className="text-green-500" /> Measuring Success: Digital Analytics & Optimization</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700 text-sm">
            <li>Website: Unique Visitors, Time on Page, CTA Conversion Rate.</li>
            <li>LinkedIn: Reach, Engagement Rate, Follower Growth.</li>
            <li>Email: Open Rate, Click-Through Rate, Conversion Rate.</li>
            <li>Analytics Tools: GA4, LinkedIn Analytics, Email Platform, CRM.</li>
            <li>Reporting & Actionable Insights: Regular reporting on trends and successes.</li>
            <li>Continuous Improvement Cycle: Measure → Analyze → Optimize → Repeat.</li>
          </ul>
        </div>
      </Section>

      {/* Section 4: Conclusion & Recommendations */}
      <Section title="Conclusion & Recommendations" icon={<FaChartLine className="text-indigo-500" />}>  
        <div className="mb-4 text-gray-700">
          <strong>Strategic Synthesis:</strong> Mely's digital communication is built on clear goals, guided by pillars, and executed via a targeted ecosystem.
        </div>
        <ul className="list-disc list-inside ml-4 text-gray-700 text-sm mb-4">
          <li>Innovative Message: Cutting-edge approach with clear, tailored value propositions.</li>
          <li>Credible & Scientific: Foundation in rigorous research and transparent data.</li>
          <li>Audience-Centric Engagement: Designed to solve specific B2B challenges.</li>
          <li>Data-Driven & Agile: Commitment to measuring impact and continuously optimizing.</li>
        </ul>
        <div className="mb-4 text-gray-700">
          <strong>Measuring Impact & Agile Evolution:</strong> Our strategy is dynamic. We will continuously monitor performance, learn from data, and adapt our digital communication to maximize impact and achieve Mely's objectives.
        </div>
        <div className="mb-4 text-gray-700">
          <strong>The Path Forward:</strong> Mely: Illuminating Brain Health. Communicating Innovation. Driving Change.
        </div>
        <div className="text-gray-700">
          Through strategic digital communication, Mely will continue to build trust, foster collaboration, and accelerate the adoption of technologies that redefine neurological and mental healthcare.
        </div>
      </Section>
    </div>
  );
}
