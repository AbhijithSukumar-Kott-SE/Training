import mongoose, { Schema } from "mongoose";
import { IUserInterface } from "../interfaces/userInterface";

const userSchema: Schema<IUserInterface> = new mongoose.Schema<IUserInterface>({
  name: { type: String },
  age: { type: Number },
  department: { type: String },
});

export const userModel = mongoose.model("users", userSchema);
