import express from 'express';
import {
    Character
} from './models/character.model.js';

export const router = express.Router();

router.post(`/characters`, (req, res) => {
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
    Character.findById(req.body._id).then(character => {
        character.name = req.body.name || character.name;
        character.kin = req.body.kin || character.kin;
        character.type = req.body.type || character.type;
        character.sex = req.body.sex || character.sex;
        character.lvl = req.body.lvl || character.lvl;
        character.age = req.body.age || character.age;
        character.height = req.body.height || character.height;
        character.weight = req.body.weight || character.weight;
        character.primeAtts = {
            ST: req.body.ST || character.primeAtts.ST,
            IQ: req.body.IQ || character.primeAtts.IQ,
            LK: req.body.LK || character.primeAtts.LK,
            CON: req.body.CON || character.primeAtts.CON,
            DEX: req.body.DEX || character.primeAtts.DEX,
            CHR: req.body.CHR || character.primeAtts.CHR,
        };
        character.personalAdds = req.body.personalAdds || character.personalAdds;
        character.weightPossible = req.body.weightPossible || character.weightPossible;
        character.weightCarried = req.body.weightCarried || character.weightCarried;
        character.gp = req.body.gp || character.gp;
        character.ap = req.body.ap || character.ap;
        character.weapons = req.body.weapons || character.weapons;
        character.armour = req.body.armour || character.armour;
        character.languages = req.body.languages || character.languages;
        character.magic = req.body.magic || character.magic;
        character.other = req.body.other || character.other;

        character.save().then(result => {
            res.jsonp(result);
        }).catch(error => console.log(error));
    });
});


router.delete(`/characters`, (req, res) => {
    console.log(req.body._id);
    Character.findByIdAndDelete(req.body._id).then(result => {
        res.send('deleted');
    }).catch(error => console.log(error));
});