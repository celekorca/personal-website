import React from 'react';

interface CardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, icon, children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow p-6 border border-gray-100 ${className}`}>
    <div className="flex items-center mb-4">
      {icon && <div className="mr-3">{icon}</div>}
      <h3 className="text-lg font-semibold text-sky-800">{title}</h3>
    </div>
    <div>{children}</div>
  </div>
);

export default Card;
