import express from "express";
import ServerlessHttp from "serverless-http";
import handlebars from "express-handlebars";
import { __dirname1 } from "./src/utils";

import Orders from './src/routes/orders.routes'

const app = express();
//const router = express.Router();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname1 + '/public'));
app.use(morgan("tiny"));

//View Engine
app.engine("handlebars", handlebars.engine());
app.set('views', __dirname1 + '/views');
app.set("view engine", "handlebars");

//Routes
app.use('/orders', Orders);

/*router.get('/orders', (req, res) => {
    res.json({
        messages: "hello world!"
    });
});*/

//app.use('/', router)

const handler = ServerlessHttp(app);

module.exports.handler = async(event, context) => {
    const result = await handler(event, context);
    return result;
}