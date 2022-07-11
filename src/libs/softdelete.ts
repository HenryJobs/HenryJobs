import { userModel } from "../models/User";
import { reviewsModel } from "../models/Reviews";
import { postModel } from "../models/Post";
import { postComent } from "../models/postComent";

interface Querys {
	modelName: "reviews" | "user" | "post" | "postComent";

	id: string;
}

export const softDelete = async (querys: Querys) => {
	const id = querys.id;

	if (querys.modelName === "reviews") {
		const result = await reviewsModel.findByIdAndUpdate(
			{ _id: id },
			{ $set: { active: false, dateSoftDelte: new Date() } }
		);
		return result;
	} else if (querys.modelName === "post") {
		await postModel.findByIdAndUpdate(
			{ _id: id },
			{ $set: { active: false, dateSoftDelte: new Date() } }
		);
		return true;
	} else if (querys.modelName === "user") {
		const user = await userModel.findByIdAndUpdate(
			{ _id: id },
			{ $set: { active: false, dateSoftDelte: new Date() } }
		);
		return true;
	} else if (querys.modelName === "postComent") {
		await postComent.findByIdAndUpdate(
			{ _id: id },
			{ $set: { active: false, dateSoftDelte: new Date() } }
		);
		return true;
	} else {
		return false;
	}
};

export const reactivate = async (querys: Querys) => {
	const id = querys.id;

	if (querys.modelName === "reviews") {
		await reviewsModel.findByIdAndUpdate(
			{ _id: id },
			{ $set: { active: true, dateSoftDelte: null } }
		);
		return true;
	} else if (querys.modelName === "post") {
		await postModel.findByIdAndUpdate(
			{ _id: id },
			{ $set: { active: true, dateSoftDelte: null } }
		);
		return true;
	} else if (querys.modelName === "user") {
		const userreactive = await userModel.findByIdAndUpdate(
			{ _id: id },
			{ $set: { active: true, dateSoftDelte: null } }
		);

		return true;
	} else if (querys.modelName === "postComent") {
		await postComent.findByIdAndUpdate(
			{ _id: id },
			{ $set: { active: true, dateSoftDelte: null } }
		);
		return true;
	} else {
		return false;
	}
};
