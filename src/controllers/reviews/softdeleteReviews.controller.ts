import { Request, Response } from "express";

import { softDelete } from "../../libs/softdelete";

export const softdeleteReviews = async (req: Request, res: Response) => {
  const { idReview } = req.params;

  try {
    if (idReview) {
      const deleteById = await softDelete({
        modelName: "reviews",
        id: idReview,
      });
      if (deleteById) {
        res.status(200).json(deleteById);
      } else {
        res.status(404).send("no review found");
      }
    } else {
      res.status(404).send("falta data");
    }
  } catch (err) {
    console.error(err);
  }
};
