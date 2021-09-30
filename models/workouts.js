const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      reps: {
        type: Number,
      },
      distance: {
        type: Number,
      },
      duration: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter name of workout",
      },
      weight: {
        type: Number,
      },
      type: {
        type: String,
      },
    },
  ],
});

// workouts.methods.coolifier = function () {
//   this.workout = `${this.workout} has been added`;
//   return this.workout;
// };

// workouts.methods.makeCool = function () {
//   this.isCool = true;
//   return this.isCool;
// };

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;
