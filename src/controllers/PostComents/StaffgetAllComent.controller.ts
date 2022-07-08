import { Request, Response } from "express";
import { Coments, postComent } from "../../models/postComent";

export const staffgetAllComents = async (req: Request, res: Response) => {
  try {
    let coments: Coments[];

    coments = await postComent
      .find()
      .populate("comentUser")
      .populate("postUser");

    if (coments) {
      res.status(200).json(coments);
    }
  } catch (err) {
    console.error(err);
  }
};
