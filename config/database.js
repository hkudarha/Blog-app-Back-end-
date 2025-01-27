const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb =() =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(() =>console.log("DB connection Successful"))
    .catch((e) => {
        console.log("Issu in DB Connection");
        console.error(e.message);
        process.exit(1);
    })
}

module.exports = connectWithDb;