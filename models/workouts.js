const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workouts = new Schema({
  reps: {
    type: String,
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
    require: "Please enter name of workout",
  },
  weight: {
    type: Number,
  },
  day: {
    default: Date.now,
  },
  type: {
    type: String,
  },
});

workouts.methods.coolifier = function () { 
    this.workout = `${this.workout} has been added`; 
    return this.workout, 
}; 

workouts.methods.makeCool = function () { 
    this.isCool = true; 
    return this.isCool; 
}; 

module.exports = workouts; 