import React, { useEffect, useState } from 'react';
import CountryInfo from '../CountryInfo/CountryInfo';
import './Country.css';

const Country = () => {
   
const [countries, setCountries] = useState([]);
// console.log(countries);

useEffect(() => {

  fetch("https://restcountries.eu/rest/v2/all")
  .then(result => result.json())
  .then(jsonData => setCountries(jsonData));

}, [])

    return (
        <div className="container">
            {
                countries.map(country => <CountryInfo CountryAttribute={country}></CountryInfo>)
            }
        </div>
    );
};

export default Country;