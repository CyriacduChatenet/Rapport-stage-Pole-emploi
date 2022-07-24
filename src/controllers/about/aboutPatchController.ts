import { Request, Response } from 'express';
import { About } from '../../models/about/aboutModel';

export const AboutPatchController = async (request : Request, response : Response) => {
    try {
        const updateAbout = await About.updateOne(
            { About_url: request.params.about_url },
            {
                $set: {
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
                },
            }
        );
        response.status(200).json(updateAbout);
    } catch (err) {
        response.status(500).json({ message: err });
    }
}