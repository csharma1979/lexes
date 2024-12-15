import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  stat: string;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ icon: Icon, stat, label }) => (
  <div className="text-center">
    <div className="flex justify-center">
      <Icon className="h-10 w-10 text-[#056daa]" />
    </div>
    <p className="mt-4 text-3xl font-extrabold text-gray-900">{stat}</p>
    <p className="mt-1 text-base text-gray-500">{label}</p>
  </div>
);