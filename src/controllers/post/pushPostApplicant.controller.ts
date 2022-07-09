import { Request, Response } from "express";
import { postModel } from "../../models/Post";

export const pushPostApplicant = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId, step } = req.body;

  try {
    const post = await postModel.findById(id);
    if (!post?.active) {
      res.status(404).json("this item has been removed");
    } else {
      if (!post?.applicants.includes(userId)) {
        await post?.updateOne({
          $push: { applicants: { userId: userId, step: step } },
        });
      }

      res.status(200).json(post);
    }
  } catch (err) {
    console.error(err);
  }
};
