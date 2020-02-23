import express from 'express';
import {
    router as CharacterRouter
} from './routes/character.route.js';
import {
    router as GeneralSupplyRouter
}
from './routes/generalsupply.route.js';


export const router = express.Router();

router.use(`/characters`, CharacterRouter);

router.use(`/generalsupply`, GeneralSupplyRouter)