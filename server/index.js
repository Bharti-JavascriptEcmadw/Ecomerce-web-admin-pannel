

import express from 'express';
const  app= express();
import cookieParser from 'cookie-parser';
app.use(cookieParser());
app.use('/uploads', express.static('uploads'))
import dotenv from 'dotenv'
dotenv.config()

import Connectdb from './config/db.js';
Connectdb();
import cors from 'cors';

app.use(cors({
    origin:[process.env.Frontend_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH', 'OPTIONS'], // Allow these methods
    credentials:true
}));
app.use(express.json()); 
app.use(express.urlencoded({extended:true}))




//???import routtes file 

import adminroutes  from './routes/adminroutes.js'
// import jobsroute from './routes/jobsroute.js'
// import errormiddleware from './middleware/errormiddleware.js';
// import applicationroute from './routes/applicationroute.js' 

// //!!!!    routing 
app.use('/api/v1/reg', adminroutes)  
// app.use('/api/v1/job', jobsroute);   
// app.use("/api/v1/application",applicationroute);





// !!!!!!Server

app.listen(4000, ()=>{
    console.log(`Node server is running in  on port no 4000`)
})