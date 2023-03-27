const express = require("express");
const postRouter = express.Router();
const jwt = require("jsonwebtoken");
const { PostModel } = require("../model/post.model");

// get all posts
postRouter.get("/", async (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "masai");
    try {
        if (decoded) {
            const posts = await PostModel.find({ "userID": decoded.userID });
            res.status(200).send(posts);
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
})

//add a new post
postRouter.post("/add", async (req, res) => {
    try {
        const post = new PostModel(req.body);
        await post.save();
        res.status(200).send({ "msg": "A new post has been added" })
    } catch (err) {
        res.status(400).send(err.message);
    }
})

//update post
postRouter.post("/", async (req, res) => {
    try {
            
    } catch (err) {
        res.status(400).send(err.message);
    }
})

//delete a post
postRouter.post("/", async (req, res) => {
    try {

    } catch (err) {
        res.status(400).send(err.message);
    }
})
