import React, { useState, useEffect } from 'react';
import { Select, FormControl, MenuItem } from '@material-ui/core';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country,
              value: country.countryInfo.iso2
            }));

          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  return (
    <div className="app">
      <div className="app_header">
        <h1>Covid Tracker</h1>
        <FormControl className="app_dropdown">
          <Select
            variant="outlined"
            value="abs">
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}


          </Select>
        </FormControl>

      </div>
    </div>
  );
}

export default App;
