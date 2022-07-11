import { unlink } from "fs-extra";
import { uploadImage } from "../cloudinary";
import { UploadedFile } from "express-fileupload";
import { Request, Response } from "express";
import { userModel } from "../models/User";
import { userInterface } from "./interfaces/userInterface.controller";

export const updateUser = async (req: Request, res: Response) => {
	const { id } = req.params;
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
		province,
		followers,
		following,
		backFront,
		languages,
		otherStudies,
		workModality,
		curriculumCounter,
		premium,
		stars,
		acercaDe,
		linkedin,
		github,
		gmail
	} = req.body;

	try {
		const userActive = await userModel.findById(id);
		if (!userActive?.active) {
			return res.status(404).send("this user was deleted");
		}
		const updated: any = await userModel.findByIdAndUpdate(
			{ _id: id },
			{
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
				province,
				followers,
				following,
				backFront,
				languages,
				otherStudies,
				workModality,
				curriculumCounter,
				premium,
				stars,
				acercaDe,
				linkedin,
				github,
				gmail
			}
		);

		if (req.files) {
			const profileImage = req.files?.profileImage as UploadedFile;
			const banner = req.files?.banner as UploadedFile;

			if (profileImage.tempFilePath) {
				const result = await uploadImage(profileImage.tempFilePath);
				updated.profileImage = {
					public_id: result.public_id,
					secure_url: result.secure_url,
				};
				await unlink(profileImage.tempFilePath);
			}

			if (banner.tempFilePath) {
				const result = await uploadImage(banner.tempFilePath);
				updated.banner = {
					public_id: result.public_id,
					secure_url: result.secure_url,
				};
				await unlink(banner.tempFilePath);
			}

		}
		await updated.save();

		res.status(200).json(updated)

	} catch (error) {
		console.error(error)
	};
};
