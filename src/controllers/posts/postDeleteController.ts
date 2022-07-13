import { Request, Response } from 'express';
import { Post } from '../../models/postModel';

export const postDeleteController = async (request : Request, response : Response) => {
    try {
        const deletePost = await Post.remove({
            Post_url: request.params.PostUrl,
        });
        response.status(404).json(deletePost);
    } catch (err) {
        response.status(500).json({ message: err });
    }
}