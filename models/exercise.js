// models/Exercise.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  sets: {
    type: Number,
    default: 3
  },
  reps: {
    type: Number,
    default: 10
  },
  weight: {
    type: Number,
    default: 0
  },
  workout: {
    type: Schema.Types.ObjectId,
    ref: 'Workout', // References the Workout this exercise belongs to
    required: true
  }
});

module.exports = mongoose.model('Exercise', exerciseSchema);
