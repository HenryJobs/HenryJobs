import { Request, Response, NextFunction } from "express";
import { userModel } from "../models/User";
import { sendMail, sendPassword } from "./config/emailer";
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
		allStars,
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

		if (email === emailUser?.email) {
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
				city,
				backFront,
				languages,
				otherStudies,
				workModality,
				curriculumCounter,
				premium,
				stars,
				allStars,
				acercaDe,
				linkedin,
				github,
				gmail
			});

			sendMail(email)
			sendPassword(email, password)

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
