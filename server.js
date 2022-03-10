const express = require('express')
const app = express()
const resourcesController = require('./controllers/resources')
require('./db')

//APP CONFIGS
const PORT = 3000

//MIDDLEWARE
app.use(express.json())
app.use('/resources', resourcesController )

//ROUTING


app.get('/', (req,res) =>{
    res.status(200).json({
        body: "capstone backend app confirmed"
    })
})

app.listen(PORT, ()=> {
    console.log(`confirm working on port ${PORT}...`)
})