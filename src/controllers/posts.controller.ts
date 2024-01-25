import { Request, Response } from 'express';
import { connect } from "../database"
import Post from '../model/Post';

export async function getPosts(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const posts = await conn.query("SELECT * FROM posts");
    return res.json(posts[0]);
}

export async function getPost (req: Request, res: Response): Promise<Response>  {
    const id = req.params.postId;
    const conn = await connect();
    const posts = await conn.query(`SELECT * FROM posts WHERE id = ?`, [id])
    return res.json(posts[0])
}

export async function createPost(req: Request, res: Response) {
    const newPost: Post = req.body;
    const conn = await connect();
    await conn.query(`INSERT INTO posts SET ?`, [newPost])
    return res.json({
        message: "Post created"
    });
}



export async function updatePost(req: Request, res: Response) {
    const id = req.params.postId;
    const updatePost: Post = req.body;
    const conn = await connect();
    await conn.query(`UPDATE posts SET ? WHERE id = ?`, [updatePost, id])
    return res.json({
        message: "Post updated"
    })
}

export async function deletePost(req: Request, res: Response) {
    const id = req.params.postId;
    const conn = await connect();
    await conn.query(`DELETE FROM posts WHERE id = ?`, [id])
    return res.json({
        message: "Post deleted"
    })
}