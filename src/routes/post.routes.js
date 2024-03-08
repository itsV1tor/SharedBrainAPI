import { Router } from 'express';
import { PostController } from '../controllers/PostController.js';

const router = Router();
const postController = new PostController();

export const postRouter =router
    .get('/', postController.index)
    .post('/create', postController.create)
