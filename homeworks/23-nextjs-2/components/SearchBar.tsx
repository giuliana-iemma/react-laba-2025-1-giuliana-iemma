import React from 'react'
import Link from 'next/link'

type Props = {
    searchQuery: string
    onChange: (value:string) => void
}

const SearchBar = ({searchQuery, onChange} : Props) => {
  return (
    <section className='searchbar'>

      <div className='searchbar__field'>
        <img className='searchbar__icon' src="/icons/world.svg" alt="Search" />

        <input
        className='searchbar__input'
        type="text"
        placeholder="Search by country name..."
        value={searchQuery}
        onChange={(e) => onChange(e.target.value)}
        />

          
          {/* If there is something written in the input. show the button */}
            {searchQuery && (
              <Link className='searchbar__button' href={`/countries/${searchQuery}`}>
                {/* <button className="searchbar__button">Search</button> */} Search
              </Link>
            )}
       
      </div>
      

          
    </section>
  )
}

export default SearchBar
