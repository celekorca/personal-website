import React from 'react';
import Card from '../Card';
import { TableColumn } from '../../../types';
import { 
  UsersIcon, 
  LightBulbIcon, 
  CheckCircleIcon, 
  ChartBarIcon, 
  BeakerIcon, 
  ShieldCheckIcon,
  XCircleIcon,
  ArrowUpCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import {
  marketSizeData,
  comparativeMarketSizeData,
  patientPopulationData,
  economicIndicators,
  technologyAdvancements,
  investmentDeals,
  pestelAnalysis,
  swotAnalysis
} from '../../../data/marketData';

const MarketAnalysis: React.FC = () => {

  // Table columns
  const comparativeMarketSizeColumns: TableColumn[] = [
    { header: 'Market Segment', accessor: 'marketSegment' },
    { header: 'Global Market Size (Year, Value)', accessor: 'globalSize' },
    { header: 'Global CAGR (Period)', accessor: 'globalCagr' },
    { header: 'Europe Market Size (Year, Value)', accessor: 'europeSize' },
    { header: 'Europe CAGR (Period)', accessor: 'europeCagr' },
    { header: 'France Market Size (Year, Value)', accessor: 'franceSize' },
    { header: 'France CAGR (Period)', accessor: 'franceCagr' },
  ];

  const patientPopulationColumns: TableColumn[] = [
    { header: 'Condition', accessor: 'condition' },
    { header: 'France - Current', accessor: 'franceCurrent' },
    { header: 'France - Projected', accessor: 'franceProjected' },
    { header: 'EU - Current', accessor: 'euCurrent' },
    { header: 'EU - Projected', accessor: 'euProjected' },
  ];

  const economicIndicatorsColumns: TableColumn[] = [
    { header: 'Economic Indicator', accessor: 'indicator' },
    { header: "Alzheimer's Disease/Dementia", accessor: 'alzheimers' },
    { header: "Parkinson's Disease", accessor: 'parkinsons' },
  ];

  const technologyAdvancementsColumns: TableColumn[] = [
    { header: 'Technology Domain', accessor: 'domain' },
    { header: 'Current State/Advancements', accessor: 'currentState' },
    { header: 'Key Opportunities for MELY', accessor: 'opportunities' },
    { header: 'Key Challenges/Considerations', accessor: 'challenges' },
  ];

  const investmentDealsColumns: TableColumn[] = [
    { header: 'Date', accessor: 'date' },
    { header: 'Company', accessor: 'company' },
    { header: 'Acquirer/Investor', accessor: 'acquirer' },
    { header: 'Deal Value', accessor: 'dealValue' },
    { header: 'Technology Focus', accessor: 'technologyFocus' },
    { header: 'Relevance to MELY', accessor: 'relevance' },
  ];

  return (
    <section id="market-analysis" className="space-y-12">
      {/* Top Row - Two Columns */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Card - Market Overview */}
        <Card title="Market Overview" icon={<LightBulbIcon className="w-6 h-6" />}>
          <div className="space-y-4">
            <p>
              The AI-powered neurodiagnostics market is expanding rapidly due to unmet needs in diagnosing conditions like Parkinson&apos;s, Alzheimer&apos;s, Schizophrenia, and MS. France offers a dynamic landscape with strong government backing for AI and digital health, but also a cost-conscious healthcare system. MELY&apos;s strategic focus on digital biomarkers derived from VR/tablet interactions positions it at the forefront of this nascent field.
            </p>
            <p>
              Digital and AI-driven sub-segments boast high CAGRs (often &gt;20%), indicating a clear market shift. The French digital neuro biomarkers market, with a 26.3% CAGR, is particularly promising.
            </p>
          </div>
        </Card>

        {/* Right Card - Market Size & Growth Snapshot */}
        <Card title="Market Size & Growth Snapshot" icon={<ChartBarIcon className="w-6 h-6" />}>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-center font-medium text-gray-700 mb-4">Market Value (Billion USD)</div>
            
            <div className="space-y-3">
              {marketSizeData.map((item, index) => {
                const maxValue = 5; // Fixed max value for consistent scaling
                const widthPercentage = (item.value / maxValue) * 100;
                const isGlobal = item.segment.includes('Global');
                
                return (
                  <div key={index} className="group">
                    <div className="flex items-center mb-1">
                      <div className="w-40 pr-2">
                        <div className="text-sm font-medium text-gray-700 truncate">
                          {item.segment}
                        </div>
                        <div className="text-xs text-sky-600 font-medium">
                          {item.value}B
                        </div>
                      </div>
                      
                      <div className="flex-1 h-8 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${isGlobal ? 'bg-sky-600' : 'bg-sky-400'} group-hover:opacity-90 transition-all duration-300 relative`}
                          style={{ width: `${widthPercentage}%` }}
                        >
                          <div className="absolute -right-24 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 shadow-lg">
                            <div className="font-semibold">{item.segment}</div>
                            <div className="border-t border-gray-600 my-0.5"></div>
                            <div>Value: <span className="font-medium">{item.displayValue}</span></div>
                            <div>CAGR: <span className="font-medium">{item.cagr}</span></div>
                            <div>Year: <span className="font-medium">{item.year}</span></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-16 text-right text-xs font-medium text-gray-500 pl-2">
                        {item.displayValue}
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* X-axis scale */}
              <div className="mt-2 ml-40 relative h-4">
                {[0, 1, 2, 3, 4, 5].map((tick) => (
                  <div 
                    key={tick} 
                    className="absolute text-xs text-gray-500"
                    style={{ left: `${(tick / 5) * 100}%`, transform: 'translateX(-50%)' }}
                  >
                    {tick}B
                  </div>
                ))}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></div>
              </div>
            </div>
            
            <div className="text-xs text-gray-500 mt-4 px-2">
              <p>Illustrative Market Sizes. Axis in Billions USD. Hover over bars for detailed information.</p>
              <p className="text-2xs mt-1">Note: Values represent market sizes in their respective segments and years.</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Table 1: Comparative Market Size & CAGR */}
      <Card title="Table 1: Comparative Market Size & CAGR">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {comparativeMarketSizeColumns.map((column, index) => (
                  <th 
                    key={index}
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {comparativeMarketSizeData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-4 text-sm text-gray-900 whitespace-normal">
                    {item.marketSegment}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-normal">
                    {item.globalSize}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-normal">
                    {item.globalCagr}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-normal">
                    {item.europeSize}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-normal">
                    {item.europeCagr}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-normal">
                    {item.franceSize}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-normal">
                    {item.franceCagr}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-2 text-xs text-gray-500">
          Note: &apos;N/A&apos; indicates data not explicitly available or directly comparable. &apos;AD Dx&apos; refers to Alzheimer&apos;s Disease Diagnostics. &apos;Tech&apos; refers to the technology market specifically. Source: Report p.12-13
        </div>
      </Card>

      {/* Second Row - Two Columns */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Card - Addressable Patient Populations */}
        <Card title="Addressable Patient Populations" icon={<UsersIcon className="w-6 h-6" />}>
          <p className="mb-4">
            <p>University hospitals, neuroscience centers (e.g., Paris Brain Institute, EBRAINS), and public bodies (NIH, CNRS) are vital for biomarker discovery, understanding disease mechanisms, and validating new diagnostics (p.166-167).</p>
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <UsersIcon className="h-5 w-5 text-sky-500 mr-2 mt-0.5 flex-shrink-0" />
              <span><strong>Parkinson&#39;s (FR):</strong> ~270k (2025E); EU: &gt;1M, to double by 2030.</span>
            </li>
            <li className="flex items-start">
              <UsersIcon className="h-5 w-5 text-sky-500 mr-2 mt-0.5 flex-shrink-0" />
              <span><strong>Alzheimer&apos;s/Dementia (FR):</strong> ~0.9-1.2M; EU: 7M AD, to double.</span>
            </li>
            <li className="flex items-start">
              <UsersIcon className="h-5 w-5 text-sky-500 mr-2 mt-0.5 flex-shrink-0" />
              <span><strong>Schizophrenia (FR):</strong> ~500k-600k.</span>
            </li>
            <li className="flex items-start">
              <UsersIcon className="h-5 w-5 text-sky-500 mr-2 mt-0.5 flex-shrink-0" />
              <span><strong>MS (FR):</strong> ~110k-120k.</span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            MELY&apos;s AI tools could help resolve diagnostic ambiguity and more accurately define patient populations, especially in early cognitive impairment (MCI).
          </p>
        </Card>

        {/* Right Card - Economic Impact & Value Proposition */}
        <Card title="Economic Impact & Value Proposition" icon={<CheckCircleIcon className="w-6 h-6" />}>
          <p className="mb-4">
            Neurodegenerative and mental health disorders impose an immense economic burden. MELY&apos;s tools for early and accurate diagnosis offer significant economic benefits.
          </p>
          <h4 className="text-md font-semibold mb-2 text-sky-700">Key Economic Levers for MELY:</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Reduce direct healthcare costs (e.g., delaying high-level AD care, potentially saving ~€20B annually in EU).</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Decrease informal care costs (e.g., AD MCI-AD informal care costs €4,187/year in France).</span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Improve treatment cost-effectiveness via timely intervention (e.g., PD savings in Germany up to €5.4k/patient).</span>
            </li>
          </ul>
          <p className="mt-3 text-sm text-gray-600">
            The &quot;panier moyen&quot; (avg. revenue per user) for comparable digital health solutions is not explicit but emerging reimbursement frameworks (DiGA, PECAN) provide benchmarks.
          </p>
        </Card>
      </div>

      {/* Table 2: Estimated Patient Populations */}
      <Card title="Table 2: Estimated Patient Populations for Target Conditions">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {patientPopulationColumns.map((column, index) => (
                  <th 
                    key={index}
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {patientPopulationData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900 whitespace-normal">
                    {item.condition}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-normal">
                    {item.franceCurrent}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-normal">
                    {item.franceProjected}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-normal">
                    {item.euCurrent}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-normal">
                    {item.euProjected}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-2 text-xs text-gray-500">
          Note: Patient number estimates can vary. Projections are subject to change. &apos;N/A&apos; indicates data not explicitly available. Source: Report p.15
        </div>
      </Card>

      {/* Table 3: Key Economic Indicators */}
      <Card title="Table 3: Key Economic Indicators (Cost of Care, Potential Savings)">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {economicIndicatorsColumns.map((column, index) => (
                  <th 
                    key={index}
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {economicIndicators.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900 whitespace-normal">
                    {item.indicator}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-normal">
                    {item.alzheimers}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-normal">
                    {item.parkinsons}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-2 text-xs text-gray-500">
          Note: Costs are indicative and vary significantly. PV = Present Value. Source: Report p.17-18
        </div>
      </Card>

      {/* Key Market Trends */}
      <Card title="Key Market Trends & Technological Advancements" icon={<LightBulbIcon className="w-6 h-6" />}>
        <p className="mb-4">Several interconnected trends shape MELY&apos;s environment:</p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <LightBulbIcon className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <strong>Digital Transformation & AI Adoption:</strong> Increasing in healthcare, especially neurology/psychiatry. Clinician adoption varies; trust and usability are key. France is actively fostering AI adoption.
            </div>
          </li>
          <li className="flex items-start">
            <LightBulbIcon className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <strong>Evolving Stakeholder Behaviors:</strong> Patients are more proactive in seeking early diagnosis. Clinicians demand more objective, faster, less invasive tools. Rise of RPM presents strategic opportunities.
            </div>
          </li>
          <li className="flex items-start">
            <LightBulbIcon className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <strong>Pivotal Tech Advancements:</strong> VR/Tablet tech evolving for diagnostics. Sensor data accuracy improving for digital biomarkers. Parkinson&apos;s, Alzheimer&apos;s, Schizophrenia, MS see active research in digital biomarkers.
            </div>
          </li>
          <li className="flex items-start">
            <LightBulbIcon className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <strong>Explainable AI (XAI):</strong> Critical for clinical trust, patient acceptance, and regulatory compliance (EU AI Act).
            </div>
          </li>
          <li className="flex items-start">
            <LightBulbIcon className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <strong>Investment &amp; M&amp;A:</strong> Strong investor appetite for HealthTech/AI. European funding robust ($USD 13.9B in Q1 2025 for HealthTech/AI). France&apos;s &quot;Plan France 2030&quot; supports digital health. Surge in distressed HealthTech M&amp;A anticipated.
            </div>
          </li>
        </ul>
        <p className="mt-4 text-sm text-gray-600">
          Source: Report p.18-26
        </p>
      </Card>

      {/* Table 4: Key Technological Advancements */}
      <Card title="Table 4: Key Technological Advancements & Implications for MELY">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {technologyAdvancementsColumns.map((column, index) => (
                  <th 
                    key={index}
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {technologyAdvancements.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900 whitespace-normal">
                    {item.domain}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-normal">
                    {item.currentState}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-normal">
                    {item.opportunities}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-normal">
                    {item.challenges}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-2 text-xs text-gray-500">
          Source: Report p.19-22
        </div>
      </Card>

      {/* Table 5: Investment & M&A Deals */}
      <Card title="Table 5: Recent Investment & M&A Activity in Neurodiagnostics">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {investmentDealsColumns.map((column, index) => (
                  <th 
                    key={index}
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {investmentDeals.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-normal">
                    {item.date}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900 whitespace-normal">
                    {item.company}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-normal">
                    {item.acquirer}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-normal">
                    {item.dealValue}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-normal">
                    {item.technologyFocus}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 whitespace-normal">
                    {item.relevance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-2 text-xs text-gray-500">
          Note: Deal values are not always disclosed. &apos;Undisclosed&apos; indicates private funding rounds or acquisitions where the amount was not made public. Source: Report p.23-24
        </div>
      </Card>

      {/* External Environment & Internal Assessment */}
      <Card title="External Environment & Internal Assessment" className="bg-gray-50">
        <p className="mb-6">
          The following PESTEL and SWOT analyses provide a comprehensive overview of the external and internal factors impacting MELY&apos;s market position and strategic direction.
        </p>
      </Card>

      {/* PESTEL Analysis */}
      <Card title="PESTEL Analysis" icon={<ShieldCheckIcon className="w-6 h-6" />}>
        <div className="space-y-6">
          {pestelAnalysis.map((item, index) => (
            <div key={index}>
              <h4 className="text-md font-semibold mb-2 text-sky-700">{item.factor}</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="mb-1">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-4 text-xs text-gray-500">
          Source: Report p.25-26
        </div>
      </Card>

      {/* SWOT Analysis */}
      <Card title="SWOT Analysis" icon={<BeakerIcon className="w-6 h-6" />}>
        <div className="grid md:grid-cols-2 gap-6">
          {swotAnalysis.map((item, index) => (
            <div key={index}>
              <h4 className={`text-md font-semibold mb-3 ${
                item.category === 'Strengths' ? 'text-green-600' :
                item.category === 'Weaknesses' ? 'text-red-600' :
                item.category === 'Opportunities' ? 'text-blue-600' : 'text-amber-600'
              }`}>
                {item.category}
              </h4>
              <ul className="space-y-2">
                {item.items.map((detail, detailIndex) => {
                  const Icon = item.category === 'Strengths' ? CheckCircleIcon :
                    item.category === 'Weaknesses' ? XCircleIcon :
                    item.category === 'Opportunities' ? ArrowUpCircleIcon : ExclamationTriangleIcon;
                  const iconClass = item.category === 'Strengths' ? 'text-green-500' :
                    item.category === 'Weaknesses' ? 'text-red-500' :
                    item.category === 'Opportunities' ? 'text-blue-500' : 'text-amber-500';
                  
                  return (
                    <li key={detailIndex} className="flex items-start">
                      <Icon className={`h-5 w-5 ${iconClass} mr-2 mt-0.5 flex-shrink-0`} />
                      <span>{detail}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-4 text-xs text-gray-500">
          Source: Report p.27-28
        </div>
      </Card>
    </section>
  );
};

export default MarketAnalysis;
