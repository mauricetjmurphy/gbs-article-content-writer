import app from "./app.js";

// import serverless from "serverless-http";

// export const handler = serverless(app);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
