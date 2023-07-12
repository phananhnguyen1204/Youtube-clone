import express from "express";
import {
  addVideo,
  addView,
  getVideo,
  random,
  sub,
  trend,
} from "../controllers/video.js";
import { veirifyToken } from "../verifyToken.js";

const router = express.Router();

//create a video
router.post("/", veirifyToken, addVideo);
router.put("/:id", veirifyToken, addVideo);
router.delete("/", veirifyToken, addVideo);
router.get("/find/:id", getVideo);
router.put("/view/:id", addView);
router.get("/trend", trend);
router.get("/random", random);
//subscribed channel videos
router.get("/sub", veirifyToken, sub);
export default router;
