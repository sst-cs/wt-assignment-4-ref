import express from 'express';
import fs from 'fs';
import path from 'path';

// IMPORTANT: Do not change this file name. 
// The autograder imports 'app' from this file.

const app = express();
app.use(express.json());

// TODO: Import your routers
// import authRouter from './routes/auth.js';
// import postsRouter from './routes/posts.js';
// import commentsRouter from './routes/comments.js';

// TODO: Mount routers
// app.use('/api/auth', authRouter);
// app.use('/api/posts', postsRouter);
// app.use('/api/posts', commentsRouter); // nested routes e.g., /api/posts/:postId/comments

// Helper to read/write DB (use this throughout your app)
export const dbPath = path.join(process.cwd(), 'data', 'db.json');

export const readDB = () => {
  if (!fs.existsSync(dbPath)) return { users: [], posts: [], comments: [] };
  const data = fs.readFileSync(dbPath, 'utf8');
  return JSON.parse(data);
};

export const writeDB = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

// Root endpoint for basic check
app.get('/', (req, res) => {
  res.json({ message: "Welcome to the Blog API" });
});

// For local testing
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// MUST EXPORT app FOR AUTOGRADER
export default app;
