// app/country/[name]/page.tsx
import CountryDetail from '@/components/CountryDetail';
import Header from '@/components/Header';
import { notFound } from 'next/navigation';

type Country = {
  name: { common: string };
  flags: { svg: string };
  capital: string[];
  region: string;
  population: number;
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol: string }>;
};

export default async function CountryPage({ params }: { params: { name: string } }) {
  const decodedName = decodeURIComponent(params.name);

  const res = await fetch(`https://restcountries.com/v3.1/name/${decodedName}?fullText=true`);

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();

  const country: Country = data[0];

  return (
    <>
      <Header title="Let's visit" titleAccent={country.name.common} />

      <CountryDetail
        name={country.name.common}
        flags={country.flags.svg}
        capital={country.capital}
        region={country.region}
        population={country.population}
        languages={country.languages}
        currencies={country.currencies}
      />
    </>
  );
}
