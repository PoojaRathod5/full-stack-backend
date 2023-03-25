const express = require("express")
const { default: mongoose } = require("mongoose");
const { userRouter } = require("./routes/user.routes");
const swaggerJSdoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express")
const app = express()

app.use(express.json());

app.use("/users", userRouter)
//definitions
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Learning Swagger",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:8080"
            }
        ]
    },
    apis: ["./routes/*.js"]
}

//specification
const swaggerSpec = swaggerJSdoc(options);

//building UI
app.use("/documentations", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.listen(8080, async () => {

    try {
        await mongoose.connect("mongodb+srv://pooja:poojarahul@cluster0.v5kbgb0.mongodb.net/swagger?retryWrites=true&w=majority");
        console.log("connected to db")
    } catch (err) {
        console.log(err);
    }
    console.log("server running")
})