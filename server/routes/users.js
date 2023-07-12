import express from "express";
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribe,
  unsubscribe,
  updateUser,
} from "../controllers/user.js";
import { veirifyToken } from "../verifyToken.js";

const router = express.Router();

//update user
//verifyToken will be a middleware
router.put("/:id", veirifyToken, updateUser);
//delete user
router.delete("/:id", deleteUser);
//get a user
router.get("/find/:id", getUser);
//subscribe a user
router.put("/sub/:id", subscribe);
//unsubscribe a user
router.put("/unsub/:id", unsubscribe);
//like a video
router.put("/like/:videoId", like);
//dislike a video
router.put("/dislike/:videoId", dislike);
export default router;
