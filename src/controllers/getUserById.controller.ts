import { Request, Response } from "express";
import { userModel } from "../models/User";
import { userInterface } from "./interfaces/userInterface.controller";

export const getUserById = async (req: Request, res: Response) => {

	const { id } = req.params;

	try {
		if (id) {
			let userId = await userModel.findOne({ _id: id, active: true });
			if (userId) {
				const allId: userInterface = {
					_id: userId._id,
					name: userId.name,
					lastName: userId.lastName,
					userName: userId.userName,
					email: userId.email,
					password: userId.password,
					profileImage: userId.profileImage,
					userTypes: userId.userTypes,
					technologies: userId.technologies,
					country: userId.country,
					city: userId.city,
					backFront: userId.backFront,
					languages: userId.languages,
					followers: userId.followers,
					following: userId.following,
					otherStudies: userId.otherStudies,
					curriculumCounter: userId.curriculumCounter,
					counterIncome: userId.counterIncome,
					workModality: userId.workModality,
					banner: userId.banner,
					acercaDe: userId.acercaDe,
					premium: userId.premium,
					stars: userId.stars,
					linkedin: userId.linkedin,
					github: userId.github,
					gmail: userId.gmail


				};
				return res.status(200).json(allId);
			}
			return res.status(404).json({ msg: "User does not exist" });
		}
	} catch (error) {
		console.error(error);
	}
};
