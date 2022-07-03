import { unlink } from "fs-extra";
import { Request, Response, NextFunction } from "express";
import { userModel, User } from "../models/User";
import { sendMail } from "./config/emailer";
import { uploadImage } from "../cloudinary";
import { UploadedFile } from "express-fileupload";

import jwt from "jsonwebtoken";

const { TOKEN_SECRET } = process.env;

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
    backFront,
    languages,
    otherStudies,
    workModality,
    curriculumCounter,
    premium,
    stars,
    acercaDe
  } = req.body;

  try {
    if (!name || !userName || !email || !password)
      res.status(400).json({ msg: "Some fields are required" });

    const user = await userModel.create({
      name,
      lastName,
      userName,
      email,
      password,
      userTypes,
      profileImage,
      banner,
      technologies,
      country,
      city,
      backFront,
      languages,
      otherStudies,
      workModality,
      curriculumCounter,
      premium,
      stars,
      acercaDe
    });

    if (req.files) {
      const { tempFilePath } = req.files?.profileImage as UploadedFile;
      const banner = req.files?.banner as UploadedFile;

      if (tempFilePath) {
        const result = await uploadImage(tempFilePath);
        user.profileImage = {
          public_id: result.public_id,
          secure_url: result.secure_url,
        };

        await unlink(tempFilePath);
      }

      if (banner.tempFilePath) {
        const result = await uploadImage(banner.tempFilePath);
        user.banner = {
          public_id: result.public_id,
          secure_url: result.secure_url,
        };
      }

      await unlink(banner.tempFilePath);
    }

    await user.save();

    // crea un token y lo manda al header
    const token: string = jwt.sign(
      {
        id: user._id,
        type: user.userTypes,
        premium: user.premium,
        name: user.name,
        lastname: user.lastName,
      },
      TOKEN_SECRET || "TOKENTEST",
      { expiresIn: 60 * 60 * 24 }
    );

    res.header("authToken", token).status(201).json(user);
    // res.status(201).json(user)
  } catch (error) {
    console.error(error);
  }
};
