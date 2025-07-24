require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = process.env.PORT || 8080;
const url = process.env.MONGO_URL;

app.listen(port, () => {
  console.log(`listening to port ${port}`);
  mongoose
    .connect(url)
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((err) => {
      console.log("Database Connection Failed:", err);
    });
});

app.get("/", (req, res) => {
  res.send("this is root");
});
