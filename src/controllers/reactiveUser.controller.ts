import { Request, Response } from "express";
import { reactivate } from "../libs/softdelete";

export const reactiveUser = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		if (id) {
			const reactiveById = await reactivate({ modelName: "user", id });
			console.log("aver--->", reactiveById);
			if (reactiveById) {
				return res.status(200).json(reactiveById);
			}

			res.status(404).json({ msg: "User does not exist" });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ msg: "User ID not valid" });
	}
};
