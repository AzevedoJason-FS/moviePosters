const express = require("express");
const morgan = require("morgan");
require('dotenv').config()
const app = express();
const mongoose = require("mongoose");
const collectionsRoutes = require("../api/routes/collections");
const postersRoutes = require("../api/routes/posters");


//Middleware for logging
app.use(morgan("dev"));

//Parsing middleware
app.use(express.urlencoded({
    extended: true
}));

//Middleware request all JSON
app.use(express.json());

app.get("/", (req, res, next) => {
res.status(201).json({
    message: "Service Up",
    method: req.method
})
});

app.use("/collections", collectionsRoutes);
app.use("/posters", postersRoutes)

//middleware to handle CORS Policy
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods","POST, PUT, GET, PATCH, DELETE");
    };
    next();
});

//Middleware modules for Error Handling
app.use((req, res, next) => {
    const error = new Error("NOT FOUND");
    error.status = 404;
    next(error);
});

//Middleware modules to send Error neatly
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message, 
            status: error.status,
            method: req.method
        }
    });
});

// Connect to MongoDB
mongoose.connect(process.env.mongoDBURL, (err) => {
    if(err){
        console.error("Error: ", err.message);
    }
    else{
        console.log("MongoDB Connection Successful")
    }
});


module.exports = app;