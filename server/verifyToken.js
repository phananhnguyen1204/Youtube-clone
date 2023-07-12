import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const veirifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "Your are not authenticated"));
  //if we have token, need to verify if it's valid
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(401, "Token is not valid"));
    req.user = user;
    next();
  });
};
