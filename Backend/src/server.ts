import express from 'express';
import userRoute from './app/Routes/userRoute'
import carRoute from './app/Routes/carRoute';
import { connectDB } from './config/connection';
import cors from "cors";


const port = process.env.PORT;
const app=express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/user",userRoute)
app.use("/",carRoute)
 
connectDB(process.env.CONNECTION_STRING)

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
    
})

console.log("test");
