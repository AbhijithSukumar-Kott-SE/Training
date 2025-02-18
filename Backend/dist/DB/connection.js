import mongoose from "mongoose";
const connectDB = () => {
    mongoose.connect("", (data) => {
        console.log("connection established");
    });
};
