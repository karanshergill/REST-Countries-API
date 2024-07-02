import React, { useEffect, useState } from 'react'

export const Details = () => {
  const countryName = new URLSearchParams(window.location.search).get('name');
  const [countryDetails, setCountryDetails] = useState(null);
  const [error, setError] = useState(null);

  /*
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((response) => response.json())
      .then(([data]) => {
        setCountryDetails({
        name: data.name.common,
        })
        console.log({ name: data.name.common })  })
      .catch((error) => console.log("Error: Fetching data from API failed!"))
  }, [countryName])
  */

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        const data = await response.json()
      }
      catch (error) {
        console.log("Error: Fetching data from API failed!")
      }
    }
  }, [countryName])


  return (
    <div>
      Country
    </div>
  )
}