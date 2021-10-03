import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
    // jika ada header authorization diawali dengan bearer
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      // ambil token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //   verify
      req.user = await User.findById(decoded.id).select("-password");
      //   isi req user
      //     isAdmin: true,
      //   _id: 6114ff6b0e229e38c07e8597,
      //   name: 'Admin User',
      //   email: 'admin@example.com',
      //   __v: 0,
      //   createdAt: 2021-08-12T11:00:59.230Z,
      //   updatedAt: 2021-08-12T11:00:59.230Z
      //   decode req.user

      next();
    } catch (e) {
      console.error(e);
      res.status(401);
      throw new Error("Not Authorization, token failed");
      //   jika bad token, token salah tidak terdaftar
    }
  }

  if (!token) {
    // jika token tidak adaa.
    res.status(401);
    throw new Error("No Authorization, No Token");
  }
});

export { protect };
