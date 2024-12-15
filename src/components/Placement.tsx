import React from 'react';
import PageBanner from './PageBanner';
import PlacementHero from './placement/PlacementHero';
import PlacementStats from './placement/PlacementStats';
import PlacementCTA from './placement/PlacementCTA';
import PartnerCompanies from './placement/PartnerCompanies';

// Component for use in routes
const Placement: React.FC = () => {
  return (
    <>
      <PageBanner
        title="Placement Services"
        subtitle="Your gateway to exciting career opportunities"
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1920&h=600"
      />
      <PlacementHero />
      <PlacementStats />
      <PlacementCTA />
      <PartnerCompanies />
    </>
  );
};

// Component for use in home page (without banner)
export const PlacementContent: React.FC = () => {
  return (
    <>
      <PlacementStats />
      <PlacementCTA />
      <PartnerCompanies />
    </>
  );
};

export default Placement;