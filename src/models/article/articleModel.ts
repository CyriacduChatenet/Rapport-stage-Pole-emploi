import mongoose, { Schema, model } from "mongoose";
import IArticle from "../../interfaces/articleInterface";

const articleSchema = new Schema<IArticle>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  preview_image_src: {
    type: String,
    required: true,
  },
  article_link: {
    type: String,
    required: true,
  },
  content: [
    {
      subtitle: String,
      content: String,
      first_image_src: String,
      second_image_src: String,
      image_position: String,
    },
    {
      subtitle: String,
      content: String,
      first_image_src: String,
      second_image_src: String,
      image_position: String,
    },
    {
      subtitle: String,
      content: String,
      first_image_src: String,
      second_image_src: String,
      image_position: String,
    },
  ],
  stack: {
    backend: [
      {
        technologie_name: String,
        technologie_doc_link: String,
        technologie_logo_url: String,
      },
    ],
    frontend: [
      {
        technologie_name: String,
        technologie_doc_link: String,
        technologie_logo_url: String,
      },
    ],
    devops: [
      {
        technologie_name: String,
        technologie_doc_link: String,
        technologie_logo_url: String,
      },
    ],
    design: [
      {
        technologie_name: String,
        technologie_doc_link: String,
        technologie_logo_url: String,
      },
    ],
    product_management: [
      {
        technologie_name: String,
        technologie_doc_link: String,
        technologie_logo_url: String,
      },
    ],
  },
  thinks : {
    thinks_status : Boolean,
    thinks_content : String,
    thinks_people_List : [
        {
            name : String,
            job : String
        },
    ]
}
});

export const Article = model<IArticle>("posts", articleSchema);
