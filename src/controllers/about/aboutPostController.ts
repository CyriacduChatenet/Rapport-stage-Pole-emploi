import { Request, Response } from "express";
import { About } from '../../models/about/aboutModel';

export const AboutPostController = async (
  request: Request,
  response: Response
) => {
  const newAbout = await new About({
    title: request.body.title,
    preview_image_src : request.body.preview_image_src,
    location : request.body.location,
    body : {
        content : request.body.body.content,
        profile_picture_src : request.body.body.profile_picture_src,
    },
    skills : request.body.skills,
    missions : request.body.missions,
    stack: {
        stack_status: request.body.stack.stack_status,
        stack: request.body.stack.stack,
      },
  })
  try {
    const savedAbout = await newAbout.save();
    response.status(200).json(savedAbout);
  } catch (err) {
    response.status(500).json({ message: err });
  }
};
