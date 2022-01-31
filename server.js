const express=require('express');
const app=express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.json())
app.use(express.json({extended: false}));
const surveyRoutes=require("./Routes/surveyRoutes")
app.use('/survey',surveyRoutes)

app.listen(8000,()=>{console.log("connected to port-8000")})