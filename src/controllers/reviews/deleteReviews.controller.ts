import { Request, Response } from "express";
import { reviewsModel } from "../../models/Reviews";

export const deleteReviews = async (req: Request, res: Response) => {
	const { idReview } = req.params;

	try {
		if (idReview) {
			const deleteById = await reviewsModel.findByIdAndDelete({
				_id: idReview,
			});
			if (deleteById) {
				res.status(200).json(deleteById);
			} else {
				res.status(404).send("no review found");
			}
		} else {
			console.log("--->", idReview);
			res.status(404).send("falta data");
		}
	} catch (err) {
		console.error(err);
	}
};
