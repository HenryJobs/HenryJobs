import { Request, Response } from "express";
import { reactivate } from "../../libs/softdelete";

export const reactiveComent = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    if (id) {
      const deleteById = await reactivate({ modelName: "postComent", id });
      if (deleteById) {
        res.status(200).json("reactived");
      }
    }
  } catch (err) {
    console.error(err);
  }
};
