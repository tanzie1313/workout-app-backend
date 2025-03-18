// npm
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');

// Import routers
const authRouter = require('./controllers/auth');
const testJwtRouter = require('./controllers/test-jwt');
const workoutsRoutes = require('./routes/workouts');
const exercisesRoutes = require('./routes/exercises');
const usersRouter = require('./controllers/users');
const PORT = process.env.PORT || 3000;
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Middleware
// app.use(cors());
app.use(cors({ 
  origin: "https://tanzie.netlify.app" || "http://localhost:5173", // Use frontend URL in production
  credentials: true 
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger('dev'));


// Routes
app.use('/auth', authRouter);
app.use('/test-jwt', testJwtRouter);
app.use('/users', usersRouter);
app.use('/workouts', workoutsRoutes);
app.use('/exercises', exercisesRoutes);


// Start the server and listen on port 3000
app.listen(PORT, () => {
  console.log('The express app is ready!');
});
