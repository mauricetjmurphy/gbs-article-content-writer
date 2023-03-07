import dotenv from "dotenv";
import { marshall } from "@aws-sdk/util-dynamodb";
import { PutCommand } from "@aws-sdk/lib-dynamodb";

import ddbDocClient from "../config/dynamoDbConfig.js";

dotenv.config();

export const putArticleObject = async (object, table) => {
  try {
    await ddbDocClient.send(
      new PutCommand({
        TableName: table,
        Item: JSON.stringify(object),
      })
    );
    console.log("PutCommand succeeded");
    return {
      statusCode: 200,
      body: JSON.stringify(object),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }), // Return the error as a JSON string
    };
  }
};
