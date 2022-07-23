import { Request, Response } from 'express';
import { Article } from '../../models/article/articleModel';

export const ArticlePatchController =async (request : Request, response : Response) => {
    try {
        const updateArticle = await Article.updateOne(
            { article_url: request.params.article_url },
            {
                $set: {},
            }
        );
        response.status(200).json(updateArticle);
    } catch (err) {
        response.status(500).json({ message: err });
    }
}