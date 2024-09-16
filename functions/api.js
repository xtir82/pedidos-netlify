import express from "express";
import ServerlessHttp from "serverless-http";

const app = express();
const router = express.Router();


router.get('/orders', (req, res) => {
    res.json({
        messages: "hello world!"
    });
});

app.use('/.netlify/functions/api', router)

const handler = ServerlessHttp(app);

module.exports.handler = async(event, context) => {
    const result = await handler(event, context);
    return result;
}