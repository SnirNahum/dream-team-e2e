import express from "express";
import { log } from "../../middlewares/logger.middleware.js";
import { getGeneralInfo, getPlayerInfo } from "./fpl.controller.js";

const router = express.Router();

router.get("/generalInfo", getGeneralInfo);
router.get("/playerInfo", getPlayerInfo);

export const fplRoutes = router;
