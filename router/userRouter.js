import express from "express";
import {
  createUser,
  getUser,
  getSingle,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUser);
router.get("/:id", getSingle);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
