import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

// create countries component and load the data
const Countries = () => {
    const [countries, setCountries] = useState([]);
    // console.log(countries);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);
    return (
        <div>
            <h2>Available Rest Countries: {countries.length}</h2>
            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;