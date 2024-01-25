import express from "express";

// Import the PostsRoutes from the post.routes file
import PostsRoutes from "./routes/post.routes";

// Create an instance of the express
const app = express();

// Define the port to listen on
const PORT = process.env.PORT || 3000;
app.use(express.json());

// Use the PostsRoutes for any routes starting with /posts
app.use('/posts', PostsRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
