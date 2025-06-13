import { React, useState, useEffect } from 'react'
import CountryCard from '@/components/CountryCard'
import RegionsFilter from '@/components/RegionsFilter'
import Link from 'next/link'
import SearchBar from '@/components/SearchBar'
//Get countries
type Country ={
  name: {common: string}
  flags: { svg: string}
  region: string
} 

type Props = {
  countries: Country[]
  regions: string[] //Array with countries like the ones defined above
}

export default function HomePage ({countries, regions}: Props) {
  // console.log('countrries', countries);

  const [selectedRegion, setSelectedRegion] = useState('All');
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [favorites, setFavorites] = useState<string[]>([]); 
    
  //Add favorites
  const toggleFavorite = (countryName: string) => {
    let updatedFavorites: string[]

    if (favorites.includes(countryName)){
      //Remove
      updatedFavorites = favorites.filter((name) => name != countryName);
    } else {
      //Add
      updatedFavorites = [...favorites, countryName]
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

  //Filter by region
  useEffect(() => {
    const fetchData = async () => {
        if (selectedRegion === 'All'){
        setFilteredCountries(countries);
        return;
      }
     
      try {
          const res = await fetch(`/api/region?region=${selectedRegion}`)
          const data = await res.json();
          setFilteredCountries(data);
      } catch (err) {
        console.error('Error loading region: ', err );
        setFilteredCountries([])
      }
    }

    fetchData();

  },[selectedRegion, countries]);

  //Load favorites
  useEffect(() => {
    const favorites = localStorage.getItem('favorites');
    if(favorites) {
      setFavorites(JSON.parse(favorites))
    }
  }, [])

  return (
        <>
          <h1>Country Explorer</h1>

          <RegionsFilter regions={regions} selectedRegion={selectedRegion} onSelectRegion={setSelectedRegion}/>

            <section className='countries'>
                {filteredCountries.map((country) => (
                <>
                <CountryCard name={country.name.common} flags={country.flags.svg} region={country.region} isFavorite={favorites.includes(country.name.common)}
                onToggleFavorite={toggleFavorite}/>
                </>
                          
              ))}
            </section>
        </>
    
       
  )
}

export async function getStaticProps(){
  const res = await fetch ("https://restcountries.com/v3.1/all?fields=name,flags,region");
  const data = await res.json();


  const regions = [...new Set(data.map((item) => item.region))].filter(Boolean);

  return{
    props: {
      countries: data,
      regions
    }
  }
}

