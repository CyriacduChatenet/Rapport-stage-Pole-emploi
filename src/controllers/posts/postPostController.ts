import { Request, Response } from 'express';
import { Post } from '../../models/postModel';

export const PostPostController = async (request : Request, response : Response) => {
    const newPost = await new Post({});
    try {
        const savedPost = await newPost.save();
        response.status(201).json(savedPost);
    } catch (err) {
        response.status(500).json({ message: err });
    }
}