import mongoose from "mongoose";
const regschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true,
        unique: true
    },
     number:{
        type:String,
        required:true,
        unique:true
    },
     city:{
        type:String,
        required:true
    },
     address:{
        type:String,
        required:true
    }, 
    password:{
        type:String,
        required:true
    },
     name:{
        type:String,
        required:true
    },

})
export default mongoose.model("Reg",regschema)