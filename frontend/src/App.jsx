import React, { useState, useEffect } from 'react';
import './App.css';
import { getGeolocation } from './utils/getGeolocation.js';
import NextTrainTable from './components/NextTrainTable.jsx';
import { getLightRailStation } from './utils/getLightRailStation.js';
import BottomAppMenu from './components/BottomAppMenu';

function App() {
    const [geolocation, setGeolocation] = useState({})
    const [lightRailStation, setLightRailStation] = useState([])

    useEffect(() => getGeolocation(setGeolocation), [])
    useEffect(() => getLightRailStation(setLightRailStation, geolocation), [geolocation])


    return (
        <div className="App" >
            <BottomAppMenu />
        </div>
    );
}

export default App;