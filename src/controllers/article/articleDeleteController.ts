import { Request, Response } from 'express';
import { Article } from '../../models/article/articleModel';

export const ArticleDeleteController = async (request : Request, response : Response) => {
    try {
        const deleteArticle = await Article.remove({
            article_url: request.params.articleUrl,
        });
        response.status(404).json(deleteArticle);
    } catch (err) {
        response.status(500).json({ message: err });
    }
}