import React, { useState, useEffect } from 'react';
import './App.css';
import { getGeolocation } from './utils/getGeolocation';
import NextTrainTable from './components/nextTrainTable.jsx';
import { getLightRailStation } from './utils/getLightRailStation';

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
        <div className="App" >
            <NextTrainTable rows={lightRailStation} />
        </div>
    );
}

export default App;