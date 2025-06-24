'use client';

import React from 'react';
import Card from '../../components/Card';
import TableComponent from '../../components/TableComponent';
import { TableColumn, TableData } from '../../../types';
import { 
  LightBulbIcon, 
  ShieldCheckIcon,
  BeakerIcon,
  BriefcaseIcon
} from '../../components/Icon';

// Interfaces
export interface HardwareTabletDataItem extends TableData {
  id: number;
  supplier: string;
  model: string;
  features: string;
  certifications: string;
  priceRange: string;
  support: string;
  [key: string]: string | number | boolean | null | undefined | string[] | number[];
}

export interface HardwareVRDataItem extends TableData {
  id: number;
  supplier: string;
  model: string;
  resolution: string;
  tracking: string;
  comfort: string;
  priceRange: string;
  [key: string]: string | number | boolean | null | undefined | string[] | number[];
}

export interface CloudProviderDataItem extends TableData {
  provider: string;
  healthcareServices: string;
  aiMlTools: string;
  startupProgram: string;
  compliance: string;
  [key: string]: string | number | boolean | null | undefined | string[] | number[];
}

export interface CybersecurityDataItem extends TableData {
  area: string;
  considerations: string;
  potentialVendors: string;
  [key: string]: string | number | boolean | null | undefined | string[] | number[];
}

const SuppliersSection: React.FC = () => {
  // Hardware Tablets Data
  const hardwareTabletsData: HardwareTabletDataItem[] = [
    // Placeholder data - to be filled with actual data
    { 
      id: 1, 
      supplier: 'Example Tablet Co.', 
      model: 'MedTab X1', 
      features: 'Rugged, medical-grade, 10.1\" display', 
      certifications: 'IP54, 60601-1', 
      priceRange: '$1,200-$1,800', 
      support: '3-year warranty' 
    },
  ];

  // Hardware VR Data
  const hardwareVRData: HardwareVRDataItem[] = [
    // Placeholder data - to be filled with actual data
    { 
      id: 1, 
      supplier: 'VR Health Inc.', 
      model: 'MedVR Pro', 
      resolution: '2160x2160 per eye', 
      tracking: '6DoF inside-out', 
      comfort: 'Adjustable headstrap, lightweight', 
      priceRange: '$2,500-$3,500' 
    },
  ];

  // Cloud Providers Data
  const cloudProvidersData: CloudProviderDataItem[] = [
    {
      provider: 'AWS (Amazon Web Services)',
      healthcareServices: 'AWS HealthLake, Comprehend Medical',
      aiMlTools: 'SageMaker, Rekognition, Transcribe Medical',
      startupProgram: 'AWS Activate',
      compliance: 'HIPAA, GDPR, HITRUST'
    },
    {
      provider: 'Microsoft Azure',
      healthcareServices: 'Azure Health Data Services, Microsoft Cloud for Healthcare',
      aiMlTools: 'Azure Machine Learning, Cognitive Services',
      startupProgram: 'Microsoft for Startups',
      compliance: 'HIPAA, GDPR, HITRUST, FedRAMP'
    },
    {
      provider: 'Google Cloud Platform (GCP)',
      healthcareServices: 'Google Cloud Healthcare API, Healthcare Data Engine',
      aiMlTools: 'Vertex AI, Healthcare Natural Language API',
      startupProgram: 'Google for Startups Cloud Program',
      compliance: 'HIPAA, GDPR, HITRUST'
    }
  ];

  // Cybersecurity Data
  const cybersecurityData: CybersecurityDataItem[] = [
    // Placeholder data - to be filled with actual data
    { 
      area: 'Data Encryption', 
      considerations: 'End-to-end encryption for data at rest and in transit', 
      potentialVendors: 'AWS KMS, Azure Key Vault, Google Cloud KMS' 
    },
  ];

  // Define table columns
  const hardwareTabletsColumns: TableColumn[] = [
    { header: 'Supplier', accessor: 'supplier' },
    { header: 'Model', accessor: 'model' },
    { header: 'Key Features', accessor: 'features' },
    { header: 'Certifications', accessor: 'certifications' },
    { header: 'Price Range', accessor: 'priceRange' },
    { header: 'Support', accessor: 'support' },
  ];

  const hardwareVRColumns: TableColumn[] = [
    { header: 'Supplier', accessor: 'supplier' },
    { header: 'Model', accessor: 'model' },
    { header: 'Resolution', accessor: 'resolution' },
    { header: 'Tracking', accessor: 'tracking' },
    { header: 'Comfort', accessor: 'comfort' },
    { header: 'Price Range', accessor: 'priceRange' },
  ];

  const cloudProvidersColumns: TableColumn[] = [
    { header: 'Provider', accessor: 'provider' },
    { header: 'Healthcare-Specific Services', accessor: 'healthcareServices' },
    { header: 'AI/ML Tools', accessor: 'aiMlTools' },
    { header: 'Startup Program', accessor: 'startupProgram' },
    { header: 'Compliance', accessor: 'compliance' },
  ];

  const cybersecurityColumns: TableColumn[] = [
    { header: 'Area', accessor: 'area' },
    { header: 'Key Considerations', accessor: 'considerations' },
    { header: 'Potential Vendors', accessor: 'potentialVendors' },
  ];

  return (
    <div className="space-y-8">
      {/* Strategic Imperative */}
      <Card 
        title="Supplier Ecosystem Strategic Imperative" 
        icon={<LightBulbIcon className="w-6 h-6" />}
      >
        <p className="text-gray-700">
          A robust and well-managed supplier ecosystem is fundamental to the success of our MedTech venture. 
          This section outlines the key suppliers and service providers that will support our hardware, software, 
          and operational needs, ensuring we can deliver high-quality, compliant, and innovative solutions to our customers.
        </p>
      </Card>

      {/* Hardware Section */}
      <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Hardware Suppliers</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Medical-Grade Tablets */}
        <Card 
          title="Medical-Grade Tablets" 
          icon={<BeakerIcon className="w-6 h-6" />}
        >
          <p className="text-gray-700 mb-4">
            Medical-grade tablets must meet stringent requirements for durability, disinfection, and regulatory compliance. 
            Key features include antimicrobial coatings, drop resistance, and medical device certification.
          </p>
          <TableComponent 
            columns={hardwareTabletsColumns} 
            data={hardwareTabletsData}
          />
        </Card>

        {/* VR Headsets */}
        <Card 
          title="VR Headsets for Healthcare" 
          icon={<BeakerIcon className="w-6 h-6" />}
        >
          <p className="text-gray-700 mb-4">
            Healthcare VR solutions require high-resolution displays, accurate tracking, and comfort for extended use. 
            Key considerations include hygiene, ease of cleaning, and compatibility with healthcare applications.
          </p>
          <TableComponent 
            columns={hardwareVRColumns} 
            data={hardwareVRData}
          />
        </Card>
      </div>

      <p className="text-center text-sm text-gray-500 mt-2">
        Note: The tables above show a preview of available options. For a complete list of suppliers and detailed specifications, 
        please refer to the full supplier directory in the appendix.
      </p>

      {/* Software and Platform Suppliers */}
      <Card 
        title="Software and Platform Suppliers" 
        icon={<BriefcaseIcon className="w-6 h-6" />}
        className="mt-12"
      >
        <p className="text-gray-700">
          Our software and platform partners provide the infrastructure, tools, and services necessary to develop, deploy, 
          and maintain our digital health solutions at scale.
        </p>
      </Card>

      {/* Cloud Service Providers */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Cloud Service Providers</h3>
        <div className="mb-8">
          <TableComponent 
            columns={cloudProvidersColumns} 
            data={cloudProvidersData} 
          />
        </div>
      </div>

      {/* Software Details */}
      <div className="grid gap-6 lg:grid-cols-2 mt-8">
        {/* AI/ML Development Tools */}
        <Card 
          title="AI/ML Development Tools & Databases" 
          icon={<BeakerIcon className="w-6 h-6" />}
        >
          <div className="text-gray-700">
            Leverage cloud-native AI/ML services and databases to accelerate development. Key tools include:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Managed Jupyter notebooks for collaborative development</li>
              <li>Pre-trained healthcare-specific AI models</li>
              <li>Vector databases for efficient similarity search</li>
              <li>Data labeling and annotation services</li>
            </ul>
          </div>
        </Card>

        {/* Cybersecurity */}
        <Card 
          title="Cybersecurity Software & Services" 
          icon={<ShieldCheckIcon className="w-6 h-6" />}
        >
          <div className="text-gray-700">
            Implement a layered security approach with:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Identity and Access Management (IAM) solutions</li>
              <li>Data encryption (at rest and in transit)</li>
              <li>Security information and event management (SIEM)</li>
              <li>Penetration testing and vulnerability scanning</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Cybersecurity Table */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Cybersecurity Solution Considerations</h3>
        <TableComponent 
          columns={cybersecurityColumns} 
          data={cybersecurityData}
        />
      </div>

      {/* Specialized Services */}
      <div className="grid gap-6 lg:grid-cols-2 mt-12">
        {/* Specialized Service Providers */}
        <Card 
          title="Specialized Service Providers" 
          icon={<BriefcaseIcon className="w-6 h-6" />}
        >
          <div className="text-gray-700">
            <p className="mb-3">
              Critical service providers that support various aspects of our operations:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Regulatory Consultants:</strong> Navigate complex healthcare regulations</li>
              <li><strong>Clinical Research Organizations (CROs):</strong> Manage clinical trials and studies</li>
              <li><strong>Data Annotation Services:</strong> High-quality labeled datasets for ML</li>
              <li><strong>Legal & Compliance:</strong> Healthcare and data privacy expertise</li>
              <li><strong>Marketing & Patient Engagement:</strong> Specialized healthcare marketing</li>
            </ul>
          </div>
        </Card>

        {/* Data Suppliers */}
        <Card 
          title="Data Suppliers (Potentially)" 
          icon={<BriefcaseIcon className="w-6 h-6" />}
        >
          <div className="text-gray-700">
            <p className="mb-3">
              Potential sources of healthcare data for training and validation:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><strong>Public Datasets:</strong> NIH, MIMIC, UK Biobank</li>
              <li><strong>Commercial Data Providers:</strong> Claims, EMR, imaging data</li>
              <li><strong>Academic Medical Centers:</strong> Collaborative research data</li>
            </ul>
            <p className="text-sm text-gray-600">
              Note: All data partnerships must ensure proper patient consent, de-identification, 
              and compliance with relevant data protection regulations.
            </p>
          </div>
        </Card>
      </div>

      {/* Supplier Relationship Management */}
      <Card 
        title="Supplier Relationship Management (SRM)" 
        icon={<BriefcaseIcon className="w-6 h-6" />}
        className="mt-12"
      >
        <div className="text-gray-700 space-y-4">
          <p>
            Effective supplier relationship management is crucial for ensuring the reliability, quality, 
            and cost-effectiveness of our supply chain. Key strategies include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Strategic Sourcing:</strong> Identify and evaluate potential suppliers based on quality, cost, and reliability</li>
            <li><strong>Performance Monitoring:</strong> Establish KPIs and regular performance reviews</li>
            <li><strong>Risk Management:</strong> Develop contingency plans for critical suppliers</li>
            <li><strong>Relationship Building:</strong> Foster long-term partnerships with key suppliers</li>
            <li><strong>Contract Management:</strong> Ensure clear terms and conditions in all supplier agreements</li>
          </ul>
          <p className="text-sm text-gray-600">
            As a startup, we will focus on building strong relationships with a select group of strategic 
            suppliers who can grow with us, while maintaining flexibility to adapt to changing needs.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SuppliersSection;
