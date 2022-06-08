require('dotenv').config();
const express = require('express');
const cors = require("cors");
const pool = require('./db');

const app = express();
const PORT = 3001

//middle ware
app.use(cors());
//allows us to access the req.body
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is runnning on http://localhost:${PORT}`)
});