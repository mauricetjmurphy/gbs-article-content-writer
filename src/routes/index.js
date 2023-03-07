import express from "express";
import healthRoute from "./healthRoute";
import climateContentRoute from "./climateContentRoute";
import greenTechContentRoute from "./greenTechContentRoute";

const router = express.Router();

router.use("/health", healthRoute);
router.use("/generate-climate-content", climateContentRoute);
router.use("/generate-tech-content", greenTechContentRoute);

export default router;
