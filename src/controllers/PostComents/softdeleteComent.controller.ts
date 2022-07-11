import { Request, Response } from "express";
import { softDelete } from "../../libs/softdelete";

export const softdeleteComent = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		if (id) {
			const deleteById = await softDelete({ modelName: "postComent", id });
			if (deleteById) {
				res.status(200).json("deleted");
			}
		}
	} catch (err) {
		console.error(err);
	}
};
