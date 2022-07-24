import { Request, Response } from "express"
import { About } from '../../models/about/aboutModel';

export const AboutGetController = async (request:Request, response: Response) => {
    try {
        const allAbout = await About.find();
        response.status(200).json(allAbout);
    } catch (err) {
        response.status(500).json({ message: err });
    }
};