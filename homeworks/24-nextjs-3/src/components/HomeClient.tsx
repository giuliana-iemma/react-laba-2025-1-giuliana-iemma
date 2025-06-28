'use client';

import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';
import RegionsFilter from './RegionsFilter';
import Link from 'next/link';
import SearchBar from './SearchBar';
import Header from './Header';

//Get countries
type Country = {
  name: { common: string };
  flags: { svg: string };
  region: string;
};

type Props = {
  countries: Country[];
  regions: string[]; //Array with countries like the ones defined above
};

export default function HomeClient({ countries, regions }: Props) {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFavorite = (countryName: string) => {
    let updatedFavorites: string[];

    if (favorites.includes(countryName)) {
      updatedFavorites = favorites.filter((name) => name !== countryName);
    } else {
      updatedFavorites = [...favorites, countryName];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = countries;

        if (selectedRegion !== 'All') {
          const res = await fetch(`/api/region?region=${selectedRegion}`);
          data = await res.json();
        }

        const filtered = data.filter((country: Country) =>
          country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredCountries(filtered);
      } catch (err) {
        console.error('Error loading region: ', err);
        setFilteredCountries([]);
      }
    };

    fetchData();
  }, [selectedRegion, countries, searchQuery]);

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  return (
    <>
      <Header title="Explore the World," titleAccent=" One Country at a Time" />

      <section className="actions">
        <SearchBar searchQuery={searchQuery} onChange={setSearchQuery} />
        <Link className="actions__link" href="/favorites">
          See favorites
        </Link>

        <RegionsFilter regions={regions} onSelectRegion={setSelectedRegion} />
      </section>

      <section className="countries">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flags={country.flags.svg}
            region={country.region}
            isFavorite={favorites.includes(country.name.common)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </section>
    </>
  );
}
