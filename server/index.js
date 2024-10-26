import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRouter.js";
const app = express();

const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World from Server");
});

app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
