// Environment
import dotenv from "dotenv";
dotenv.config();

// Core
import express from "express";
import mongoose from "mongoose";

//Internal modules
import userRouter from "./router/userRouter.js";
import signUp from "./router/registerRouter.js";
const port = process.env.PORT || 3000;

//  Initialize app
const app = express();

// Middleware
app.use(express.json());

// Connect DB
const DB = mongoose.connect(process.env.DB_PASS);
DB.then(() => console.log("✅ Connect DB Successfully"));
DB.catch((err) => console.log("❌Erorr Connect DB", err));

// Routes
app.use("/api/user", userRouter);
app.use("/api/auth", signUp);

// Listen
app.listen(port, () => console.log("🚀 Listen From http://localhost:" + port));
