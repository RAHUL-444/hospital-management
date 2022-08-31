import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
// import docRouter from "./routes/doctors-routes";
import router from "./routes/user-routes";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
// app.use("/api/doc", docRouter);
mongoose
  .connect(
    "mongodb+srv://management:pHh5NeNEYuLHJSa4@cluster0.h8x6lh1.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));


  // pHh5NeNEYuLHJSa4
