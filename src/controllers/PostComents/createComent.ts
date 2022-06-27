import { Request, Response } from "express";
import { Coments, postComent } from '../../models/postComent';

export const createComent = async (req: Request, res: Response) => {

    const { comentUser, text } = req.body

    try {

        const coment: Coments | null = await postComent.findOne({
            $and: [{ text: text }, { comentUser: comentUser }],
        });

        const comentCreated: Coments = await postComent.create({
            comentUser,
            text
        })

        if(comentCreated){
            res.status(201).json(coment)
        }

    } catch(err){
        console.error(err)
    };
};