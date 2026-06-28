import express from 'express';
import { readDB, writeDB } from '../server.js';
// import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

// GET /api/posts?page=1&limit=10
router.get('/', (req, res) => {
    // TODO: Implement get all posts with pagination
    // Must return X-Total-Count header
});

// GET /api/posts/:id
router.get('/:id', (req, res) => {
    // TODO: Implement get single post
    // 404 if not found
});

// POST /api/posts (Protected)
router.post('/', (req, res) => {
    // TODO: Implement create post
    // Must be authenticated
    // Author ID comes from JWT
    // Auto-generate id and createdAt
});

// PUT /api/posts/:id (Protected)
router.put('/:id', (req, res) => {
    // TODO: Implement update post
    // Must be authenticated
    // 404 if not found
    // 403 if user is not the author
});

// DELETE /api/posts/:id (Protected)
router.delete('/:id', (req, res) => {
    // TODO: Implement delete post
    // Must be authenticated
    // 404 if not found
    // 403 if user is not the author
    // Must cascade delete all comments associated with this post
});

export default router;
