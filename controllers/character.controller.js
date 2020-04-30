import {
    Character
} from '../models/character.model.js';
import {
    errorCatch
} from '../helpers/functions.js';

export const CreateCharacter = (req, res) => {
    let character = new Character({
        name: req.body.name || "",
        kin: req.body.kin || "",
        type: req.body.type || "",
        sex: req.body.sex || "",
        lvl: req.body.lvl || 0,
        age: req.body.age || 0,
        height: req.body.height || "",
        weight: req.body.weight || 0,
        primeAtts: {
            ST: req.body.ST || 0,
            IQ: req.body.IQ || 0,
            LK: req.body.LK || 0,
            CON: req.body.CON || 0,
            DEX: req.body.DEX || 0,
            CHR: req.body.CHR || 0,
        },
        personalAdds: req.body.personalAdds || 0,
        weightPossible: req.body.weightPossible || 0,
        weightCarried: req.body.weightCarried || 0,
        gp: req.body.gp || 0,
        ap: req.body.ap || 0,
        weapons: req.body.weapons,
        armour: req.body.armour,
        languages: req.body.languages,
        magic: req.body.magic,
        other: req.body.other || "",
    });
    character.save().then(result => {
        res.jsonp(result);
    }).catch(errorCatch);
};

export const UpdateCharacter = (req, res) => {
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
    }).catch(errorCatch);
};

export const FindAllCharacters = (req, res) => {
    Character.find().then(result => {
        res.jsonp(result);
    }).catch(errorCatch);
};

export const FindOneCharacter = (req, res) => {
    Character.findById(req.params.id).then(result => {
        res.jsonp(result);
    }).catch(errorCatch);
};

export const DeleteOneCharacter = (req, res) => {
    Character.findByIdAndRemove(req.body._id).then(result => {
        res.send('deleted');
    }).catch(errorCatch);
};