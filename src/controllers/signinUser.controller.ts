import { Request, Response, NextFunction } from "express";
import { userModel } from "../models/User";

import jwt from "jsonwebtoken";

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email: email });

  //valida usuario
  if (!user)
    return res.status(400).send("Incorrect user information (code: 001)");

  const correctPassword: boolean = await user.validatePassword(password);
  console.log("averpasword", correctPassword);
  if (!correctPassword)
    return res.status(400).send("Incorrect user information (code: 002)");

  //Si ambos son correctos se genera un token que expira en 24hrs
  const token: string = jwt.sign(
    { _id: user._id },
    process.env.TOKEN_SECRET || "TOKENTEST",
    {
      expiresIn: 60 * 60 * 24,
    }
  );

  res
    .header("authToken", token)
    .send(`Welcome ${user.firstName} ${user.lastName}!`);
};
