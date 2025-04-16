import express from 'express';
import { feedback1, feedbackresult } from '../controllers/feedback.controller.js';  // Assuming you have these functions in feedback.controller.js

const router = express.Router();

// Define routes for submitting and viewing feedback
router.post('/submit', feedback1); // To submit feedback
router.get('/results', feedbackresult); // To get all feedback results

export default router;
