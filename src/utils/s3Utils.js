import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3Client from "../config/s3Config";
import { getTodaysDate } from "./utils";

export async function uploadToS3(fileName, object, bucket) {
  try {
    // Get today's date in "yymmdd" format
    const todaysDate = getTodaysDate();

    // Convert object to JSON string
    const objectJson = JSON.stringify(object);

    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: `${todaysDate}/${fileName}`,
      Body: objectJson,
    });

    await s3Client.send(command);

    console.log(
      `Object saved to S3 bucket: s3://${bucket}/${todaysDate}/${fileName}`
    );
  } catch (err) {
    console.error(`Error saving object to S3 bucket: ${err}`);
  }
}
