const Post = require("../models/postModel");

exports.createPost = async (req, res) =>{
    try{
       const {title, body} =req.body;
       const post = new Post({
        title, body,
       });
    //    console.log(post);
       const savedPost = await post.save();

       res.json({
        post:savedPost,
       });
    }
    catch(error){
        console.error('Error while creating post:', error.message);
        return res.status(400).json({
            error:"Error while creating post",
        });
    }
}


exports.getAllPosts = async (req, res) =>{
    try{
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts,
        })
    }
    catch(error){
        return res.status(400).json({
            error: "Error while fetching Post"
        });
    }
}