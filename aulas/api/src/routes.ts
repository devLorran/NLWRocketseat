import { Router } from 'express';
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';
import { SendEmailController } from './controllers/SendEmailController';
import { SurveysController } from './controllers/SurveyController';
import { UserController } from './controllers/UserController';
const router = Router();

const userController = new UserController();
const SurveyController = new SurveysController();

const sendEmailController = new SendEmailController();
const answerController = new AnswerController();
const npsController = new NpsController();
//Criando a rota
router.post("/users", userController.create);
router.post("/surveys", SurveyController.create);
router.get("/surveys", SurveyController.show);
router.post("/sendEmail", sendEmailController.execute);
router.get("/answers/:value", answerController.execute);
router.get("/nps/:survey_id", npsController.execute);
export { router };