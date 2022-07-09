import { Request, Response } from "express";
import { postModel } from "../../models/Post";

export const updatePostGral = async (req: Request, res: Response) => {

  const { id } = req.params;
  const {
    text,
    imgVideo,
    date,
    image,
    workModality,
    technologies,
    backFront,
    country,
  } = req.body;

  try {

    const post = await postModel.findById(id);
    if (!post?.active) {
      res.status(404).json("this item has been removed");
    } else {

      const updated: any = await postModel.findByIdAndUpdate(
        { _id: id },
        {
          text,
          imgVideo,
          date,
          image,
          workModality,
          technologies,
          backFront,
          country,
        }
      );

      res.status(200).json(updated);
    }
  } catch (err) {
    console.error(err);
  }
};
