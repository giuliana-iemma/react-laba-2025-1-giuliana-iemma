import React from 'react';
import CountryDetail from '@/components/CountryDetail';
import Header from '@/components/Header';
import { GetStaticPropsContext } from 'next';

type Country = {
  name: { common: string };
  flags: { svg: string };
  capital: string[];
  region: string;
  population: number;
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol: string }>;
  // borders?: string[] //List of codes of borders
};

type Props = {
  country: Country;
};

export default function Country({ country }: Props) {
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

export async function getStaticPaths() {
  const res = await fetch('https://restcountries.com/v3.1/all?fields=name');

  const data = await res.json();

  const paths = data.map((country: Country) => ({
    params: { name: encodeURIComponent(country.name.common.toLowerCase()) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const name = decodeURIComponent(context.params?.name as string);

  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);

  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const data = await res.json();

  if (!data || data.length === 0) {
    return {
      notFound: true,
    };
  }

  console.log(data);

  return {
    props: { country: data[0] },
  };
}
