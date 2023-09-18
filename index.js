const express = require("express")
const app = express()
app.use(express.json())

const cors = require("cors")
app.use(cors({
    origin: '*'
}))

const dotenv = require("dotenv")
const route = require("./router/userRouter")
dotenv.config()

app.use("/api", route)

const port = process.env.port || 4040
app.listen(port,() => {
    try {
        console.log("server running successfully");
    }
    catch(err) {
        console.log('Error');
    }
})
