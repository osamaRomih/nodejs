import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const auth = req.headers.authorization;

    if (!auth || !auth.startsWith("Bearer ")) {
      res.status(201).json({ message: "No Authorized" });
      return;
    }
    const token = auth?.split(" ")[1];
    console.log("token", token);

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      res.status(403).json("Invalid or expired token");
      return;
    }

    req.user = decode;
    console.log(req.user);
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default auth;
