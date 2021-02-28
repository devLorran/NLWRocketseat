import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import {  SurveysRepository } from "../repositories/SurveysRepository";

class SurveysController {
    findOne: any;
    async create(request: Request, response: Response){
        const newLocal = request.body;
        const { title, description } = newLocal;

        const surveysRepository = getCustomRepository(SurveysRepository);

        const survey = surveysRepository.create({
            title,
            description
        });

        await surveysRepository.save(survey);

        return response.status(201).json(survey);
    }

    async show(request: Request, response: Response){
        const surveysRepository = getCustomRepository(SurveysRepository);

        const all = await surveysRepository.find();

        return response.json(all);
    }
}

export { SurveysController };