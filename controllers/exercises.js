

const Exercise = require('../models/exercise');

// Create a new exercise for a given workout
exports.createExercise = async (req, res) => {
  try {
    // Merge request body with the workout id from URL parameters
    const exercise = new Exercise({ ...req.body, workout: req.params.workoutId });
    await exercise.save();
    res.status(201).json(exercise);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all exercises for a specific workout
exports.getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find({ workout: req.params.workoutId });
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single exercise by its ID (within a specific workout)
exports.getExerciseById = async (req, res) => {
  try {
    const exercise = await Exercise.findOne({
      _id: req.params.exerciseId,
      workout: req.params.workoutId
    });
    if (!exercise) return res.status(404).json({ error: 'Exercise not found' });
    res.json(exercise);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an exercise by its ID
exports.updateExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findOneAndUpdate(
      { _id: req.params.exerciseId, workout: req.params.workoutId },
      req.body,
      { new: true }
    );
    if (!exercise) return res.status(404).json({ error: 'Exercise not found' });
    res.json(exercise);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an exercise by its ID
exports.deleteExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findOneAndDelete({
      _id: req.params.exerciseId,
      workout: req.params.workoutId
    });
    if (!exercise) return res.status(404).json({ error: 'Exercise not found' });
    res.json({ message: 'Exercise deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
