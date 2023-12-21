import LikeModel from "./like.model.js";

export default class LikeController{

    getLikes(req, res){
        const postID = req.params.id;
        const likes = LikeModel.get(postID);
         return res.status(200).send(likes);
    }

    toggleLikes(req,res,next){

        try{
        const userID = req.userID;
        const postID = req.params.id;
        const result = LikeModel.toggle(userID, postID);
            
          return res.status(200).send(result);
       } 
      catch(err){
            next(err);
      }     
}
}