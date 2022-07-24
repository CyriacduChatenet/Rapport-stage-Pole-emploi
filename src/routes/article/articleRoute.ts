import express from 'express';
import { ArticleGetAllController, ArticleGetSingleController } from '../../controllers/article/articleGetController';
import { ArticlePostController } from '../../controllers/article/articlePostController';
import { ArticlePatchController } from '../../controllers/article/articlePatchController';
import { ArticleDeleteController } from '../../controllers/article/articleDeleteController';

export const articleRoute = express.Router()

articleRoute.get('/articles', ArticleGetAllController)

articleRoute.get('/article/:articleLink', ArticleGetSingleController);

articleRoute.post('/article', ArticlePostController);

articleRoute.patch('/article/:articleLink', ArticlePatchController)

articleRoute.delete('/article/articleLink', ArticleDeleteController)