const express = require('express');
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//Connect to DB  
const connectWithDB = require("./config/database");
connectWithDB();

app.listen(PORT, () => {
    console.log(`app is running at port no ${PORT}`);
})

app.get("/", (req, res) => {
    res.send('<h1>This is Home Page</h1>');
    console.log('This is Home Page')
})
