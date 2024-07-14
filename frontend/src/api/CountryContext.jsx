import React, { createContext, useEffect, useState } from 'react';

export const CountryContext = createContext();

export const CountryProvider = (props) => {
    const storedCountry = localStorage.getItem('selectedCountry');
    const [country, setCountry] = useState(storedCountry || 'us');

    useEffect(() => {
        localStorage.setItem('selectedCountry', country);
    }, [country]);


    console.log("HELLOOO COUNT",country);
    return (
        <CountryContext.Provider value={{ country, setCountry }}>
            {props.children}
        </CountryContext.Provider>
    );
};
