import React, { useState, useEffect } from 'react';
import { Select, FormControl, MenuItem } from '@material-ui/core';
import InfoBox from './components/InfoBox/InfoBox.component';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

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

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);

  }

  return (
    <div className="app">
      <div className="app_header">
        <h1>Covid Tracker</h1>
        <FormControl className="app_dropdown">
          <Select
            variant="outlined"
            onChange={onCountryChange}
            value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}


          </Select>
        </FormControl>

      </div>
      <div className="app_stats">
        <InfoBox title="Coronavirus Cases" cases={300} total={100} />
        <InfoBox title="Coronavirus Cases" cases={300} total={100} />
        <InfoBox title="Coronavirus Cases" cases={300} total={100} />
      </div>
    </div>
  );
}

export default App;
