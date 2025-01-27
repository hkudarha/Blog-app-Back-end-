// import mongoose
const mongoose = require("mongoose");

// rout handler
const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    body:{
        type: String,
        required: true,
    },
    likes:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Like", //refrence to the Like model
        },
    comments:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment", //refrence to the Comment model
        },
   
})

// export
module.exports = mongoose.model("Post", postSchema);