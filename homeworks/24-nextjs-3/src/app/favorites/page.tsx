'use client';
import React, { useEffect, useState } from 'react';
import CountryCard from '@/components/CountryCard';

type Country = {
  name: { common: string };
  flags: { svg: string };
  region: string;
};

export default function FavoritesPage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  //Load stored favorites
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  //show favorite countries
  useEffect(() => {
    const fetchFavorites = async () => {
      const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,region');

      const data: Country[] = await res.json();

      const filtered = data.filter((country) => favorites.includes(country.name.common));

      setCountries(filtered);
    };

    if (favorites.length > 0) {
      fetchFavorites();
    }
  }, [favorites]);

  const toggleFavorite = (countryName: string) => {
    let updatedFavorites: string[];

    if (favorites.includes(countryName)) {
      //Remove
      updatedFavorites = favorites.filter((name) => name != countryName);
    } else {
      //Add
      updatedFavorites = [...favorites, countryName];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <h1>Favorite Countries</h1>

      {countries.length === 0 ? (
        <p>You haven`t marked any countries as favorite yet.</p>
      ) : (
        <section className="countries">
          {countries.map((country) => (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flags={country.flags.svg}
              region={country.region}
              isFavorite={true}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </section>
      )}
    </>
  );
}
