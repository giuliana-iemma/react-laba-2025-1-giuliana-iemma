import React from 'react';
import Link from 'next/link';

type Props = {
  searchQuery: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ searchQuery, onChange }: Props) => {
  const country = searchQuery.toLowerCase();

  return (
    <section className="searchbar">
      <img className="searchbar__icon" src="/icons/world.svg" alt="Search" />

      <input
        className="searchbar__field"
        type="text"
        placeholder="Search by country name..."
        value={searchQuery}
        onChange={(e) => onChange(e.target.value)}
      />

      {/* If there is something written in the input. show the button */}
      {searchQuery && (
        <Link className="searchbar__button" href={`/countries/${encodeURIComponent(country)}`}>
          {/* <button className="searchbar__button">Search</button> */} Search
        </Link>
      )}
    </section>
  );
};

export default SearchBar;
