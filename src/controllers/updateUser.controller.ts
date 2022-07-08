import { Request, Response } from "express";
import { userModel } from "../models/User";
import { userInterface } from "./interfaces/userInterface.controller";

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    name,
    lastName,
    userName,
    email,
    password,
    profileImage,
    banner,
    userTypes,
    technologies,
    country,
    city,
    followers,
    following,
    backFront,
    languages,
    otherStudies,
    workModality,
    curriculumCounter,
    premium,
    stars,
    acercaDe,
  } = req.body;

  try {
    const userActive = await userModel.findById(id);
    if (!userActive?.active) {
      return res.status(404).send("this user was deleted");
    }
    const updated: any = await userModel.findByIdAndUpdate(
      { _id: id },
      {
        name,
        lastName,
        userName,
        email,
        password,
        profileImage,
        banner,
        userTypes,
        technologies,
        country,
        city,
        followers,
        following,
        backFront,
        languages,
        otherStudies,
        workModality,
        curriculumCounter,
        premium,
        stars,
        acercaDe,
      }
    );

    res.status(200).json(updated);
  } catch (error) {
    console.error(error);
  }
};
