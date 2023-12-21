import CommentModel from "./comment.model.js";

export class CommentController{

    addComment(req, res){
        const postID = req.params.id;  
        const {comment} = req.body;
       const postedComment= CommentModel.add(postID,comment);
        res.status(201).send(postedComment);
    }

    getComment(req, res){     
    const postID = req.params.id;
    const  result = CommentModel.get(postID);
    res.status(200).send(result);
    }

    deleteComment(req, res){
        const id = req.params.id;
        CommentModel.delete(id);
        return res.status(200).send('Comment is removed')
    }

    updateComment(req, res){
        const id = req.params.id;
        const {comment} = req.body;
        CommentModel.update(comment,id);
        const updatedComment = CommentModel.getById(id);
        res.status(200).send(updatedComment);
    }
}