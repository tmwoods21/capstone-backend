const mongoose = require('mongoose')

const resourceSchema = mongoose.Schema({
    name: {type:String},
    location: {type:String},
    description: {type:String, required: true},
    website: {type:String, required: true}
}, {timestamps: true})

const Resource = mongoose.model("Resource", resourceSchema)

module.exports = Resource