import React from 'react';

const Country = (props) => {
    const { name, area, region, flags, population } = props.country;
    return (
        <div>
            <h3>Country Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>         
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;