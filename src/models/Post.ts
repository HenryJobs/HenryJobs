import {
	prop,
	getModelForClass,
	Ref,
	modelOptions,
} from "@typegoose/typegoose";
import { applicantsInterface } from "../controllers/interfaces/userInterface.controller";
import { User } from "./User";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

@modelOptions({ options: { allowMixed: 0 } })
export class Post extends TimeStamps {
	@prop({ ref: () => User })
	posterUser: Ref<User>;

	@prop({ required: true })
	text: string;

	@prop({})
	imgVideo: string;

	@prop({ default: new Date() })
	date: Date;

	@prop({})
	image: string;

	@prop({})
	workModality: string;

	@prop({})
	technologies: string[];

	@prop({})
	backFront: string;

	@prop({})
	country: string;

	@prop({})
	applicants: applicantsInterface[];

	@prop({ default: true })
	active: boolean;
	@prop()
	dateSoftDelte: Date;
}

export const postModel = getModelForClass(Post);
