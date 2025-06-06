import { IconType } from 'react-icons';

/**
 * Types and interfaces for the ProjectTab component
 */

export interface TeamMember {
  name: string;
  title: string;
  linkedinUrl: string;
  photoPlaceholder: string;
  strengths: string[];
}

export interface TargetAudience {
  id: string;
  title: string;
  icon: IconType;
  color: string;
  benefits: string[];
}

export interface RoadmapItem {
  period: string;
  title: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
  checkColor: string;
  items: string[];
}

export interface InfoCardProps {
  title: string;
  description: string;
  borderColor: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}

export interface MarketFocusItem {
  label: string;
  value: string;
}

export interface ComplianceItem {
  title: string;
  items: string[];
}
