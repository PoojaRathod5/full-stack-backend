//creatin model for declaring schema of Users
const mongoose = require("mongoose");

const userSchema= mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    password: String,
    age: Number,
    city: String,
    is_married: boolean
})

//delcaring model
const UserModel= mongoose.model("user",userSchema);

module.exports = {
    UserModel
}