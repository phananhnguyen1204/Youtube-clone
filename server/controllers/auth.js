import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";

export const signup = async (req, res, next) => {
  try {
    //encrypt password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    //save to mongodb
    await newUser.save();
    res.status(200).json("User has been created");
  } catch (err) {
    // next(createError(404, "not found sorry"));
    next(err);
  }
};
