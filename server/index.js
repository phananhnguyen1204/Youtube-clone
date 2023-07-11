import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import commentRoutes from "./routes/comments.js";
import videoRoutes from "./routes/videos.js";

const app = express();
dotenv.config();
const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected To DB");
    })
    .catch((err) => {
      throw err;
    });
};

app.get("/", () => console.log("hello"));
//middleware
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

app.listen(8800, () => {
  //connect to MongoDB
  connect();
  console.log("Server is running on port 8800");
});
