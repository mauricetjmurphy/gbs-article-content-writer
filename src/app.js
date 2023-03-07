import express from "express";
import bodyParser from "body-parser";
require("@babel/register")({
  presets: ["@babel/preset-env"],
});

import { corsMiddleware } from "./middleware/cors";

const app = express();

// Import routes
import routes from "./routes";

// Apply the CORS middleware to all incoming requests
app.use(corsMiddleware);

app.use(bodyParser.json());

// Use routes
app.use("/", routes);

export default app;
