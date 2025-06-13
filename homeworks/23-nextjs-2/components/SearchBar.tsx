import React from 'react'

type Props = {
    searchQuery?: string
    onChange: (value:string) => void
}

const SearchBar = ({searchQuery, onChange} : Props) => {
  return (
    <div>

      <input
        type="text"
        placeholder="Search by country name..."
        value={searchQuery}
        onChange={(e) => onChange(e.target.value)}
        />
    </div>
  )
}

export default SearchBar
