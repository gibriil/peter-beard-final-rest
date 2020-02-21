import express from 'express';
import {
    Character
} from './models/character.model.js';

export const router = express.Router();

router.get('/', (req, res) => {
    res.jsonp({
        key: 'value'
    });
});

router.get(`/get-character/:id`, (req, res) => {
    console.log(req.params.id);
    Character.findById(req.params.id).then(result => {
        res.jsonp(result);
    }).catch(error => console.log(error));
});

router.post(`/create-character`, (req, res) => {
    let character = new Character({
        name: req.body.name,
        level: req.body.level,
        xp: req.body.xp
    });
    character.save().then(result => {
        res.send('created');
    }).catch(error => console.log(error));
});

router.delete(`/delete-character`, (req, res) => {
    console.log(req.body.id);
    Character.findByIdAndDelete(req.body.id).then(result => {
        res.send('deleted');
    }).catch(error => console.log(error));
});