const express = require('express')
const app = express()
require("dotenv").config();

app.listen(process.env.port, () => console.log(`starting server on port ${process.env.port}`))