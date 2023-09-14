import { fplService } from "./fpl.service.js";
import { logger } from "../../services/logger.service.js";

export async function getGeneralInfo(req, res) {
  try {
    const generalInfo = await fplService.GeneralInfo();
    logger.info("General Info loaded successfully");
    res.json(generalInfo);
  } catch (err) {
    logger.error("Failed to get general info", err);
    res.status(400).send({ err: "Failed to get general info" });
  }
}
export async function getPlayerInfo(req, res) {
  try {
    const playerId = req.query.playerId;
    const playerInfo = await fplService.PlayerInfo(playerId);
    logger.info("Player Info loaded successfully");
    res.json(playerInfo);
  } catch (err) {
    logger.error("Failed to get players", err);
    res.status(400).send({ err: "Failed to get players" });
  }
}
