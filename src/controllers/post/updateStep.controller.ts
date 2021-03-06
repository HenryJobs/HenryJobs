import { Request, Response } from "express";
import { postModel } from "../../models/Post";

export const updateStep = async (req: Request, res: Response) => {

	const { id } = req.params;
	const { step } = req.body;

	try {
		const post = await postModel.findByIdAndUpdate({ _id: id }, {});
		if (!post?.active) {
			res.status(404).json("this item has been removed");
		} else {
			res.status(200).json(post);
		}
	} catch (err) {
		console.error(err);
	}
};