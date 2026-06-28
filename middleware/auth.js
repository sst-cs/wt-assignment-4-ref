import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../routes/auth.js';

export const requireAuth = (req, res, next) => {
    // TODO: Verify JWT token from Authorization header
    // Header format: "Bearer <token>"
    // If missing -> 401 { error: 'Authentication required' }
    // If invalid/expired -> 401 { error: 'Invalid token' }
    // If valid -> decode token, attach user info to req.user, call next()
};
