import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

// create countries component and load the data
const Countries = () => {
    const [countries, setCountries] = useState([]);
    console.log(countries);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);
    return (
        <div>
            <h2>Available Rest Countries: {countries.length}</h2>
            {
                countries.map(country => <Country
                    country={country}
                ></Country>)
            }
        </div>
    );
};

export default Countries;