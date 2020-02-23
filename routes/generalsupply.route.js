import express from 'express';
import {
    GeneralSupply
} from '../models/generalsupply.model.js';


export const router = express.Router();

router.get(`/`, (req, res) => {
    GeneralSupply.find().then(result => {
        res.jsonp(result);
    }).catch(error => console.log(error));
});

router.post('/', (req, res) => {
    let supply = new GeneralSupply({
        name: req.body.name,
        weight: req.body.weight,
        cost: req.body.cost,
        info: req.body.info
    });
    supply.save().then(result => {
        res.jsonp(result);
    }).catch(error => console.log(error));
});