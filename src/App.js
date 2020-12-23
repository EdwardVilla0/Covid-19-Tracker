import React from 'react';
import { Menu, Select, Card, FormControl, MenuItem } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app_header">
        <h1>Covid Tracker</h1>
        <FormControl className="app_dropdown">
          <Select
            variant="outlined"
            value="abs">
            <MenuItem value="worldwide">Worlwide</MenuItem>
            <MenuItem value="worldwide">Worlwide</MenuItem>
            <MenuItem value="worldwide">Worlwide</MenuItem>
            <MenuItem value="worldwide">Worlwide</MenuItem>
          </Select>
        </FormControl>

      </div>
    </div>
  );
}

export default App;
