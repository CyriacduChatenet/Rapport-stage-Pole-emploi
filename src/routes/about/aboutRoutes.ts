import express from 'express';
import { AboutGetController } from '../../controllers/about/aboutGetController';
import { AboutPostController } from '../../controllers/about/aboutPostController';
import { AboutPatchController } from '../../controllers/about/aboutPatchController';
import { AboutDeleteController } from '../../controllers/about/aboutDeleteController';

export const aboutRoute = express.Router()

aboutRoute.get('/about', AboutGetController)

aboutRoute.post('/about', AboutPostController);

aboutRoute.patch('/about', AboutPatchController);

aboutRoute.delete('/about', AboutDeleteController);