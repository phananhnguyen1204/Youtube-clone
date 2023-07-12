import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

//SIGN UP
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

//SIGN IN
export const signin = async (req, res, next) => {
  try {
    //find user
    const user = await User.findOne({ name: req.body.name });
    if (!user) return next(createError(404, "User not found"));

    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) return next(createError(400, "Wrong credential!"));
    //create access token
    const token = jwt.sign({ id: user._id }, process.env.JWT);
    //seperate user password
    const { password, ...others } = user._doc;

    //send back token to user
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      //don't send back user password when loging in
      .json(others);
  } catch (err) {
    // next(createError(404, "not found sorry"));
    next(err);
  }
};
