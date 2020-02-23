import Mongoose from "mongoose";
const Schema = Mongoose.Schema;

const generalSupplySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    weight: {
        type: Number,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    info: {
        type: String,
    }
});

export const GeneralSupply = Mongoose.model('GeneralSupply', generalSupplySchema);