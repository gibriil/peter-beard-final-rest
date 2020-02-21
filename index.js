import express from 'express';
import Mongoose from 'mongoose';
import {
    router
} from './router.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use('/', router);

Mongoose.connect().then((r) => {
    app.listen(PORT);
}).catch(error => console.log(error));