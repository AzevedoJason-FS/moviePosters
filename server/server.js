const express = require('express')
const app = require('./app/app');
require("dotenv").config();

app.listen(process.env.port, () => console.log(`starting server on port ${process.env.port}`))