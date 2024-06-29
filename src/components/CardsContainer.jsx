import React, { useState } from 'react';
import { Card } from './Card'
import countries from './data/countries_data';

export const CardsContainer = () => {
  const [query, setQuery] = useState('')
  const filteredCountries = countries.filter((country) =>  country.name.toLowerCase().includes('india'))
  console.log(filteredCountries);
  
  return (
    <>
      <input type="text" onChange={(e) => setQuery(e.target.value.toLowerCase())} />
    <div className='flex max-w-7xl mt-8 mb-6 mx-auto'>
      <div className='grid grid-cols-4 gap-16 w-full'>
        {countries.map((country) => (
          <Card
          key={country.alpha3Code}
          flag={country.flags.svg}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          />
        ))}
      </div>
    </div>
        </>
  )
}
