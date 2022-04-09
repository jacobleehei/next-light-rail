const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
const api = require('./routes/api')

app.use(cors())
app.get('/', api.main)
app.get('/api/lightRail/json', api.getLightRailJson)

app.listen(port, () => {
   console.log(`Next-Light-Rail App Listening on Port ${port}`)
})