const express = require("express");
const mongoose = require("mongoose");
const Poster = require("../models/posters");
const router = express.Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const DIR = `${__dirname}/../../../server/uploads/`;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

//GET all collections
router.get("/", (req, res, next) => {
    Poster.find().lean()
    .select("name _id img price year size original_reprint rolled_folded inventory description slug collectionName")
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

router.get('/products/:posterId', (req,res,next) => {
    const posterId = req.params.posterId;
    Poster.findById(posterId)
    .select("name _id img price year size original_reprint rolled_folded inventory description collectionName")
    .populate("collectionName", "name")
    .exec()
    .then(poster => {
        if(!poster){
            console.log(poster);
            return res.status(404).json({
                message: 'no found'
            })
        }
        res.status(200).json({
            message: "Poster found",
            Poster: poster
        })
    })
    .catch(err => {
        res.status(500).json({
            error:{
                message: err.message
            }
        })
    })
});

router.post("/upload", upload.single('img'),(req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
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
    const newPoster = new Poster({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        img:  url + '/uploads/' + req.file.filename,
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
                    img: result.img,
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