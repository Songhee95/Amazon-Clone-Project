const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IMHDbFQysOK7S4CohgXzBFZWRGYS27Y4nFlOfBvz9GEc9gME9nxOUvbcwLf8HqlOJRibf3MD0nG4d4aHUunmYp500WwlvCTwW"
);

// API

// APP CONFIG
const app = express();

// MIDDLEWARES
// eslint-disable-next-line
app.use(cors({ origin: true }));
app.use(express.json());

// API ROUTES
app.get("/", (request, response) => {
  response.status(200).send("hello world");
});
// LISTEN COMMAND
exports.api = functions.https.onRequest(app);

// example end point
// http://localhost:5001/clone-eec21/us-central1/api
