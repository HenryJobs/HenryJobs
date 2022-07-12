import { Request, Response } from "express";

import { reactivate } from "../../libs/softdelete";

export const reactivatePost = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		if (id) {
			const reactivateById = await reactivate({ modelName: "post", id });
			if (reactivateById) {
				res.status(200).json("reactivated");
			}
		}
	} catch (err) {
		console.error(err);
	}
};
