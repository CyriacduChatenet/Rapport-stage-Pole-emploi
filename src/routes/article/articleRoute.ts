import express from 'express';
import { ArticleGetAllController, ArticleGetSingleController } from '../../controllers/article/articleGetController';
import { ArticlePostController } from '../../controllers/article/articlePostController';
import { ArticlePatchController } from '../../controllers/article/articlePatchController';
import { ArticleDeleteController } from '../../controllers/article/articleDeleteController';

export const articleRoute = express.Router()

articleRoute.get('/articles', ArticleGetAllController)

articleRoute.get('/article/:articleUrl', ArticleGetSingleController);

articleRoute.post('/articles', ArticlePostController);

articleRoute.patch('/article/:articleUrl', ArticlePatchController)

articleRoute.delete('/article/articleUrl', ArticleDeleteController)