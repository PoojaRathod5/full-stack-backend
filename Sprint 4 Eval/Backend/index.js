const express = require("express");
const app = express();
const { connection } = require("./db");
require("dotenv").config();
app.use(express.json());

app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("connected to db");
    } catch (err) {
        console.log("connection to db failed");
        console.log(err);
    }
    console.log(`Server isconnected at port ${process.env.port}`);
})