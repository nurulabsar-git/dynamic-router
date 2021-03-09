import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const {InsteadOfName} = useParams();
    const [details, setDetails] = useState([]);
    // console.log(details);
    useEffect(() => {
      fetch(`https://restcountries.eu/rest/v2/name/${InsteadOfName}`)
      .then(result => result.json())
      .then(jsonData => setDetails(jsonData));

    }, [])
    return (
        <div style={{textAlign: 'center'}}>
            {/* <h1>This is {InsteadOfName}</h1>
            <h4>Country: {details.name}</h4>
            <h5>Capital: {details.capital}</h5> */}

            {
                details.map(pd => <p>{pd.name} <br/> {pd.capital}</p>)
            }
        </div>
    );
};

export default CountryDetails;