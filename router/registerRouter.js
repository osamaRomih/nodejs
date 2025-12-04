import express from "express";
import signUp from "../controller/registerController.js";
import login from "../controller/loginController.js";

const router = express.Router();

router.post("/signUp", signUp);
router.post("/login", login);

export default router;
