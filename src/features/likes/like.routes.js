import express from 'express';
import LikeController from './like.controller.js';

const likeRouter = express.Router();
const likeController = new LikeController();

likeRouter.get('/:id', likeController.getLikes);
likeRouter.get('/toggle/:id', likeController.toggleLikes);

export default likeRouter;