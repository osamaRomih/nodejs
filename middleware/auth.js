import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    console.log("token".req);
    const auth = req.headers.authorization?.splite(" ")[1];
    if (!auth) {
      res.status(201).json({ message: "No Authorized" });
      return;
    }

    const decode = jwt.verify(auth, process.env.JWT_SECRET);
    if (!decode) {
      res.status(403).json("Invalid Token");
      return;
    }

    if (auth & decode) {
      req.user = decode;
      next();
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default auth;
