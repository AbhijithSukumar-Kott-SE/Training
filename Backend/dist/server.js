import express from 'express';
import userRoute from './Routes/userRoute';
const port = process.env.PORT || 3000;
const app = express();
app.use("/user", userRoute);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
console.log("test");
