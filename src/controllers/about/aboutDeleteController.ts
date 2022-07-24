import { Request, Response } from 'express';
import { About } from '../../models/about/aboutModel';

export const AboutDeleteController = async (request : Request, response : Response) => {
    try {
        const deleteAbout = await About.remove({
            About_url: request.params.aboutUrl,
        });
        response.status(404).json(deleteAbout);
    } catch (err) {
        response.status(500).json({ message: err });
    }
}