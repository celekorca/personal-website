import React, { ReactElement } from 'react';

interface ProcessStepProps {
  icon: ReactElement<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

export default function ProcessStep({ icon, title, description, color }: ProcessStepProps) {
  const iconWithClass = React.cloneElement(icon, {
    className: `${color} text-6xl` // Increased from text-4xl to text-6xl
  });

  return (
    <div className="flex flex-col items-center text-center px-6">
      <div className="w-24 h-24 flex items-center justify-center mb-4">
        {iconWithClass}
      </div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
}
