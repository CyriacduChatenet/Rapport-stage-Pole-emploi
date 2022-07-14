import { Request, Response } from 'express';
import { Post } from '../../models/postModel';

export const PostPostController = async (request : Request, response : Response) => {
    const newPost = await new Post({
        preview_title : request.body.preview_title,
        preview_description : request.body.preview_description,
        preview_picture_url : request.body.preview_picture_url,
        date : request.body.date,
        title : {
            type: String,
            required: true
        },
        first_part_subtitle : {
            type: String,
            required: true
        },
        first_part_text : {
            type: String,
            required: true
        },
        second_part_subtitle: String,
        second_part_first_subtitle: String,
        second_part_first_text: String,
        second_part_first_picture: String,
        second_part_second_subtitle: String,
        second_part_second_text: String,
        second_part_second_first_picture: String,
        second_part_second_second_picture: String,
        second_part_third_subtitle: String,
        second_part_third_text: String,
        second_part_third_picture: String,
        second_part_fourth_subtitle: String,
        stack: {
            stack_name: String,
            stack_technologies : [
                {
                    technologie_doc_url: String,
                    technologie_logo: String,
                },
            ]
        },
        third_part_subtitle: String,
        third_part_text: String
    });
    try {
        const savedPost = await newPost.save();
        response.status(201).json(savedPost);
    } catch (err) {
        response.status(500).json({ message: err });
    }
}