const express = require("express");
const mongoose = require("mongoose");
const poster = require("../models/posters");
const router = express.Router();

//GET all collections
router.get("/", (req, res, next) => {
    poster.find().lean()
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

module.exports = router;