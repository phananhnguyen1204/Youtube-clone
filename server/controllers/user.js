import { createError } from "../error.js";
import User from "../models/User.js";

export const updateUser = async function (req, res, next) {
  if (req.params.id === req.user.id) {
    //update user
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        //return req with the newest version
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {}
  } else {
    return next(createError(403, "You can update only your account!"));
  }
};

export const deleteUser = async function (req, res, next) {
  if (req.params.id === req.user.id) {
    //update user
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted");
    } catch (err) {}
  } else {
    return next(createError(403, "You can delete only your account!"));
  }
};

export const getUser = async function (req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const subscribe = async function (req, res, next) {
  try {
    await User.findById(req.user.id, {
      $push: { subscribedUser: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });
    res.status(200).json("Subscription successfull");
  } catch (err) {
    next(err);
  }
};
export const unsubscribe = async function (req, res, next) {
  try {
    await User.findById(req.user.id, {
      $pull: { subscribedUser: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 },
    });
    res.status(200).json("Unsubscription successfull");
  } catch (err) {
    next(err);
  }
};

export const like = async function (req, res, next) {
  try {
  } catch (err) {}
};

export const dislike = async function (req, res, next) {
  try {
  } catch (err) {}
};
