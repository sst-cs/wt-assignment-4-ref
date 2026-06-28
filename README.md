# WT Assignment 04: Node/Express REST API

In this assignment, you will build a complete REST API for a simple Blog platform using Node.js and Express.

## Core Objective
Implement standard CRUD operations for `posts` and `comments`, protected by JWT authentication. 

## Provided Architecture
- **server.js**: Entry point and database helper functions (`readDB`, `writeDB`).
- **data/db.json**: Seed data.
- **routes/**: Stubs for your routers.
- **middleware/**: Stubs for your auth and validation middleware.

## Requirements
1. **Auth (`routes/auth.js`)**: 
   - `POST /register`: Save user and return `{ id, email }`.
   - `POST /login`: Verify password and return a JWT `{ token }`.
2. **Posts (`routes/posts.js`)**: 
   - Complete CRUD.
   - `GET /` must support pagination (`?page=1&limit=10`) and include an `X-Total-Count` header.
   - Create/Update/Delete require authentication.
   - You can only update/delete your own posts (403 Forbidden otherwise).
   - **Cascade Delete**: Deleting a post must delete all its comments.
3. **Comments (`routes/comments.js`)**: 
   - CRUD for comments nested under posts (`/api/posts/:postId/comments`).
4. **Middleware**: Implement JWT verification and request body validation.

## Data Persistence
Use the provided `readDB()` and `writeDB()` helper functions in `server.js` to interact with `data/db.json`.

## To Run Locally
```bash
npm install
npm start
```
Note: To run the server, ensure `package.json` has `"type": "module"`. 

## Submission
Push to GitHub Classroom to trigger the integration tests. The autograder expects your app to be exported from `server.js`.
