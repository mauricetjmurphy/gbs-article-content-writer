import { v4 as uuidv4 } from "uuid";
import constants from "../../utils/constants";
import { putArticleObject } from "../../utils/dynamoDbUtils";
import { generateResponse } from "../../utils/openaiUtils";
import { uploadToS3 } from "../../utils/s3Utils";
import {
  objectFromArray,
  removeCharsFromString,
  removeOuterString,
  splitGetIndex,
  splitResponseString,
  splitTopicsStringAndFilter,
} from "../../utils/utils";

export const generateArrayOfTopics = async (topicPrompt) => {
  try {
    const response = await generateResponse(
      topicPrompt,
      "text-davinci-003",
      0.2,
      2000
    );

    return splitTopicsStringAndFilter(response, "\n");
  } catch (err) {
    console.error(`Error generating array of topics: ${err}`);
    throw new Error("Error generating array of topics");
  }
};

export const generateArrayOfAuthors = async () => {
  try {
    const response = await generateResponse(
      constants.AUTHOR_PROMPT,
      "text-davinci-003",
      0.2,
      2000
    );

    const authors = splitResponseString(response, "\n").filter(Boolean);

    return authors.map((item) => splitGetIndex(item, ". ", 1));
  } catch (err) {
    console.error(`Error generating array of authors: ${err}`);
    throw new Error("Error generating array of authors");
  }
};

export const generateArrayOfArticles = async (arrayOfTopics, articlePrompt) => {
  try {
    const arrayOfArticles = await Promise.all(
      arrayOfTopics.map(async (topic) => {
        const response = await generateResponse(
          articlePrompt.replace("{}", topic),
          "text-davinci-003",
          0.2,
          2000
        );

        console.log(splitResponseString(response, "\n"));

        return splitResponseString(response, "\n");
      })
    );

    return objectFromArray(arrayOfArticles);
  } catch (err) {
    console.error(`Error generating array of articles: ${err}`);
    throw new Error("Error generating array of articles");
  }
};

export const generateDataObjects = (
  arrayOfTopics,
  arrayOfAuthors,
  arrayOfArticles,
  bucket,
  table
) => {
  for (let i = 0; i < arrayOfTopics.length; i++) {
    const now = new Date();
    const id = uuidv4();
    const category = removeCharsFromString(arrayOfTopics[i].split(",")[1], '"');
    const cleanCategory = removeCharsFromString(category, ".");
    const title = removeOuterString(arrayOfTopics[i].split(",")[0]);
    const cleanTitle = removeOuterString(title.split(". ")[1]);

    const data = {
      id: id,
      image_url: `${id}.jpg`,
      category: cleanCategory,
      title: cleanTitle,
      body: arrayOfArticles[i],
      author: arrayOfAuthors[i],
      date: now.toISOString(),
    };

    const fileName = `${id}.json`;

    try {
      // putArticleObject(data, table);
      uploadToS3(fileName, data, bucket);
    } catch (err) {
      console.error(`Error generating data object for ${fileName}: ${err}`);
      throw new Error(`Error generating data object for ${fileName}`);
    }
  }
};
