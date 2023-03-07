import { Configuration, OpenAIApi } from "openai";
const dotenv = require("dotenv");
dotenv.config();

const configuration = new Configuration({
  organization: "org-mVqrF38uFKsdoV0F9ej3cYzT",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default openai;
