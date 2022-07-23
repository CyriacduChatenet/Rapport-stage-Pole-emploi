import mongoose, { Schema, model } from "mongoose";
import IArticle from '../../interfaces/articleInterface';

const articleSchema = new Schema<IArticle>({
  title: {
    type : String,
    required : true
  },
    description: {
      type : String,
      required : true
    },
    preview_image_src: {
      type : String,
      required : true
    },
    date: {
      type : String,
      required : true
    },
    author : {
      type : String,
      required : true
    },
    first_title: {
      type : String,
      required : true
    },
    first_part_first_subtitle : {
      type : String,
      required : true
    },
    first_part_first_content : {
      type : String,
      required : true
    },
    first_part_first_first_image_src : {
      type : String,
      required : true
    },
    first_part_first_second_image_src : {
      type : String,
      required : true
    },
    second_title: String,
    second_part_first_subtitle : String,
    second_part_first_content : String,
    second_part_first_first_image_src : String,
    second_part_first_second_image_src : String,
    second_part_second_subtitle : String,
    second_part_second_content : String,
    second_part_second_first_image_src : String,
    second_part_second_second_image_src : String,
    second_part_third_subtitle : String,
    second_part_third_content : String,
    second_part_third_first_image_src : String,
    second_part_third_second_image_src : String,
    second_part_fourth_subtitle : String,
    second_part_fourth_content : String,
    second_part_fourth_first_image_src : String,
    second_part_fourth_second_image_src : String,
    second_part_fifth_subtitle : String,
    second_part_fifth_content : String,
    second_part_fifth_first_image_src : String,
    second_part_fifth_second_image_src : String,
    third_title: String,
  });
  
export const Article = model<IArticle>('posts', articleSchema);