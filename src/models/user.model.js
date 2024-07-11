import mongoose from 'mongoose'

const userShema=new mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true,
    },
    location:{
        type:String,
        required:true,
        unique:true,
    },
    whetherData:{
        type:String,
        required:true,
    }


})
const User=mongoose.model('User',userSchema)