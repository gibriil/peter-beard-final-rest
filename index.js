import express from "express";
import bodyParser from "body-parser";
import Mongoose from "mongoose";

import {
    router
} from './router.js';
import {
    errorLog
} from '../helpers/functions.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/', router);

app.use((error, req, res, next) => {
    errorLog(error);
    res.status(error.statusCode || 500).json({
        message: error.message,
        data: error.data
    });
});

Mongoose.connect('mongodb+srv://dgm4790:tcU1XY1avshV1P6j@restfulcrud-hnfkx.mongodb.net/app').then((r) => {
    app.listen(PORT);
}).catch(errorLog);