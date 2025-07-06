import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import connectCloudinary from "./config/cloudinary.js";


// App Config
const app = express();
const port = process.env.PORT || 4000;
// DB Connection
connectDB();
// Cloudinary Connection
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);


// API Creation
app.get("/", (req, res) => {
  res.send("Express App is Running");
});


app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on Port:" + port);
  } else {
    console.log("ERROR: " + error);
  }
});
