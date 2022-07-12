import { Request, Response } from "express";

import { softDelete } from "../../libs/softdelete";

export const softdeletePost = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		if (id) {
			const deleteById = await softDelete({ modelName: "post", id });
			if (deleteById) {
				res.status(200).json("deleted");
			}
		}
	} catch (err) {
		console.error(err);
	}
};
