const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const scheduleRouter = require('./router/schedule-router')

const app = express()
const appPort = 8080

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.get('/', function(req, res){
    res.send("Hello World!!")
})

app.use('/api', scheduleRouter)

app.listen(appPort, () => console.log(`Server started running on port ${appPort}`))
