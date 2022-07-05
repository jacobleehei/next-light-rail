import { minDistancePoints } from './math';

export function getLightRailStation(setLightRailStation, geolocation) {
    fetch('http://localhost:3001/api/lightRail/json')
        .then(res => {
            return res.json()
        })
        .then(json => {
            const sortedLightRail = minDistancePoints({
                targetPoint: geolocation,
                comparePoints: json
            })
            setLightRailStation(sortedLightRail)
        })
}