import { Schema, model } from "mongoose";
import { IAbout } from '../../interfaces/aboutInterface';

const aboutSchema = new Schema<IAbout>({
    title : {
        type : String,
        required : true
    },
    preview_image_src : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    body : {
        content : {
            type : String,
            required : true
        },
        profile_picture_src : {
            type : String,
            required : true
        },
    },
    skills : [
        {
            name : {
                type : String,
                required : true
            }
        }
    ],
    missions : [
        {
            job : {
                type : String,
                required : true
            },
            company : {
                type : String,
                required : true
            },
            date : {
                type : String,
                required : true
            }
        }
    ],
    stack: {
        stack_status: Boolean,
        stack: [
          {
            stack_name: String,
            technologies: [
              {
                technologie_name: String,
                technologie_doc_link: String,
                technologie_logo_url: String,
              },
            ],
          },
          {
            stack_name: String,
            technologies: [
              {
                technologie_name: String,
                technologie_doc_link: String,
                technologie_logo_url: String,
              },
            ],
          },
          {
            stack_name: String,
            technologies: [
              {
                technologie_name: String,
                technologie_doc_link: String,
                technologie_logo_url: String,
              },
            ],
          },
          {
            stack_name: String,
            technologies: [
              {
                technologie_name: String,
                technologie_doc_link: String,
                technologie_logo_url: String,
              },
            ],
          },
          {
            stack_name: String,
            technologies: [
              {
                technologie_name: String,
                technologie_doc_link: String,
                technologie_logo_url: String,
              },
            ],
          },
        ],
      },
})

export const About = model<IAbout>("about", aboutSchema)