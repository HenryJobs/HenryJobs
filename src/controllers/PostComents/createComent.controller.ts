import { Request, Response } from "express";
import { Coments, postComent } from '../../models/postComent';

export const createComent = async (req: Request, res: Response) => {

    const { comentUser, text, postUser, likes, liked } = req.body

    try {

        // const coment: Coments | null = await postComent.findOne({
        //     $and: [{ text: text }, { comentUser: comentUser }],
        // });

        const comentCreated: Coments = await postComent.create({
            comentUser,
            text,
            postUser,
            likes,
            liked
        })

        if(comentCreated){
            res.status(201).json(comentCreated)
        }

    } catch(err){
        console.error(err)
    };
};