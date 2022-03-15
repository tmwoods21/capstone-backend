require('dotenv').config()
const express = require('express')
const app = express()
const resourcesController = require('./controllers/resources')
const cors = require('cors')
require('./db')

//APP CONFIGS
const PORT = process.env.PORT || 8000
const acceptList = ["http://localhost:3000", "https://wonderful-kepler-6805e4.netlify.app"]
const options = {
    origin: function(origin, callback){
        // if the origin argument is in the acceprlist -> continue
        if(acceptList.lastIndexOf(origin) !== -1 || !origin){
            callback(null,  true);
        } else {
            callback (new Error ("Not allowed by CORS"))
        }
        // else - throw an error
    }
}

//MIDDLEWARE
app.use(cors(options));
app.use(express.json())
app.use(express.urlencoded({extended: false}))
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