import Mongoose from "mongoose";
const Schema = Mongoose.Schema;

const characterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    kindred: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    character_type: {
        type: String,
    },
    gender: {
        type: String,
    },
    height: {
        type: String
    },
    weight: {
        type: String
    },
    age: {
        type: String
    },
    hair: {
        type: String
    },
    adventure_points: {
        type: Number,
        required: true
    },
    atts: {
        strength: {
            type: Number,
            required: true
        },
        constitution: {
            type: Number,
            required: true
        },
        dexterity: {
            type: Number,
            required: true
        },
        speed: {
            type: Number,
            required: true
        },
        luck: {
            type: Number,
            required: true
        },
        intelligence: {
            type: Number,
            required: true
        },
        wizardry: {
            type: Number,
            required: true
        },
        charisma: {
            type: Number,
            required: true
        }
    },
    wtPossible: {
        type: Number,
        required: true
    },
    wtCarried: {
        type: Number,
        required: true
    },
    talents: {
        type: Array,
        required: true
    }
});

export const Character = Mongoose.model(`Character`, characterSchema);