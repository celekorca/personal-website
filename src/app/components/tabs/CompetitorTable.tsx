'use client';

interface Competitor {
    name: string;
    founded: string;
    location: string;
    headcount: string;
    revenue: string;
    products: string;
    pricing: string;
    info: string;
    qualitative: string;
}

export default function CompetitorTable() {
    const competitors: Competitor[] = [
        {
            name: 'ClearSky Medical Diagnostics',
            founded: '2013',
            location: 'York, UK',
            headcount: '8',
            revenue: 'Not available',
            products: 'Wearable devices and AI/ML for gait and movement analysis (PD-Monitor, LID-Monitor, MCI-Monitor)',
            pricing: 'Not public',
            info: 'Spin-out from the University of York; collaboration with Shimmer Research',
            qualitative: 'Passionate about improving lives with diverse expertise'
        },
        {
            name: 'Emteq (Emteq Labs)',
            founded: '2015',
            location: 'Brighton, UK',
            headcount: '11-50',
            revenue: '$3.8M USD (2023)',
            products: 'OCOsense glasses with OMG sensors for facial expression and emotion analysis',
            pricing: 'Not public (B2B hardware sales)',
            info: 'VC-backed; CEO Steen Strand (ex-Snap Inc.)',
            qualitative: 'Highly praised by professionals; considered a major breakthrough'
        },
        {
            name: 'RetiSpec',
            founded: '2016',
            location: 'Toronto, Canada',
            headcount: '28',
            revenue: 'Not available',
            products: 'Hyperspectral retinal imaging and AI for early Alzheimer\'s detection',
            pricing: 'B2B model for clinics and imaging OEMs',
            info: '$17M total funding; Partners with Topcon and Eli Lilly',
            qualitative: 'Strong potential for early, affordable diagnosis'
        },
        {
            name: 'C. Light Technologies',
            founded: '2014',
            location: 'Medford/Boston, MA, USA',
            headcount: '11-50',
            revenue: '<$10M USD',
            products: 'Retitrack™: FDA-cleared retinal eye-tracking monitor',
            pricing: 'B2B sales to medical/research institutions',
            info: '> $8M funding; Investors include Yamaha Motor Ventures',
            qualitative: 'Innovative eye movement quantification technology'
        },
        {
            name: 'NeuraLight',
            founded: '2021',
            location: 'Tel Aviv, Israel',
            headcount: '42',
            revenue: 'Not available',
            products: 'AI platform analyzing oculometric data for neurological disorders',
            pricing: 'SaaS model for pharma and clinical trials',
            info: '> $30.5M funding; Clinical partnerships with major medical centers',
            qualitative: 'Transforming clinical development with Digital Biomarker-as-a-Service'
        },
        {
            name: 'Altoida',
            founded: '2016',
            location: 'Washington, DC, USA',
            headcount: '29',
            revenue: 'Not available',
            products: 'NeuroMarker Platform™: AI and AR-based cognitive assessments',
            pricing: 'Pharma, research, and care partnerships',
            info: '$21.53M funding; FDA Breakthrough Designation',
            qualitative: 'Praised as "ingenious" by neurosurgeons and memory experts'
        },
        {
            name: 'Akili Interactive Labs',
            founded: '2011',
            location: 'Boston, MA, USA',
            headcount: 'Not available',
            revenue: 'Not available',
            products: 'Digital medicine platform for cognitive dysfunction; FDA-cleared for ADHD',
            pricing: 'Prescription digital therapeutic model',
            info: '> $120M funding; Pioneer in digital therapeutics',
            qualitative: 'Blends clinical and lifestyle interfaces'
        },
        {
            name: 'ViewMind',
            founded: '2016',
            location: 'New York, NY, USA / Luxembourg',
            headcount: '11-50',
            revenue: 'Not available',
            products: 'Precision digital cognitive assessments via VR headset with eye-tracking',
            pricing: 'Subscription model',
            info: '$10.47M funding; Active in multiple global regions',
            qualitative: 'High growth potential recognized by Frost & Sullivan'
        },
        {
            name: 'Darmiyan',
            founded: '2015',
            location: 'San Francisco, CA, USA',
            headcount: '1-50',
            revenue: 'Not available',
            products: 'BrainSee®: FDA-approved AI software for brain MRI analysis',
            pricing: 'Image analysis license (clinical and pharmaceutical use)',
            info: '> $12M funding; FDA Breakthrough Designation and De Novo approval',
            qualitative: 'Highly praised for sensitivity, specificity, and clinical utility'
        }
    ];

    return (
        <div className="overflow-x-auto">
            <div className="min-w-full overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Founded</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Headcount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Info</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {competitors.map((competitor, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-normal">
                                    <div className="font-medium text-gray-900">{competitor.name}</div>
                                    <div className="text-sm text-gray-500">{competitor.products}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {competitor.founded}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {competitor.location}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {competitor.headcount}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {competitor.revenue}
                                </td>
                                <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                                    <div className="font-medium">{competitor.info}</div>
                                    <div className="mt-1 text-xs text-gray-400">{competitor.qualitative}</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 text-xs text-gray-500">
                <p>Note: Data is based on publicly available information as of June 2025</p>
            </div>
        </div>
    );
}
