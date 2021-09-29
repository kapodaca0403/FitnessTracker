const mongoose = require("mongoose");
const logger = require("morgan");
const express = require("express");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tracker", {
  useNewUrlParser: true,
});

//get route for exercise, stats, continue workout and new workout?
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/stats.html"));
});

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.htnml"));
});

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/exercise.html"));
});

db.workouts
  .create({ name: "Workout Tracker" })
  .then((dbworkouts) => {
    console.log(dbworkouts);
  })
  .catch(({ message }) => {
    console.log(message);
  });

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
