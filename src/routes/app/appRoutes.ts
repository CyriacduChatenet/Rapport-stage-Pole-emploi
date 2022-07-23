import express from 'express';
import { appRouterController } from '../../controllers/app/appRouterController';

export const appRoute = express.Router();

appRoute.get('/', appRouterController)