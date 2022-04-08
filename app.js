const express = require('express')
const app = express()
const port = 3001
const lightRailInformation = require('./src/light-rail-information')
const lightRailInformationByStation = require('./src/light-rail-by-station')
app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.get('/api/lightrail/json', (req, res) => {
   const code = req.query.code
   if (code) {
      const station = lightRailInformationByStation[code]
      return station ?
         res.json(lightRailInformationByStation[code])
         :
         res.status(400).json({ error: 'Not Found' })
   }

   return res.json(lightRailInformation)
})

app.listen(port, () => {
   console.log(`Next-Light-Rail App Listening on Port ${port}`)
})