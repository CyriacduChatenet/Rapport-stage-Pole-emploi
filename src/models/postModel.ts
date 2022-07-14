import { model, Schema } from "mongoose";
import { IPost } from '../interfaces/postInterface';

const postSchema = new Schema<IPost>({
    preview_title : {
        type: String,
        required: true
    },
    preview_description : {
        type: String,
        required: true
    },
    preview_picture_url : {
        type: String,
        required: true
    },
    date : {
        type: String,
        required: true
    },
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

export const Post = model<IPost>('posts', postSchema);