import { Request, Response } from "express";
import { User, userModel } from "../models/User";
import { userId, userInterface } from "./interfaces/userInterface.controller";

export const getUserEmail = async (req: Request, res: Response) => {

	const { email } = req.query

	try {

		if (email) {
			const userEmail: userId | null = await userModel.findOne({
				email: email,
				active: true
			})
			if (userEmail) {
				const allEmail: userInterface = {
					_id: userEmail._id,
					name: userEmail.name,
					lastName: userEmail.lastName,
					userName: userEmail.userName,
					email: userEmail.email,
					password: userEmail.password,
					profileImage: userEmail.profileImage,
					userTypes: userEmail.userTypes,
					technologies: userEmail.technologies,
					country: userEmail.country,
					city: userEmail.city,
					backFront: userEmail.backFront,
					languages: userEmail.languages,
					otherStudies: userEmail.otherStudies,
					curriculumCounter: userEmail.curriculumCounter,
					counterIncome: userEmail.counterIncome,
					workModality: userEmail.workModality,
					followers: userEmail.followers,
					following: userEmail.following,
					banner: userEmail.banner,
					acercaDe: userEmail.acercaDe,
					premium: userEmail.premium,
					stars: userEmail.stars,
					allStars: userEmail.allStars,
					linkedin: userEmail.linkedin,
					github: userEmail.github,
					gmail: userEmail.gmail
				}

				res.status(200).json(allEmail)
			} else {
				res.status(200).send("disponible")
			}
		}
	} catch (err) {
		res.status(200).send("disponible")
	}
};
