import React from 'react'

type Props = {
    name: string
    flags: string
    capital: string[]
    region: string
    population: number
    languages?: Record<string, string>
    currencies?: Record<string, {name: string; symbol: string}>
    // borders?: string[] //List of codes of borders
}

const CountryDetail = ({name, flags, region, population, languages, currencies, capital}: Props) => {
  return (
    <section>
     <h1>Let's visit {name}</h1>
          <img src={flags} alt={`Flag of ${name}`} />
          <ul>
            <li>Capital: {capital[0]}</li>
            <li>Region: {region}</li>
            <li>Population: {population.toLocaleString()}</li>

            {languages && (
                <li>Languages: 
                {Object.values(languages).join(', ')}
                </li>
            )}
            
            {currencies && (
                <li>Currencies: 
                {Object.values(currencies).map((currency) => `${currency.name} (${currency.symbol})`)}
                </li>
            )}
      
                {/* Borders */}
          </ul>
    </section>
  )
}

export default CountryDetail
