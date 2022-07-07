const express = require("express");
const mongoose = require("mongoose");
const collection= require("../models/collections");
const router = express.Router();

//GET all collections
router.get("/", (req, res, next) => {
    collection.find().lean()
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

module.exports = router;