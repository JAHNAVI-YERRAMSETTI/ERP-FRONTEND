import express from 'express';
import { signin, signup } from '../controllers/auth.controller.js'; // Assuming controllers exist

const router = express.Router();

// Define routes for sign-in and sign-up
router.post('/signin', signin);
router.post('/signup', signup);

export default router;
