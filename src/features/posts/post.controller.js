import PostModel from "./post.model.js";

export default  class PostController{

    getPost(req, res){
        const postID = req.params.id;
        const post = PostModel.get(postID);
        if(!post){
          res.status(404).send("Post not found");
        }
        else{
          return res.status(200).send(post);
        }
    }

    getPostByUser(req, res){  
        const userID = req.userID;
        const post = PostModel.getByUser(userID);
        if(!post){
          res.status(404).send("Post do not found");
        }
        else{
          return res.status(200).send(post);
        }
    }

    getAllPost(req,res){
        const posts = PostModel.getAll();
        res.status(200).send(posts);
    }

    createPost(req, res){
        const {caption} = req.body;
        const userID = req.userID;
        const imageUrl= req.file.filename;
        const newPost = {userID, caption, imageUrl};
        const createdPost = PostModel.create(newPost);
        res.status(201).send(createdPost);
    }

    updatePost(req,res){
        const postID = req.params.id;
        const userID = req.userID;
        const {caption} = req.body;  
        const imageUrl = req.file.filename;
        PostModel.update(postID,userID,caption, imageUrl);
        const updatedPost = PostModel.get(postID);
        res.status(200).send(updatedPost);
    }

    filterPost(req, res) {
        const caption = req.query.caption;
        const result = PostModel.filter(caption);
        res.status(200).send(result);
    }

    deletePost(req, res){
        const userID = req.userID;
        const postID = req.params.id;
         PostModel.delete(userID, postID);
        return res.status(200).send('Post is removed');
    }
}