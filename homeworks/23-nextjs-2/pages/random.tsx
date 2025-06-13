import React from 'react'
import CountryDetail from '@/components/CountryDetail';

type Country = {
    name: {common: string}
    flags: {svg: string}
    capital: string[]
    region: string
    population: number
    languages?: Record<string, string>
    currencies?: Record<string, {name: string; symbol: string}>
    // borders?: string[] //List of codes of borders
}

type Props = {
    country: Country
}

export default function RandomCountry ({country}: Props) {
    console.log('country', country)

    return (
        <>
            <CountryDetail name={country.name.common} flags={country.flags.svg} capital={country.capital} region={country.region} population={country.population} languages={country.languages} currencies={country.currencies} />
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch ('https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,languages,currencies');

    const data = await res.json();

    const randomIndex = Math.floor(Math.random() * data.length);
    const RandomCountry = data[randomIndex];

    return {
        props: {
            country: RandomCountry
        }
    }
}