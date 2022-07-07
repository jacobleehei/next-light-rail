import React, { useState, useEffect } from 'react';
import './App.css';
import { getGeolocation } from './utils/getGeolocation.js';
import { getLightRailStation } from './utils/getLightRailStation.js';
import BottomAppMenu from './components/BottomAppMenu';
import PageByLocations from './pages/ByLocations';
const pages = {
    home: 0,
    byLocations: 1,
    allRoutes: 2,
    settings: 3,
}
function App() {
    const [geolocation, setGeolocation] = useState(null)
    const [lightRailStation, setLightRailStation] = useState(null)
    const [page, setPage] = useState(pages.home)
    useEffect(() => getGeolocation(setGeolocation), [])
    useEffect(() => getLightRailStation(setLightRailStation, geolocation), [geolocation])

    return (
        <div className="App" >
            {page === 1 && <PageByLocations />}
            <BottomAppMenu setPage={setPage} />
        </div>
    );
}

export default App;