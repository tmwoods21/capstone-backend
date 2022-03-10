const express = require('express')

const router = express.Router()

const Resource = require('../models/Resource')

router.get('/:id', async (req, res)=>{
    try {
        console.log(req.body)
        const oneResource = await Resource.findById(req.params.id)
        res.json(oneResource)
    } catch(err) {
        console.log(err)
        res.send('error occured')
    }
})

router.get('/', async (req,res)=>{
    try {
        const allResources = await Resource.find()
        console.log(allResources)
        res.json(allResources)
    }catch(err){
        res.send('error occured')
    }
})

//resources create
router.post('/', async (req, res)=>{
    try {
        console.log(req.body)
        const newResource = await Resource.create(req.body)
        res.json(newResource)
    } catch(err) {
        console.log(err)
        res.send('error occured')
    }
})

//resources delete
router.delete('/:id', async (req, res)=>{
    try{
        const deleteResource = await Resource.findByIdAndDelete({_id: req.params.id})
        res.json(deleteResource)
    }catch(err){
        res.send('error occured')
    }
    
})

router.put('/', async (req, res)=>{
    try {
        console.log(req.body)
        const updateResource = await Resource.findByIdAndUpdate(req.params.id, req.body)
        res.json(updateResource)
    } catch(err) {
        console.log(err)
        res.send('error occured')
    }
})



module.exports = router