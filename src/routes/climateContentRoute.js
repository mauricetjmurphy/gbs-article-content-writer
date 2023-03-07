import express from "express";
import dotenv from "dotenv";
import { generateContentController } from "../controllers/generateContentController";
import constants from "../utils/constants";

dotenv.config();

const router = express.Router();

router.get("/", (req, res) => {
  generateContentController(
    req,
    res,
    constants.CLIMATE_CHANGE_TOPICS_PROMPT,
    constants.CLIMATE_CHANGE_ARTICLE_PROMPT,
    process.env.CLIMATE_BUCKET_NAME,
    process.env.CLIMATE_ARTICLES_TABLE
  )
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

export default router;
