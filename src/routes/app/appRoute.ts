import express from 'express';
import { appController } from '../../controllers/app/appController';

export const appRouter = express.Router();

appRouter.get('/', appController);