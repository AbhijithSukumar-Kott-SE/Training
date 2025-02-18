import mongoose, { Schema } from "mongoose";
import { ICarInterface } from "../interfaces/carInterface";

const carSchema: Schema<ICarInterface> = new mongoose.Schema<ICarInterface>({
  make: {
    type: String,
    required: true,
    trim: true,
  },
  model:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    index:1
  },
  year:{
    type:Number,
    required:true,
    index:-1
  },
  mileage:{
    type:Number,
    required:true,
  },
  auctionDate:{
    type:String,
    required:true,
    index:-1
  }
});

export const carModel = mongoose.model("cars", carSchema);
