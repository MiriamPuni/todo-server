const express = require('express')
const app = express()

const db = require('./db')
db.connect()

const cors = require('cors')
app.use(cors())
app.use(express.json())

const taskRouter = require('./task/task.router')
app.use('/listTask', taskRouter)

app.listen(6555, ()=> console.log('🎉🥳'))