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

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/', router);

app.use((error, req, res, next) => {
    errorLog(error);
    res.status(error.statusCode || 500).jsonp({
        message: error.message,
        data: error.data
    });
});

Mongoose.connect('mongodb+srv://dgm4790:tcU1XY1avshV1P6j@restfulcrud-hnfkx.mongodb.net/app').then((r) => {
    app.listen(PORT);
}).catch(errorLog);