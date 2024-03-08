import { Router } from 'express';
import { postRouter } from './post.routes.js';

const router = Router();

export const routes = router.use('/posts', postRouter);
