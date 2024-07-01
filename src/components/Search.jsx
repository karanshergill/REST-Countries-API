import React from 'react'
import styled from 'styled-components'

const SearchBar = styled.div.attrs({
    className: 'flex items-center gap-2 p-2 shadow-md rounded-md w-96 hover:scale-105 transition-transform duration-200 cursor-pointer hover:shadow-lg'
})``;

const SearchIcon = styled.i.attrs({
    className: 'bi bi-search ml-2 text-sm text-gray-500'
})``;

const SearchInput = styled.input.attrs({
    className: 'bg-transparent outline-none w-full ml-2 text-sm'
})``;

export const Search = ({ setUserQuery }) => {
  return (
      <SearchBar>
          <SearchIcon></SearchIcon>
          <SearchInput type="text" placeholder="Search for a country..." onChange={(event) => setUserQuery(event.target.value.toLowerCase())}/>
    </SearchBar>
  )
}
