import { Request, Response } from "express";
import { postComent } from "../../models/postComent";

export const updateComent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { text } = req.body;

  try {
    const comment = await postComent.findOne({ _id: id });
    if (!comment?.active) {
      res.status(404).send("this item has been removed");
    } else {
      if (id) {
        const update = await postComent.findByIdAndUpdate(
          { _id: id },
          {
            text: text,
          }
        );

        res.status(200).json(update);
      }
    }
  } catch (err) {
    console.error(err);
  }
};
