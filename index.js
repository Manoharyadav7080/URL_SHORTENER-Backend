const express = require('express');
const { connectionToMongoDB } = require('./connection')
const URL  = require("./models/url")
const urlRoute = require('./routes/url')
require('dotenv').config();


// dotenv 
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;



const app = express();
connectionToMongoDB(DATABASE_URL).then(
    console.log("mongoDB connected")
);


// for parseing data 
app.use(express.json());
app.use(express.urlencoded({extended :false}))



//Routes
app.use("/url" ,urlRoute);

app.get("/:shortId" , async(req , res) => {
    const shortId = req.params.shortId;


    const timestamp1 = Date.now();
    const date_time = new Date(timestamp1)
    const formattedDate = date_time.toISOString().replace('T', ' ').slice(0, 19);

    const entry = await URL.findOneAndUpdate({
        shortId
    } , 
    {
        $push:{
        visitHistory :
        {
        //     timeStamp:Date.now(),
        timeStamp : formattedDate
        },
      },
     }
    );

    res.redirect(entry.redirectURL )
   
})


app.listen(PORT , (res , req) => {
    console.log(`server start at port ${PORT}`)  
})