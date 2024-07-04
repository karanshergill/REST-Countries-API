import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const Details = () => {
  // const countryName = new URLSearchParams(window.location.search).get('name');

  const params = useParams();
  const countryName = params.countryName;

  const [countryDetails, setCountryDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
        if (!response.ok) {
          throw new Error('Fetching data from API failed!');
        }
        const data = await response.json();
        if (data.length > 0) {
          const country = data[0];
          console.log((country));

          setCountryDetails({
            flag: country.flags.svg,
            name: country.name.common,
            nativeName: country?.name?.nativeName ? Object.values(country.name.nativeName).map(native => native.common).join(', ') : 'N/A',
            population: country.population,
            region: country?.region,
            subregion: country?.subregion,
            capital: country?.capital[0],
            topLevelDomain: country?.tld[0],
            currencies: country?.currencies ? Object.values(country.currencies).map(currency => currency.name).join(', ') : 'N/A',
            languages: country?.languages ? Object.values(country.languages).map(language => language).join(', ') : 'N/A',
            borders: country?.borders ? Object.values(country.borders).map(border => border).join(', ') : 'N/A'
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
  }, [params])

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
  };

  return (
    <section className='flex flex-col justify-start max-w-7xl mx-auto'>
      <div>
        <button className='mt-16 mb-16 shadow-lg px-8 py-2 font rounded-md' onClick={() => window.history.back()}><i className="bi bi-arrow-left"></i> Back</button>
      </div>

      <div className='grid grid-cols-3'>
        <div className='flex h-auto'>
          <img className="" src={countryDetails?.flag} alt={countryDetails?.name} />
        </div>

        <div className='flex flex-col mx-auto'>
          <div>
            <h2>Name: <span>{countryDetails?.name}</span></h2>
          </div>

          <div>
            <p>Native Name: <span>{countryDetails?.nativeName}</span></p>
            <p>Population: <span>{countryDetails?.population.toLocaleString('en-IN')}</span></p>
            <p>Region: <span>{countryDetails?.region}</span></p>
            <p>Sub Region: <span>{countryDetails?.subregion}</span></p>
            <p>Capital: <span>{countryDetails?.capital}</span></p>
          </div>
        </div>

        <div>
          <p>Top Level Domain: <span>{countryDetails?.topLevelDomain}</span></p>
          <p>Currencies: <span>{countryDetails?.currencies}</span></p>
          <p>Languages: <span>{countryDetails?.languages}</span></p>
          <p>Border Countries: <span>{countryDetails?.borders}</span></p>
        </div>
      </div>


    </section>

  )
}