const express = require('express')
require('./db/mongoose')
const userrouter = require('../src/routers/user')
const taskRouter = require('../src/routers/task')


const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userrouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('App is running on port '+ port)
})

// /Users/abdullahkhan/Documents/mongodb/data
