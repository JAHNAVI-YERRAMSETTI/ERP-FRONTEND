import express from 'express';
import authRoutes from './routes/auth.routes.js'; // Import the auth routes

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());  // To handle JSON requests

// Use auth routes
app.use('/api/auth', authRoutes);  // This will make auth routes available at /api/auth

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
