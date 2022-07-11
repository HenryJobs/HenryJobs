import { Request, Response } from "express";
import { postModel } from "../../models/Post";

export const pushPostApplicant = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { userId, step, showBusiness, name } = req.body;

	try {
		const post = await postModel.findById(id);
		const falopa = post?.applicants.map(e => e.userId)

		if (!post?.active) {
			res.status(404).json("this item has been removed");
		}

		if (!(falopa?.includes(userId))) {
			await post?.updateOne({
				$push: { applicants: { userId: userId, step: step, showBusiness: showBusiness, name: name } },
			});
		}

		res.status(200).json(post);
	} catch (err) {
		console.error(err);
	}
};
