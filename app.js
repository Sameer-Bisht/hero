// Install Express and  include express module in app.js 

const express = require('express');


// make a express app with a constant

const app = express();

// Make a port for the server 

const port = 80;

//Make Some Endpoints

app.get("/",(req,res)=>{
    res.status(200).render("index.pug");
})

app.get("/feedback",(req,res)=>{
    res.status(200).render("feedback.pug");
});




// Install path module for app.js to get pug files

const path = require('path');

// Do some Express Related stuff

app.use("./static",express.static("static"))

//for serving static files

app.use(express.urlencoded());


//Do some PUG related stuff

app.set('view engine','pug');//sets the template engine as PUG
app.set('views',path.join(__dirname,('views')));//use the views directory








//Creating a server 

app.listen(process.env.PORT,()=>{
    console.log("The Server started on port 80");
})














