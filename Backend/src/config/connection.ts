import mongoose from "mongoose";



export const connectDB : any =(CONNECTION_STRING:string)=>{
   mongoose.connect(CONNECTION_STRING,{useNewUrlParser:true,useUnifiedTopology:true,dbName:"test"},(data)=>{
     console.log("connection established with Test DB");
     
  })
}