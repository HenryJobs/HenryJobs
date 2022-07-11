import { Request, Response } from "express";
import { postComent, Coments } from "../../models/postComent";

export const getComentById = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		let comment: Coments | null;

		comment = await postComent.findOne({ _id: id }).populate("comentUser");

		if (comment?.active === true) {
			res.status(200).json(comment);
		} else {
			res.status(404).send("this item has been removed");
		}
	} catch (err) {
		console.error(err);
	}
};
