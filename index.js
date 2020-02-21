import express from "express";
import bodyParser from "body-parser";
import Mongoose from "mongoose";

import {
    router
} from './router.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/', router);

Mongoose.connect('mongodb+srv://dgm4790:tcU1XY1avshV1P6j@restfulcrud-hnfkx.mongodb.net/app').then((r) => {
    app.listen(PORT);
    console.log(`Running server on localhost:${PORT}`)
}).catch(error => console.log(error));