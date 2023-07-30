const express = require("express");


//views connections 
const hbs= require("hbs")           
const app = express();

//db connc
const mongoose=require("mongoose")
const bodyParser=require("body-parser")


const routes=require("./routes/main")

const Detail=require("./models/Detail")

const slider=require("./models/slider")

const services=require("./models/service")




//public folder connections 
app.use(bodyParser.urlencoded({
  extended:true
}))

app.use('/static',express.static("public"))

app.use('',routes)




//(template engine )
app.set('view engine','hbs')
app.set("views","views")


hbs.registerPartials("views/partials")

//db connections 
// mongodb://localhost:27017
// mongoose.connect('mongodb://localhost:27017/completeDyanamic_web_project');
mongoose.connect('mongodb://0.0.0.0/completeDyanamic_web_project').then(() => {
    console.log('db connected');

// services.create([
//   {
 
//   icon:'fa-brands fa-windows',
//   title:'Provide Best Course',
//   description:'We Provide courses that helps our student in learning and in placement',
//   linkText:'https://wwww.learncodewithdurgesh.com',
//   link:'Check'
//   },
//    {
  

//     icon:'fa-solid fa-book',
//     title:'Learn Projects',
//     description:'We Provide courses that helps our student in learning and in placement',
//     linkText:'https://wwww.learncodewithdurgesh.com',
//     link:'Check'
//     },
//     {
  

//       icon:'fa-solid fa-book',
//       title:'Learn Projects',
//       description:'We Provide courses that helps our student in learning and in placement',
//       linkText:'https://wwww.learncodewithdurgesh.com',
//       link:'Check'
//       }

// ])



      // slider.create([
      //   {
      //     title:'Learn Java In very Easy Manner',
      //     subTitle:'java is the one of the most pupular programming language',
      //     imageUrl:"/static/images/s1.jpg"
          
      
      //   },
      //   {
      //     title:'what is Django in python ',
      //     subTitle:'Django is famous framework of python programming',
      //     imageUrl:"/static/images/bg1.jpg"
      //   },
      //   {
      //     title:'what abou node jd',
      //     subTitle:'node js is runtime environment to execute javascript outside browser',
      //     imageUrl:"/static/images/22.jpg"
      //   }
      // ])



//     Detail.create({
//         brandname:"Nayan's Portfolio",
//         brandIconurl:"/static/images/nk.png",
//         links:[{
//             label:"Home",
//             url:"/"
//         },
//     {
//         label:"services",
//         url:"/services"
//     },
// {
//     label:"gallery",
//     url:"/gallery"
// },{
//     label:"About",
//     url:"/about"
// },{
//     label:"Contact us",
//     url:"/contact-us"
// },]
        
//     })
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });



app.get("/about",(request,response)=>{
    response.send("wow this is data from server message from server ")
})


app.listen(process.env.PORT | 5556,()=>{
    console.log("server started");
})