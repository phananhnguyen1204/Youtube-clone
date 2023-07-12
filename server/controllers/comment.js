import { createError } from "../error.js";
import Comment from "../models/Comment.js";
import Video from "../models/Video.js";
export const addComment = async (req, res, next) => {
  const newComment = new Comment({ ...req.body, userId: req.user.id });
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    next(err);
  }
};

//delete comment
export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    const video = await Video.findById(req.params.id);
    //check ID
    //if we are the owner of video or if we are the owner of the comment
    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await Comment.findByIdAndDelete(req.params.id);
      res.status(200).json("Comment has been deleted");
      //can not find ID
    } else {
      return next(createError(403, "You can delete only your comment"));
    }
  } catch (err) {
    next(err);
  }
};

//get all comments of video
export const getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId });
    req.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};
