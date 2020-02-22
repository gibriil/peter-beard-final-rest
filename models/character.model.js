import Mongoose from "mongoose";
const Schema = Mongoose.Schema;

const weaponSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    dice: {
        type: Number,
        required: true,
    },
    adds: {
        type: Number,
        required: true,
    }
});
const armourSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    hits: {
        type: Number,
        required: true
    }
});
const languageSchema = new Schema({
    language: {
        type: String,
        required: true
    }
});
const spellSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    cost: {
        type: String,
        required: true,
    },
    range: {
        type: Number,
    }
});
const characterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    kin: {
        type: String,
        required: true,
        enum: ['human', 'dwarf', 'elf', 'fairy', 'hobbit', 'leprechaun'],
        default: 'human'
    },
    type: {
        type: String,
        required: true,
        enum: ['warrior', 'wizard', 'rouge', 'warrior-wizard']
    },
    sex: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    lvl: {
        type: Number,
        required: true,
        default: 1
    },
    age: Number,
    height: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    primeAtts: {
        ST: {
            type: Number,
            required: true
        },
        IQ: {
            type: Number,
            required: true
        },
        LK: {
            type: Number,
            required: true
        },
        CON: {
            type: Number,
            required: true
        },
        DEX: {
            type: Number,
            required: true
        },
        CHR: {
            type: Number,
            required: true
        }
    },
    personalAdds: {
        type: Number,
        required: true
    },
    weightPossible: {
        type: Number,
        required: true
    },
    weightCarried: {
        type: Number,
        required: true,
        default: 0
    },
    gp: {
        type: Number,
        required: true,
    },
    ap: {
        type: Number,
        required: true,
        default: 0
    },
    weapons: [weaponSchema],
    armour: [armourSchema],
    languages: [languageSchema],
    magic: [spellSchema],
    other: {
        type: String,
        // required: true
    }
});

export const Character = Mongoose.model('Character', characterSchema);