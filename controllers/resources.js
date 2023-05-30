const express = require('express');
const router = express.Router();
const Resources = require('../models/resources.js') 
const resourceData = require('../utilities/data.js')


router.get('/', (req, res)=>{
    Resources.find({}, (err, foundResources)=>{
        res.json(foundResources)
    })
});

router.get('/seed', async (req, res) => {
        await Resources.deleteMany({});
        await Resources.insertMany(resourceData);
  });

router.delete('/:id', (req, res)=>{
    Resources.findByIdAndRemove(req.params.id, (err, deletedResource)=>{
        res.json(deletedResource)
    })
});

router.put('/:id', (req, res)=>{
    Resources.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedResource)=>{
        res.json(updatedResource)
    })
});

router.post('/', (req, res)=>{
    Resources.create(req.body, (err, createdResource)=>{
        res.json(createdResource) 
    })
})

router.get('/:id', (req, res)=>{
    Resources.findById(req.params.id, (err, foundResource)=>{
        res.json(foundResource)
    })
})

module.exports = router