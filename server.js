const express = require('express')
const router = require('./routes')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use('/api/v1',router)

app.listen(3000, () => { console.log(`app is running on 3000`)})