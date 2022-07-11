import { unlink } from "fs-extra";
import { Request, Response, NextFunction } from "express";
import { userModel, User } from "../models/User";
import { sendMail, sendPassword } from "./config/emailer";
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
    province,
    backFront,
    languages,
    otherStudies,
    workModality,
    curriculumCounter,
    premium,
    stars,
    acercaDe,
    linkedin,
    github,
    gmail
  } = req.body;


  try {
    
    let emailUser = await userModel.findOne({
      email: email,
      active: true
    });

    if (!name || !userName || !email || !password) {
      return res.status(400).json({ msg: "Some fields are required" });
    }

      if(email === emailUser?.email){  
        console.log("email forro", email)
        return res.status(200).send("next")
    }

    else {

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
      province,
      backFront,
      languages,
      otherStudies,
      workModality,
      curriculumCounter,
      premium,
      stars,
      acercaDe,
      linkedin,
      github,
      gmail
    });

    sendMail(email)
    sendPassword(email, password)


    if (req.files) {
      const profileImage = req.files?.profileImage as UploadedFile;
      const banner = req.files?.banner as UploadedFile;

      if (profileImage.tempFilePath) {
        const result = await uploadImage(profileImage.tempFilePath);
        user.profileImage = {
          public_id: result.public_id,
          secure_url: result.secure_url,
        };
        await unlink(profileImage.tempFilePath);
      }

      if (banner.tempFilePath) {
        const result = await uploadImage(banner.tempFilePath);
        user.banner = {
          public_id: result.public_id,
          secure_url: result.secure_url,
        };
        await unlink(banner.tempFilePath);
      }

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
    }
    console.log("ata aca bro")
  } catch (error) {
    console.error(error);
  }
};
