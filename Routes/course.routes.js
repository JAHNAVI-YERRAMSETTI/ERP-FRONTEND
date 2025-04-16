import express from 'express';
import { createCourse, getAllCourses, deleteCourse } from '../controllers/course.controller.js'; // Adjust path if needed

const router = express.Router();

// Route to create a course
router.post('/create', createCourse);

// Route to get all courses
router.get('/', getAllCourses);

// Route to delete a course by ID
router.delete('/:id', deleteCourse);

export default router;
