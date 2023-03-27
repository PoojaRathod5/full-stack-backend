const express = require("express");
const userRouter = express.Router();


userRouter.post("/register", async (req, res) => {
    const { email, pass, location, age } = req.body;
    console.log(email, pass, location, age);
})

module.exports = {
    userRouter
}