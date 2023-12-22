import express from 'express';
import { CommentController } from './comment.controller.js';

const commentRouter = express.Router();
const commentController = new CommentController();

commentRouter.post('/addcomment/:id', commentController.addComment);
commentRouter.get('/:id',commentController.getComment);
commentRouter.delete('/delete/:id',commentController.deleteComment);
commentRouter.put('/update/:id',commentController.updateComment);

export default commentRouter;