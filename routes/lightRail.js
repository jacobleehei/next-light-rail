const lightRailInformation = require('../src/light-rail-information')
const lightRailInformationByStation = require('../src/light-rail-by-station')

module.exports = (req, res) => {
    const code = req.query.code
    if (code) {
        const station = lightRailInformationByStation[code]
        return station ?
            res.json(lightRailInformationByStation[code]) :
            res.status(400).json({ error: 'Not Found' })
    }

    return res.json(lightRailInformation)
}