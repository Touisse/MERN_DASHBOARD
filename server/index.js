import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send({ message: "hello world" });
});

const startServer = async () => {
  try {
    connectDB(
      "mongodb+srv://yassinetouisse99:12345@cluster0.0bvmrj3.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(8080, () =>
      console.log("Server started on Port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
