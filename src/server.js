const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser=require('cookie-parser')
const userRoutes=require('./routes/user.routes');
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connected to mongodb')
}).catch((err)=>{
    console.log(err)
});

// Create express app
const app=express();
app.use(express.json());
app.use(cookieParser());
app.use('/api',userRoutes);
app.listen(3000,()=>{
    console.log('server is running on port 3000')
});
// Error handling middleware
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode|| 500;
    const message=err.message||'internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
});