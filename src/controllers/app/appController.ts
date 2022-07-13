import { Response } from "express";
import path from 'path';

export const appController = (response: Response) => {
    response.status(200).sendFile(path.join(__dirname,'../../../client/dist/index.html'));
};