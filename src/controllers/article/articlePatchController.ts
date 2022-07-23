import { Request, Response } from 'express';
import { Article } from '../../models/article/articleModel';

export const ArticlePatchController =async (request : Request, response : Response) => {
    try {
        const updateArticle = await Article.updateOne(
            { article_url: request.params.ArticleUrl },
            {
                $set: {
                    title: request.body.title,
                    image_src: request.body.image_src,
                    category: request.body.category,
                    Article_url: request.body.Article_url,
                    about: {
                        what: request.body.about.what,
                        why: request.body.about.why,
                    },
                    inspirations: request.body.inspirations,
                    stack: {
                        backend: request.body.stack.backend,
                        frontend: request.body.stack.frontend,
                        devops: request.body.stack.devops,
                        design: request.body.stack.design,
                        product_management: request.body.stack.product_management,
                    },
                    wireframes: request.body.wireframes,
                    design_system: request.body.design_system,
                    links: request.body.links,
                },
            }
        );
        response.status(200).json(updateArticle);
    } catch (err) {
        response.status(500).json({ message: err });
    }
}