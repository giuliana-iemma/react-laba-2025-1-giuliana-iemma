// app/random/page.tsx
import CountryDetail from '@/components/CountryDetail';

type Country = {
  name: { common: string };
  flags: { svg: string };
  capital: string[];
  region: string;
  population: number;
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol: string }>;
};

export default async function RandomCountryPage() {
  const res = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,languages,currencies',
    {
      cache: 'no-store', // Ensures we always get fresh data
    }
  );

  if (!res.ok) {
    throw new Error('Error fetching countries');
  }

  const data: Country[] = await res.json();

  const randomIndex = Math.floor(Math.random() * data.length);
  const country = data[randomIndex];

  return (
    <CountryDetail
      name={country.name.common}
      flags={country.flags.svg}
      capital={country.capital}
      region={country.region}
      population={country.population}
      languages={country.languages}
      currencies={country.currencies}
    />
  );
}
