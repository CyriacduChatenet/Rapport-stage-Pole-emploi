import { Request, Response } from "express"
import path from "path"

export const appRouterController = (request : Request, response : Response) => {
    response.status(200).sendFile(path.join(__dirname, '../../../client/build/index.html'))
}