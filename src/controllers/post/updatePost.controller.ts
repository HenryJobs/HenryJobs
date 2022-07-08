import { Request, Response } from "express";
import { postModel } from "../../models/Post";
import { applicantsInterface, userInterface } from "../interfaces/userInterface.controller";

export const updatePost = async (req: Request, res: Response) => {
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
    userId,
    step,
  } = req.body;

  try {
    const post = await postModel.findById(id);
    if (!post?.active) {
      res.status(404).json("this item has been removed");
    } else {
      if (!post?.applicants.includes(userId)) {
        console.log("entré al if que agrega");
        console.log("este es el userId", userId);
        await post?.updateOne({
          $push: { applicants: [{ userId: userId, step: step }] },
        });
        console.log(post);
      }

      if (post?.applicants.includes(userId)) {
        console.log("entré al if que saca");
        await post?.updateOne({ $pull: { applicants: [{ userId, step }] } });
      }

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

      if (post?.applicants.includes(userId)) {
        console.log("entré al if que saca");
        await post?.updateOne({ $pull: { applicants: [{ userId, step }] } });
      }

      // res.status(200).json(updated)
      res.status(200).json(updated);
    }
  } catch (err) {
    console.error(err);
  }
};
