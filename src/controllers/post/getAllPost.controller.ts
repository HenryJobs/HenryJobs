import { Request, Response } from "express";
import { Post, postModel } from "../../models/Post";

export const getAllPost = async (_req: Request, res: Response) => {
	try {
		//let posters: Post[];

		let posters = await postModel.find({ active: true }).populate("posterUser");
		const otrospost = posters.map((e) => {
			if (e.posterUser !== null) {
				return e;
			}
		});
		if (posters) {
			res.status(200).json(otrospost);
		}
	} catch (err) {
		console.log(err);
	}
};
