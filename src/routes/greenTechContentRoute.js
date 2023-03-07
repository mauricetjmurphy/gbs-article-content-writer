import express from "express";
import dotenv from "dotenv";
import { generateContentController } from "../controllers/generateContentController";
import constants from "../../utils/constants";

dotenv.config();

const router = express.Router();

router.get("/", (req, res) => {
  generateContentController(
    req,
    res,
    constants.GREEN_TECH_TOPICS_PROMPT,
    constants.GREEN_TECH_ARTICLE_PROMPT,
    process.env.GREEN_TECH_BUCKET_NAME,
    process.env.GREEN_TECH_ARTICLES_TABLE
  )
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

export default router;
