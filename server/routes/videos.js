import express from "express";
import {
  addVideo,
  addView,
  getByTag,
  getVideo,
  random,
  search,
  sub,
  trend,
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//create a video
router.post("/", verifyToken, addVideo);
//update video
router.put("/:id", verifyToken, addVideo);
//delete video
router.delete("/", verifyToken, addVideo);
//get video by ID
router.get("/find/:id", getVideo);
//get view
router.put("/view/:id", addView);
//get trend video
router.get("/trend", trend);
//get random video
router.get("/random", random);
//subscribed channel videos
router.get("/sub", verifyToken, sub);
//find video by tags
router.get("/tags", getByTag);
//find movie by title
router.get("/search", search);
export default router;
