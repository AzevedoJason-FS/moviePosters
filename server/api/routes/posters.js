const express = require("express");
const mongoose = require("mongoose");
const Poster = require("../models/posters");
const router = express.Router();

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

router.post("/upload", (req, res, next) => {
    const newpath = "../../uploads/";
    const file = req.files.file;
    const filename = file.name;
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

        const movedFile = file.mv(`${newpath}${filename}`, (err) => {
            if (err) {
              res.status(500).json({
                   message: "File upload failed", code: 200 
              });
            }
            res.status(200).json({ 
                   message: "File Uploaded", code: 200 
            });
        });

    const newPoster = new Poster({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        img: movedFile,
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