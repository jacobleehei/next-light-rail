export function getLightRailStation(setLightRailStation) {
    if (!setLightRailStation) {
        throw new Error("setLightRailStation must be defined");
    }
    // Fetch the light rail data from backend
    fetch('http://localhost:3001/api/lightRail/json')
        .then(res => res.json())
        .then(json => setLightRailStation(json))
        .catch(err => console.error(err.message))
}