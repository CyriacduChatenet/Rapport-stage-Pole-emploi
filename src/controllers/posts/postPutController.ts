import { Request, Response } from 'express';
import { Post } from '../../models/postModel';

export const PostPutController = async (request : Request, response : Response) => {
    try {
        const updatePost = await Post.updateOne(
            { Post_url: request.params.PostUrl },
            {
                $set: {},
            }
        );
        response.status(204).json(updatePost);
    } catch (err) {
        response.status(500).json({ message: err });
    }
}