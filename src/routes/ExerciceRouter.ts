import express from 'express';
import Exercice from '../controllers/Exercice';
const ExerciceRouter = express.Router({mergeParams: true});

ExerciceRouter.post('/:id/correction', Exercice.postExerciceCorrection);   

export default ExerciceRouter;