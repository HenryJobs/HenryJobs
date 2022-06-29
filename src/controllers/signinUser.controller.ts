import { Request, Response, NextFunction } from "express";
import { userModel, User } from "../models/User";

import jwt from "jsonwebtoken";

const { TOKEN_SECRET } = process.env

export const signin = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    const user = await userModel.findOne({ email: email });
    console.log("este es el user de findOne por email -> ", user)

    //valida usuario
    if (!user) {

        return res.status(400).send("Incorrect user information (code: 001)");
    }

    // ver por qué carajo no funciona!!
    const correctPassword: boolean = await user.validatePassword(password);
    console.log("password -> ", correctPassword);
    if (!correctPassword)
        return res.status(400).send("Incorrect user information (code: 002)");

    //Si ambos son correctos se genera un token que expira en 24hrs
    const token: string = jwt.sign(
        { id: user._id },
        TOKEN_SECRET || "TOKENTEST",
        { expiresIn: 60 * 60 * 24 }
    );

    res
        .header("authToken", token)
        .send(
            `Welcome
             ${user.name} 
             ${user.lastName}!`
        );
};
