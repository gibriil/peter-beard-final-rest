import express from 'express';
import {
    CreateCharacter,
    FindOneCharacter,
    FindAllCharacters,
    UpdateCharacter,
    DeleteOneCharacter
} from '../controllers/character.controller.js';


export const router = express.Router();


//Create
router.post(`/`, CreateCharacter);

//Read
router.get(`/:id`, FindOneCharacter);
router.get(`/`, FindAllCharacters);

//Update
router.patch(`/`, UpdateCharacter);

//Delete
router.delete(`/`, DeleteOneCharacter);