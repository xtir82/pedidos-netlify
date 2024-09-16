import express, { application } from "express";
import ServerlessHttp from "serverless-http";


const app = express();

//Routes

app.get("/", (req, res)=>{
    return res.json({
        messages:"hello world"
    })
})


const handler = ServerlessHttp(app)

module.exports.handler = async(event, context) => {
    const result = await handler(event, context);
    return result;
}