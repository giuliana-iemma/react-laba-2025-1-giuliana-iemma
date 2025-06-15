import React from 'react';

type Props = {
  regions: string[];
  selectedRegion: string;
  onSelectRegion: (region: string) => void;
};

export default function RegionsFilter({ regions, selectedRegion, onSelectRegion }: Props) {
  return (
    <section className="regions-nav">
      <button className="regions-nav__button" onClick={() => onSelectRegion('All')}>
        All
      </button>

      {regions.map((region) => (
        <button className="regions-nav__button" key={region} onClick={() => onSelectRegion(region)}>
          {region}
        </button>
      ))}
    </section>
  );
}
