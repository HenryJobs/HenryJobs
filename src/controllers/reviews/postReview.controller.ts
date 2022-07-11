import { Request, Response } from "express";
import { reviewsModel } from "../../models/Reviews";

export const postReview = async (req: Request, res: Response) => {
	const { titleReview, reviewBody, score, reviewer, reviewReceiver } = req.body;
	try {
		const newReview = new reviewsModel({
			titleReview,
			reviewBody,
			score,
			reviewer,
			reviewReceiver,
			date: new Date(),
		});

		await newReview.save();

		res.status(201).json(newReview);
	} catch (error) {
		console.error("ERROR POST REVIEW", error);
	}
};
