import express from 'express';
import { readDB, writeDB } from '../server.js';
// import { requireAuth } from '../middleware/auth.js';

// Note: This router is meant to be mounted at /api/posts/:postId/comments
// You'll need to set mergeParams: true when creating the router to access :postId
const router = express.Router({ mergeParams: true });

// GET /api/posts/:postId/comments
router.get('/', (req, res) => {
    // TODO: Get all comments for a specific post
    // 404 if post doesn't exist
});

// POST /api/posts/:postId/comments (Protected)
router.post('/', (req, res) => {
    // TODO: Add a comment to a post
    // Must be authenticated
    // 404 if post doesn't exist
});

// DELETE /api/posts/:postId/comments/:id (Protected)
router.delete('/:id', (req, res) => {
    // TODO: Delete a comment
    // Must be authenticated
    // 404 if comment doesn't exist
    // 403 if user is not the author of the comment
});

export default router;
