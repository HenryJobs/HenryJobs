import { Request, Response, NextFunction } from "express";
import { User, userModel } from "../models/User";
import { userInterface } from "./interfaces/userInterface.controller";

export const StaffgetAllUser = async (
	_: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const allUsers: Array<User> = await userModel.find();

		if (allUsers) {
			const userMap: Array<userInterface> = allUsers.map((user: any) => {
				return {
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
					province: user.province,
					backFront: user.backFront,
					languages: user.languages,
					otherStudies: user.otherStudies,
					curriculumCounter: user.curriculumCounter,
					counterIncome: user.counterIncome,
					workModality: user.workModality,
					banner: user.banner,
					premium: user.premium,
					acercaDe: user.acercaDe,
					stars: user.stars,
					followers: user.followers,
					following: user.following,
					linkedin: user.linkedin,
					github: user.github,
					gmail: user.gmail
				};
			});

			res.status(200).json(userMap);
		} else {
			res.status(404).json("There is nothing here");
		}
	} catch (error) {
		console.error(error);
	}
};
