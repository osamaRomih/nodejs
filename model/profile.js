import mongoose from "mongoose";

const profileDB = mongoose.Schema(
  {
    userName: { type: String, trim: true, lowercase: true },
    email: { type: String, trim: true, lowercase: true },
    //   image: { type: String, trim: true, lowercase: true },
    role: { type: String, trim: true, lowercase: true },
  },
  { timestamps: true }
);

export default mongoose.model("Profile", profileDB);
