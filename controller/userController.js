import User from "../model/User.js";
import { errorResponse, successResponse } from "../response/response.js";
// Creat User
export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    if (user) {
      res.status(201).json(user);
    }
  } catch (error) {
    // res.status(500).json({ message: error.message });
    errorResponse(res, { message: error.message }, 500);
  }
};

// Get All
export const getUser = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      res.status(404).json("Not Found");
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get One
export const getSingle = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id", id);
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json("user not found");
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update User
export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const user = await User.findByIdAndUpdate(id, body, { new: true });
    if (user) {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      const user = await User.findByIdAndDelete(id);
      if (user) {
        res.status(200).json("User Deleted successfully");
      }
    } else {
      res.status(404).json({ message: "Not Fount" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
