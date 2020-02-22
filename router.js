import express from 'express';
import {
    Character
} from './models/character.model.js';

export const router = express.Router();

router.post(`/characters`, (req, res) => {
    console.log(req.body);
    let character = new Character({
        name: req.body.name,
        kin: req.body.kin,
        type: req.body.type,
        sex: req.body.sex,
        lvl: req.body.lvl,
        age: req.body.age,
        height: req.body.height,
        weight: req.body.weight,
        primeAtts: {
            ST: req.body.ST,
            IQ: req.body.IQ,
            LK: req.body.LK,
            CON: req.body.CON,
            DEX: req.body.DEX,
            CHR: req.body.CHR,
        },
        personalAdds: req.body.personalAdds,
        weightPossible: req.body.weightPossible,
        weightCarried: req.body.weightCarried,
        gp: req.body.gp,
        ap: req.body.ap,
        weapons: req.body.weapons,
        armour: req.body.armour,
        languages: req.body.languages,
        magic: req.body.magic,
        other: req.body.other,
    });
    character.save().then(result => {
        res.jsonp(result);
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
    // Character.findById(req.body._id).then(character => {
    //     if (character) {
    //         let character = new Character({
    //             name: req.body.name,
    //             level: req.body.level,
    //             xp: req.body.xp
    //         });
    //     }
    // });
});


router.delete(`/characters`, (req, res) => {
    console.log(req.body._id);
    Character.findByIdAndDelete(req.body._id).then(result => {
        res.send('deleted');
    }).catch(error => console.log(error));
});