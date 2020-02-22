import express from 'express';
import {
    Character
} from './models/character.model.js';

export const router = express.Router();

router.post(`/characters`, (req, res) => {
    let character = new Character({
        name: req.body.name,
        level: req.body.level,
        xp: req.body.xp
    });
    character.save().then(result => {
        res.send('created');
    }).catch(error => console.log(error));
});


router.get(`/characters/:id`, (req, res) => {
    console.log(req.params.id);
    Character.findById(req.params.id).then(result => {
        res.jsonp(result);
    }).catch(error => console.log(error));
});


router.get(`/characters`, (req, res) => {
    Character.find().then(result => {
        res.jsonp(result);
    }).catch(error => console.log(error));
});


router.patch(`/characters`, (req, res) => {
    Character.findById(req.body._id).then(character => {
        if (character) {
            let character = new Character({
                name: req.body.name,
                level: req.body.level,
                xp: req.body.xp
            });
        }
    });
});


router.delete(`/characters`, (req, res) => {
    console.log(req.body._id);
    Character.findByIdAndDelete(req.body._id).then(result => {
        res.send('deleted');
    }).catch(error => console.log(error));
});