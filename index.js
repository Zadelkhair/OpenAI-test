// import { Configuration, OpenAIApi } from "openai";
const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const fs = require("fs");

const configuration = new Configuration({
  organization: "org-CNlDe3aMw8haJQb2SqI1N8uK",
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const app = express();

app.use(require("cors")());
app.use(express.json());

const port = 3080;

app.post("/search", async (req, res) => {
  // get the search
  const { search, model } = req.body;

  const response = await openai.createCompletion({
    model: model ?? "text-davinci-003", // the model
    prompt: search,
    max_tokens: 100,
    temperature: 0.5,
  });

  // check if db.json exists
  if (!fs.existsSync("./db.json")) {
    // create the file
    fs.writeFileSync("./db.json", JSON.stringify({}));
  }

  // check if file contains valid json
  let db = {};
  try {
    db = JSON.parse(fs.readFileSync("./db.json"));
  } catch (error) {
    // file is empty
  }

  // write the db
  fs.writeFileSync(
    "./db.json",
    JSON.stringify({
      ...db,
      [new Date().toISOString()]: {
        search: search,
        response: response.data.choices[0].text,
        model: model ?? "text-davinci-003",
      },
    })
  );

  // return success response
  res.json({
    status: 200,
    data: "Your request has been sent, we will get back to you shortly",
  });
});

// api to get openai engines
app.get("/engines", async (req, res) => {
  const response = await openai.listEngines();
  res.json(response.data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
