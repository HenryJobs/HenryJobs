import { Request, Response } from "express";

import { reactivate } from "../../libs/softdelete";

export const reactivateReviews = async (req: Request, res: Response) => {
  const { idReview } = req.body;

  try {
    if (idReview) {
      const reactivateById = await reactivate({
        modelName: "reviews",
        id: idReview,
      });
      if (reactivateById) {
        res.status(200).json("reactivated");
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
