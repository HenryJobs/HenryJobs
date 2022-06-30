import { Request, Response, NextFunction } from "express";
import { userModel, User } from "../models/User";

import jwt from "jsonwebtoken";

const { TOKEN_SECRET } = process.env;

export const signinUser = async (req: Request, res: Response) => {
  try {
    const { email, password, userName } = req.body;

    let user;
    if (userName) {
      user = await userModel.findOne({ userName: userName });
    } else if (email) {
      user = await userModel.findOne({ email: email });
    } else {
      return res.status(404).send("Fill in the user information completely");
    }

    //valida usuario
    if (!user) {
      return res.status(400).send("Incorrect user information (code: 001)");
    }

    // Ya funciona :D!!
    const correctPassword: boolean = await user.validatePassword(password);

    if (!correctPassword)
      return res.status(400).send("Incorrect user information (code: 002)");

    //Si ambos son correctos se genera un token que expira en 24hrs
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
    console.log("user", user);
    res
      .header("authToken", token)
      .send(`Welcome ${user.name}  ${user.lastName}!`);
  } catch (error) {
    console.error(error);
  }
};
