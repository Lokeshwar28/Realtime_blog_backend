import express from 'express';
import { register, login } from '../controllers/authController.js';
import { body } from 'express-validator';
import { validateRequest } from '../middleware/validateRequest.js';

const router = express.Router();

router.post('/register', [
  body('username').notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  validateRequest
], register);

router.post('/login', [
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').notEmpty().withMessage('Password is required'),
  validateRequest
], login);

export default router;