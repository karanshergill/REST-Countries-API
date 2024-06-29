import React from 'react'
import styled from 'styled-components'
import countries from './data/countries_data';

const SearchBar = styled.div.attrs({
    className: 'flex items-center gap-2 p-2 shadow-md rounded-md w-96'
})``;

const SearchIcon = styled.i.attrs({
    className: 'bi bi-search ml-2 text-sm text-gray-500'
})``;

const SearchInput = styled.input.attrs({
    className: 'bg-transparent outline-none w-full ml-2 text-sm'
})``;

export const Search = () => {
    const filteredCountries = countries.filter((country) =>  country.name.toLocaleLowerCase().includes('india'))
  return (
      <SearchBar>
          <SearchIcon></SearchIcon>
          <SearchInput type="text" placeholder="Search for a country..." />
    </SearchBar>
  )
}
