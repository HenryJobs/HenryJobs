import { Request, Response, NextFunction } from "express";
import { userModel, User } from "../models/User";
import { userId, userInterface } from "./interfaces/userInterface.controller";

export const getUserByName = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { userName } = req.query;

	if (userName) {
		const user: userId | null = await userModel.findOne({
			userName: userName,
			active: true,
		});

		if (user) {
			const allNames: userInterface = {
				_id: user._id,
				name: user.name,
				lastName: user.lastName,
				userName: user.userName,
				email: user.email,
				password: user.password,
				profileImage: user.profileImage,
				userTypes: user.userTypes,
				technologies: user.technologies,
				country: user.country,
				city: user.city,
				backFront: user.backFront,
				followers: user.followers,
				following: user.following,
				languages: user.languages,
				otherStudies: user.otherStudies,
				curriculumCounter: user.curriculumCounter,
				counterIncome: user.counterIncome,
				workModality: user.workModality,
				banner: user.banner,
				acercaDe: user.acercaDe,
				premium: user.premium,
				stars: user.stars,
				allStars: user.allStars,
				linkedin: user.linkedin,
				github: user.github,
				gmail: user.gmail
			};
			res.status(200).json(allNames);
		}
		res.status(404).send("user not found");
	}
};
