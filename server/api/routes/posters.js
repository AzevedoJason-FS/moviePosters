const express = require("express");
const mongoose = require("mongoose");
const Poster = require("../models/posters");
const router = express.Router();
const util = require('util')
const path = require('path')

//GET all collections
router.get("/", (req, res, next) => {
    Poster.find().lean()
    .select("name _id")
    .populate("collectionName", "name")
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: "Posters",
            Posters: {
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

    Poster.find({
        name: req.body.name
    })
    .select("name _id")
    .populate("collectionName", "name")
    .exec()
    .then(result => {
        console.log(result);
        if(result.length > 0){
            return res.status(406).json({
                message: "Poster name has already been created"
            })
        }

        // let sampleFile;
        // let uploadPath;

        // // Check to see if there are any files to upload
        // // if (!req.files || Object.keys(req.files).length === 0) {
        // //     return res.status(400).send('No files were uploaded.');
        // // }

        //     sampleFile = req.files.sampleFile;
        //     uploadPath = '../../movie-poster-app/public/images/' + sampleFile.name;
            
        // // Get the extension from the incoming file (ie: .png,.jpg,.gif)
        // const extension = path.extname(req.files.image.name)

        // // Render the final file path based off the imageId and file extension
        // uploadPath = util.format(uploadPath, req.imageId, extension)
    
        // const fileUpload = sampleFile.mv(uploadPath);
    
    const newPoster = new Poster({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        img: req.body.img,
        size: req.body.size,
        format: req.body.format,
        rolled_folded: req.body.rolled_folded,
        year: req.body.year,
        original_reprint: req.body.original_reprint,
        collectionName: req.body.collectionName,
        price: req.body.price,
        inventory: req.body.inventory,
        slug: req.body.slug,
        description: req.body.description
    });
    
    //Write to Database
    newPoster.save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: "Poster Saved",
                Poster: {
                    id: result._id,
                    name: result.name,
                    slug: result.slug,
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