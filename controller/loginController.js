import dotenv from "dotenv";
dotenv.config();
import register from "../model/register.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { successResponse, errorResponse } from "../response/response.js";

const login = async (req, res) => {
  const { email, password, userName, role } = req.body;
  try {
    const verifyEmail = await register.findOne({ email });
    if (!verifyEmail) {
      errorResponse(res, "Invalid Email Or Password ", 400);
      return;
    }
    const verifyPassword = await bcrypt.compare(password, verifyEmail.password);
    if (!verifyPassword) {
      errorResponse(res, "Invalid Email Or Password ", 400);
      return;
    }

    if (verifyEmail && verifyPassword) {
      const token = jwt.sign(
        { id: verifyEmail._id, role: verifyEmail.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE }
      );
      if (verifyEmail && verifyPassword && token) {
        console.log(verifyEmail);
        successResponse(res, "Login Successfully", 200, token);
      }
    }
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

export default login;
