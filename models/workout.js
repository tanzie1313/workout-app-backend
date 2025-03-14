// models/Workout.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',  // References the User who created the workout
    required: true
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Exercise' // An array of references to Exercise documents
    }
  ]
});

module.exports = mongoose.model('Workout', workoutSchema);
