import React, { useState, useEffect } from 'react';
import './App.css';
import { getGeolocation } from './utils/geolocation';
import NextTrainTable from './components/nextTrainTable';
import { getLightRailStation } from './utils/api';

function App() {
  const [geolocation, setGeolocation] = useState({})
  const [lightRailStation, setLightRailStation] = useState([])

  useEffect(() => {
    getGeolocation(setGeolocation)
  }, [])

  useEffect(() => {
    getLightRailStation(setLightRailStation, geolocation)
  }, [geolocation])


  return (
    <div className="App">
      <NextTrainTable
        rows={lightRailStation}
      />
    </div>
  );
}

export default App;
