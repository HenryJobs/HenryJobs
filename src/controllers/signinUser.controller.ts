import { Request, Response, NextFunction } from "express";
import { userModel, User } from "../models/User";

import jwt from "jsonwebtoken";

const { TOKEN_SECRET } = process.env;

export const signinUser = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;

		const user = await userModel.findOne({
			$or: [{ email }, { userName: email }],
		});

		if (!user) {
			//valida usuario
			return res.status(400).send("Incorrect user information (code: 001)");
		}
		if (!user?.active) {
			return res.status(400).send("This user is disabled");
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
				following: user.following,
			},
			TOKEN_SECRET || "TOKENTEST",
			{ expiresIn: 60 * 60 * 24 }
		);

		res.send(token);
	} catch (error) {
		console.error(error);
	}
};
