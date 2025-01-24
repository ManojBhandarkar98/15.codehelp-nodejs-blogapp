const mongoose = require('mongoose');
require("dotenv").config();

const connectWithDB = async () => {
//process object feed in env file we install dotenv library
//get env config in db file use process object
    await mongoose.connect(process.env.DATABASE_URL, {  
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log('DB connect'))
        .catch((error) => {
            console.log("Issue in connection");
            console.error(error.message);
            process.exit(1);
        })
}

module.exports = connectWithDB;