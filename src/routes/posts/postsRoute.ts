import express from 'express';
import { PostGetAllController, PostGetSingleController } from '../../controllers/posts/postGetController';
import { PostPostController } from '../../controllers/posts/postPostController';
import { PostPutController } from '../../controllers/posts/postPutController';
import { postDeleteController } from '../../controllers/posts/postDeleteController';

export const postRoute = express.Router();

postRoute.get('/posts', PostGetAllController)

postRoute.get('/post/:postUrl', PostGetSingleController);

postRoute.post('/posts', PostPostController);

postRoute.put('/post/:postUrl', PostPutController);

postRoute.delete('/post/postUrl', postDeleteController);