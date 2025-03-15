// routes/exercises.js
const express = require('express');
const router = express.Router({ mergeParams: true });
const exerciseController = require('../controllers/exercises');

// Create a new exercise for a given workout
router.post('/', exerciseController.createExercise);

// Get all exercises for a specific workout
router.get('/', exerciseController.getExercises);

// Get a single exercise by its ID
router.get('/:exerciseId', exerciseController.getExerciseById);

// Update an exercise
router.put('/:exerciseId', exerciseController.updateExercise);

// Delete an exercise
router.delete('/:exerciseId', exerciseController.deleteExercise);

module.exports = router;
