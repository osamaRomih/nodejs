import User from "../model/register.js";
import { successResponse, errorResponse } from "../response/response.js";

const profileController = async (req, res) => {
  try {
    console.log("req", req.user.id);
    const profileUser = await User.findById(req.user.id).select(
      "-password -__v"
    );
    console.log("profileUser", profileUser);
    if (!profileUser) {
      errorResponse(res, "User Not Found", 404);
      return;
    }
    successResponse(res, "Access User", 200, profileUser);
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

export default profileController;
