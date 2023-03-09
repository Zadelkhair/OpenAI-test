const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const fs = require("fs");

const configuration = new Configuration({
  organization: "org-CNlDe3aMw8haJQb2SqI1N8uK",
  apiKey: "__",
});

const openai = new OpenAIApi(configuration);

const app = express();

app.use(require("cors")());
app.use(express.json());

const port = 3080;

//
const questions = [
  {
    id: 1,
    question: "What is the main goal of your project?",
    answer: "",
  },
  {
    id: 2,
    question:
      "What type of website do you need (e.g. business website, personal website, e-commerce website, etc.)?",
    answer: "",
  },
  {
    id: 3,
    question:
      "What features do you require on your website (e.g. user login, payment processing, search functionality, etc.)?",
    answer: "",
  },
  {
    id: 4,
    question: "Who is your target audience?",
    answer: "",
  },
  {
    id: 5,
    question: "What is your budget for this project?",
    answer: "",
  },
  {
    id: 6,
    question:
      "Do you have any design preferences or examples of websites you like?",
    answer: "",
  },
  {
    id: 7,
    question: "What is your timeline for completing the project?",
    answer: "",
  },
  {
    id: 8,
    question:
      "Will you be providing content for the website, or do you need help with that as well?",
    answer: "",
  },
  {
    id: 9,
    question:
      "Have you already registered a domain name and purchased web hosting?",
    answer: "",
  },
  {
    id: 10,
    question:
      "Do you have any specific technical requirements for the website (e.g. integration with other systems, custom development, etc.)?",
    answer: "",
  },
];

app.post("/search", async (req, res) => {
  // get the query
  const { query, model } = req.body;

  const response = await openai.createCompletion({
    model: model ?? "text-davinci-003", // the model
    prompt: query,
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

  let txt = response.data.choices[0].text;
  // write the db
  fs.writeFileSync(
    "./db.json",
    JSON.stringify({
      ...db,
      [new Date().toISOString()]: {
        query: query,
        response: txt,
        model: model ?? "text-davinci-003",
      },
    })
  );

  // return success response
  res.json({
    status: 200,
    data:
      "Your request has been sent, we will get back to you shortly,\n----------------\n" +
      txt.split(" ").slice(0, 50).join(" ") +
      "...",
  });
});

// api to get openai engines
app.get("/engines", async (req, res) => {
  const response = await openai.listEngines();
  res.json(response.data);
});

// questions api
app.get("/questions", (req, res) => {
  res.json(questions);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
