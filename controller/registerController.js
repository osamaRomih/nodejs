import bcrypt from "bcrypt";
import register from "../model/register.js";
import { successResponse, errorResponse } from "../response/response.js";

const signUp = async (req, res) => {
  const { email, password, userName, role } = req.body;
  try {
    const userExist = await register.findOne({ email });
    if (userExist) {
      successResponse(res, "Email Already Exists", 400);
      return;
    }

    const hashPassword = await bcrypt.hash(password, 10);
    if (hashPassword) {
      const user = await register.create({
        userName,
        password: hashPassword,
        email,
        role,
      });

      successResponse(res, "Creat Successfully", 201, {
        id: user._id,
        userName,
        email,
        role,
      });
    }
  } catch (error) {
    errorResponse(res, "Error Server", 500, error.message);
  }
};

export default signUp;
