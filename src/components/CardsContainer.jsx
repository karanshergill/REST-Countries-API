import React, { useEffect, useState } from 'react';
import { Card } from './Card'
// import countries from './data/countries_data';

export const CardsContainer = ({ userQuery }) => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
      .then((data) => { setCountries(data) })
    .catch((error) => console.log("Error: Fetching data from API failed!"))

  },[])


  return (
    <div className='flex max-w-7xl mt-8 mb-6 mx-auto'> 
      <div className='grid grid-cols-4 gap-16 w-full'>
        {countries.filter((country) => country.name.common.toLowerCase().includes(userQuery.toLowerCase())).map((country) => (
          <Card
            key={country.cca3}
            flag={country.flags.svg}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </div>
    </div>
  )
}
