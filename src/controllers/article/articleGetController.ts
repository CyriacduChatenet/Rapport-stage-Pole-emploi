import { Request, Response } from "express"
import { Article } from '../../models/article/articleModel';

export const ArticleGetAllController = async (request:Request, response: Response) => {
    try {
        const allArticles = await Article.find();
        response.status(200).json(allArticles);
    } catch (err) {
        response.status(500).json({ message: err });
    }
};

export const ArticleGetSingleController = async (request : Request, response : Response) => {
    try {
        const article = await Article.find({
            Article_url: request.params.ArticleUrl,
        });
        response.status(200).json(article);
    } catch (err) {
        response.status(500).json({ message: err });
    }
};