
//1. Import express
import express from "express";
import UserController from "./user.controller.js";

//2. Initialise Express router
const userRouter = express.Router();

const userController = new UserController();

//localhost/api/users

userRouter.post('/signup',userController.signUp);
userRouter.post('/signin',userController.signIn);

export default userRouter;
