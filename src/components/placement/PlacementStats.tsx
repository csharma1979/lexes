import React from 'react';
import { Building2, Users, GraduationCap, Briefcase } from 'lucide-react';
import { StatCard } from './StatCard';

const stats = [
  {
    icon: Building2,
    stat: '500+',
    label: 'Partner Companies',
  },
  {
    icon: Users,
    stat: '2000+',
    label: 'Successful Placements',
  },
  {
    icon: GraduationCap,
    stat: '95%',
    label: 'Placement Rate',
  },
  {
    icon: Briefcase,
    stat: '40 LPA',
    label: 'Highest Package',
  },
];

const PlacementStats: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((item, index) => (
          <StatCard key={index} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default PlacementStats;