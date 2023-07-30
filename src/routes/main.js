const express= require('express');
const {route } = require('express/lib/application');
const async=require("hbs/lib/async");

const Detail=require("../models/Detail");
const slider = require('../models/slider');
const service=require('../models/service');
const contact = require('../models/contact');

const routes=express.Router();



routes.get("/", async (req,res)=>{
    //   res.send("this is message from routes ")
    
    const details= await Detail.findOne({"_id":"647518466839910536bd3820"})
    const slides= await slider.find()
    // console.log(details);
// console.log(slides)
const services= await service.find()


    res.render("index",{
        details:details,
        slides:slides,
        services:services
    });
});

routes.get('/gallery', async (req,res)=>{
    const details= await Detail.findOne({"_id":"647518466839910536bd3820"})

    // res.send("gallery")
    res.render("gallery",{
        details:details
    });

});


//process of contact form 
routes.post("/process-contact-form", async (request,response)=>{
    console.log("form is submitted")
    console.log(request.body)

    //save the data into DB
     try{
  
        const data= await contact.create(request.body)
        console.log(data)
        response.redirect("/")

     }catch(e){
        console.log(e)
        response.redirect("/")
     }

})

module.exports=routes;


// const express = require('express');
// const routes = express.Router();

// const Detail = require("../models/Detail");
// const slider = require('../models/slider');
// const service = require('../models/service');
// const contact = require('../models/contact');

// routes.get("/", async (req, res) => {
//     try {
//         const details = await Detail.findOne({ "_id": "647518466839910536bd3820" });
//         const slides = await slider.find();
//         const services = await service.find();

//         // Set the dynamic link and linkText values
//         const link = "https://example.com"; // Replace with the actual link
//         const linkText = "Click Here"; // Replace with the actual link text

//         res.render("index", {
//             details: details,
//             slides: slides,
//             services: services,
//             link: link,
//             linkText: linkText
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Internal Server Error");
//     }
// });

// // ... other routes ...

// module.exports = routes;
