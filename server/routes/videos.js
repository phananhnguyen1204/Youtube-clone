import express from "express";
import { addVideo, getVideo } from "../controllers/video.js";
import { veirifyToken } from "../verifyToken.js";

const router = express.Router();

//create a video
router.post("/", veirifyToken, addVideo);
router.put("/:id", veirifyToken, addVideo);
router.delete("/", veirifyToken, addVideo);
router.get("/find/:id", getVideo);
router.put("/view/:id", getVideo);
router.get("/trend", getVideo);
router.get("/random", getVideo);
//subscribed channel videos
router.get("/sub", getVideo);
export default router;
