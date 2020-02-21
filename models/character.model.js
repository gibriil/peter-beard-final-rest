import Mongoose from "mongoose";
const Schema = Mongoose.Schema;

const characterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    xp: {
        type: Number,
        required: true
    }
});

export const Character = Mongoose.model(`Character`, characterSchema);