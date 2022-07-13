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
		city,
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

	console.log("este es el body, luk at dis -> ", req.body)

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
				city,
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

		console.log("esto es el updated -> ", updated)

		if (req.files) {
			console.log("luk at dis, entró al req.files -> ", req.files)
			const profileImage = req.files?.profileImage as UploadedFile;
			console.log("este es el profileImage -> ", profileImage)
			const banner = req.files?.banner as UploadedFile;

			if (profileImage.tempFilePath) {
				console.log("entró al if de profileImage.tempFilePath")
				const result = await uploadImage(profileImage.tempFilePath);
				updated.profileImage = {
					public_id: result.public_id,
					secure_url: result.secure_url,
				};
				console.log("esto es lo que queda en updated.profileImage desp de que se actualiza -> ", updated.profileImage)
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
