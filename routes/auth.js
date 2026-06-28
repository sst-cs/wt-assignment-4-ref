import express from 'express';
import { readDB, writeDB } from '../server.js';
import jwt from 'jsonwebtoken';

// Use this secret key for JWT generation/verification
export const JWT_SECRET = 'wt4_secret_key';

const router = express.Router();

// POST /api/auth/register
router.post('/register', (req, res) => {
    // TODO: Implement user registration
    // Check for email and password
    // Check if email already exists -> 400
    // Save user with generated id
    // Return 201 with { id, email }
});

// POST /api/auth/login
router.post('/login', (req, res) => {
    // TODO: Implement login
    // Find user, verify password
    // If fail -> 401 { error: 'Invalid credentials' }
    // If success -> return 200 with { token }
    // Token payload should include { id: user.id }
});

export default router;
