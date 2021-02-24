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

// eslint-disable-next-line
app.post("/payments/create", async (req, res) => {
  console.log("hey 😀");
  const total = req.query.total;
  console.log("Payment Request Received ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  //ok - created
  console.log(paymentIntent.client_secret);
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// LISTEN COMMAND
exports.api = functions.https.onRequest(app);

// example end point
// http://localhost:5001/clone-eec21/us-central1/api
