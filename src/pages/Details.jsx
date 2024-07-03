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
        if (!response.ok) {
          throw new Error('Fetching data from API failed!');
        }
        const data = await response.json();
        if (data.length > 0) {
          const country = data[0];
          console.log((country));

          setCountryDetails({
            name: country.name.common,
            nativeName: Object.values(country.name.nativeName).map(native => native.common).join(', '),
            population: country.population,
            region: country?.region,
            subregion: country?.subregion,
            capital: country?.capital,
            topLevelDomain: country?.tld,
            currencies: Object.values(country.currencies).map(currency => currency.name).join(', '),
            languages: Object.values(country.languages).map(language => language).join(', '),
            borders: Object.values(country.borders).map(border => border).join(', ')
          });
        }
        else {
          throw new Error('Data not found!');
        }
      }
      catch (error) {
        setError(error.message);
        console.log("Error: Fetching data from API failed!")
      }
    };
    fetchCountryDetails();
  }, [countryName])

  // conditional rendering

  if (countryDetails === null && !error) {
    return (
      <div>Loading...</div>
    )
  };

  if (error) {
    return (
      <div>{error}</div>
    )
  }

  return (
    <div>
      Name: {countryDetails?.name}
      Native Name: {countryDetails?.nativeName}
      Population: {countryDetails?.population.toLocaleString('en-IN')}
      Region: {countryDetails?.region}
      Sub Region: {countryDetails?.subregion}
      Capital: {countryDetails?.capital}
      Top Level Domain: {countryDetails?.topLevelDomain}
      Currencies: {countryDetails?.currencies}
      Languages: {countryDetails?.languages}
      Border Countries: {countryDetails?.borders}
    </div>
  )
}