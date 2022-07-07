const express = require("express");
const mongoose = require("mongoose");
const Collection= require("../models/collections");
const router = express.Router();

//GET all collections
router.get("/", (req, res, next) => {
    Collection.find().lean()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: "Collections",
            Collections: {
                name: result,
            metadata:{
                method: req.method,
                host: req.hostname
            }
            }
        })
    })
    .catch(err => {
        console.error(err.message);
        res.status(500).json({
            error: {
                message: err.message
            }
        })
    });
});

router.post("/", (req, res, next) => {

    Collection.find({
        name: req.body.name
    })
    .exec()
    .then(result => {
        console.log(result);
        if(result.length > 0){
            return res.status(406).json({
                message: "Collection name has already been created"
            })
        }
    
    const newCollection = new Collection({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        slug: req.body.slug,
        description: req.body.description
    });
    
    //Write to Database
    newCollection.save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: "Collection Saved",
                Collection: {
                    id: result._id,
                    name: result.name,
                    slug: result.slug,
                    description: result.description,
                metadata:{
                    method: req.method,
                    host: req.hostname
                }
                }
            })
        })
        .catch(err => {
            console.error(err.message);
            res.status(500).json({
                error: {
                    message: err.message
                }
            })
        });

    })
    .catch(err => {
        console.log(err.message);
        res.status(500).json({
            error:{
                message: "Unable to save record with title: "+ req.body.name
            }
        })
    })
});

module.exports = router;