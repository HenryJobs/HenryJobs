import { Request, Response } from "express";
import { softDelete } from "../libs/softdelete";
export const softdeleteUser = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		if (id) {
			const deleteById = await softDelete({ modelName: "user", id });

			if (deleteById) {
				return res.status(200).json(deleteById);
			}

			res.status(404).json({ msg: "User does not exist" });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ msg: "User ID not valid" });
	}
};
