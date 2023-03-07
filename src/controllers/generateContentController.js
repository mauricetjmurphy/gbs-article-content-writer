import {
  generateArrayOfArticles,
  generateArrayOfAuthors,
  generateArrayOfTopics,
  generateDataObjects,
} from "../services/generateContentService";

export const generateContentController = async (
  req,
  res,
  topicPrompt,
  articlePrompt,
  bucket,
  table
) => {
  try {
    const arrayOfTopics = await generateArrayOfTopics(topicPrompt);

    const [arrayOfAuthors, arrayOfArticles] = await Promise.all([
      generateArrayOfAuthors(),
      generateArrayOfArticles(arrayOfTopics, articlePrompt),
    ]);

    generateDataObjects(
      arrayOfTopics,
      arrayOfAuthors,
      arrayOfArticles,
      bucket,
      table
    );

    res.status(200).send("Content generation successful");
  } catch (err) {
    console.error(`Error generating content: ${err}`);
    res.status(500).send("Error generating content");
  }
};
