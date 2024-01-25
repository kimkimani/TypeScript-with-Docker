import { Router } from 'express';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/posts.controller';

const router = Router();

router.route("/")
    .get(getPosts)
    .post(createPost);

router.route("/:postId")
    .get(getPost)
    .delete(deletePost)
    .put(updatePost)

export default router;