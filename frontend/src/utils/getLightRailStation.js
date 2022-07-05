import { minDistancePoints } from './math';

export function getLightRailStation(setLightRailStation, geolocation) {
    if (!setLightRailStation) {
        throw new Error("setLightRailStation must be defined");
    }
    if (!geolocation) {
        throw new Error("geolocation must be defined");
    }

    // Fetch the light rail data from backend
    fetch('http://localhost:3001/api/lightRail/json')
        .then(res => res.json())
        .then(json => {
            const sortedLightRail = minDistancePoints({
                targetPoint: geolocation,
                comparePoints: json
            })
            setLightRailStation(sortedLightRail)
        })
        .catch(err => console.error(err.message))
}