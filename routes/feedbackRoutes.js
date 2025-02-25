import express from "express";
import verifyConversion from "../controllers/verifyController.js";
import addTeam from "../controllers/addTeam.js";

const router = express.Router();

router.post("/verify", verifyConversion);
router.post("/add", addTeam);

export default router;
