import { Request, Response, NextFunction } from "express";
import { userModel, User } from "../models/User";

import jwt from "jsonwebtoken";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { firstName, lastName, userName, email, password } = req.body;

  try {
    const user = await userModel.create({
      firstName,
      lastName,
      userName,
      email,
      password,
    });

    //crea un token y lo manda al header
    const token: string = jwt.sign(
      { _id: user._id },
      process.env.TOKEN_SECRET || "TOKENTEST"
    );
    res.header("authToken", token).status(201).json(user);
  } catch (error) {
    console.error(error);
  }
};
