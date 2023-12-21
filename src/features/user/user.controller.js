import UserModel  from "./user.model.js";
import  jwt  from "jsonwebtoken";
export default class UserController{
    signUp(req, res){
        const {name, email,password} = req.body;
        const user =  UserModel.signUp(name, email, 
          password);
            res.status(201).send(user);


    }
    signIn(req, res){
      const result = UserModel.signIn(req.body.email,
         req.body.password);
      if(!result){
        return res.status(400).send('Incorrect Credentials');
      }
      else{
        //1. create a token
        const token = jwt.sign({userID: result.id,
           email: result.email},
           'WkU1AS8Kx3QX57pPgiVQzQ2YH0L0dog8',
            {
          expiresIn: '3h',
        });

        //2. send token
        res.status(200).send(token);
      }
    }
}