import mongoose from "mongoose";

const register = mongoose.Schema(
  {
    userName: { type: String, required: [true, "UserName is Required"] },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is Required"],
      index: true,
      lowercase: true,
    },
    password: { type: String, required: [true, "Password is Required"] },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: true }
);

export default mongoose.model("Auth", register);
