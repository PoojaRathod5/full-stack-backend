const express = require("express");
const postRouter = express.Router();
const jwt = require("jsonwebtoken");
const { PostModel } = require("../model/post.model");

postRouter.get("/", async(req,res)=>{
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token,"masai");
    try{
        if(decoded){
            const posts= await PostModel.find({"userID":decoded.userID});
            res.status(200).send(posts);
        }
    }catch(err){
        res.status(400).send(err.message);
    }
})
