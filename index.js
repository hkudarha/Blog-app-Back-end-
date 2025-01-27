 const express = require("express");
 const app= express();

//  .env file
 require("dotenv").config();
const PORT = process.env.PORT || 3000;

 // middleware to parse json request body
app.use(express.json());

// import routs for Todo api
const blog = require("./routes/blog")

// mount(add) the todo API routers
app.use("/api/v1",blog);


//  connect to the database
const connectWithDb= require("./config/database");
connectWithDb();

//  start server
 app.listen(PORT, () =>{
    console.log(`server is started at ${PORT}`);
 })

// Default Route
app.get("/", (req, res)=>{
    res.send(`<h1> This is the Home page</h1>`);
})

