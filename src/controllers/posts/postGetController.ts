import { Request, Response } from "express"
import { Post } from '../../models/postModel';

export const PostGetAllController = async (request:Request, response: Response) => {
    try {
        const allPosts = await Post.find();
        response.status(200).json(allPosts);
    } catch (err) {
        response.status(500).json({ message: err });
    }
};

export const PostGetSingleController = async (request : Request, response : Response) => {
    try {
        const singlePost = await Post.find({
            Post_url: request.params.PostUrl,
        });
        response.status(200).json(singlePost);
    } catch (err) {
        response.status(500).json({ message: err });
    }
};