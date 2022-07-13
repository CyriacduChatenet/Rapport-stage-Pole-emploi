import { model, Schema } from "mongoose";
import { IPost } from '../interfaces/postInterface';

const postSchema = new Schema<IPost>({});

export const Post = model<IPost>('posts', postSchema);