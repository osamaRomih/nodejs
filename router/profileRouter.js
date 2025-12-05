import express from "express";
import profileController from "../controller/profileControlle.js";
import auth from "../middleware/auth.js";

const app = express();
const router = app.use(express.Router());

router.get("/profile", auth, profileController);

export default router;
