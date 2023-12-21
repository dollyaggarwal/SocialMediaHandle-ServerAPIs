import express from 'express';
import PostController from './post.controller.js';
import { upload } from '../../middlewares/fileupload.middleware.js';


const postRouter = express.Router();
const postController = new PostController();

postRouter.get('/userpost',postController.getPostByUser);
postRouter.get('/:id',postController.getPost);
postRouter.get('/',postController.getAllPost);
postRouter.post('/create',upload.single('imageUrl'), postController.createPost);
postRouter.post('/filter',postController.filterPost);
postRouter.delete('/delete/:id',postController.deletePost);
postRouter.put('/update/:id',upload.single('imageUrl'), postController.updatePost);

export default postRouter;