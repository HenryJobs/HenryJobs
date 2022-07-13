import {
	prop,
	getModelForClass,
	pre,
	DocumentType,
	modelOptions,
} from "@typegoose/typegoose";
import { compare, genSalt, hash } from "bcrypt";
import { starInterface } from "../controllers/interfaces/userInterface.controller";

enum UserTypes {
	NN,
	PG,    // 1
	Graduate,  // 2 
	Staff,     // 3
	Recruiter, // 4
	Business   // 5
}

@pre<User>("save", async function (next) {
	const user = this;
	if (!user.isModified("password")) return next();

	const salt = await genSalt(10);
	const hashed = await hash(user.password, salt);

	user.password = hashed;
	next();
})
@modelOptions({ options: { allowMixed: 0 } })
export class User {
	@prop({ required: true })
	name: string;

	@prop({})
	lastName: string;

	@prop({})
	userName: string;

	@prop({ required: false, trim: true, unique: false })
	email!: string;

	@prop({ required: true })
	password!: string;

	@prop({})
	profileImage: { public_id: string; secure_url: string };

	@prop({ enum: UserTypes, addNullToEnum: false, default: 0 })
	userTypes: UserTypes;

	@prop({})
	technologies: string[];

	@prop({})
	country: string;

	@prop({})
	province: string;

	@prop({})
	backFront: string;

	@prop({})
	languages: string;

	@prop({})
	otherStudies: string[];

	@prop({})
	curriculumCounter: number;

	@prop({})
	counterIncome: number;

	@prop({})
	workModality: string;

	@prop({})
	banner: object;

	@prop({})
	stars: starInterface[];


	@prop({})
	followers: string[];

	@prop({})
	following: string[];

	@prop({})
	applications: string[];

	@prop({})
	linkedin: string;

	@prop({})
	gmail: string;

	@prop({})
	github: string;

	//business

	@prop({})
	jobSummary: string;

	@prop({})
	description: string;

	@prop({})
	acercaDe: string;

	@prop({})
	premium: boolean;

	@prop({ default: true })
	active: boolean;

	@prop()
	dateSoftDelte: Date;

	public async validatePassword(
		this: DocumentType<User>,
		candidatePassword: string
	) {
		try {
			const user = await compare(candidatePassword, this.password);
			return user;
		} catch (error) {
			return false;
		}
	}
}

export const userModel = getModelForClass(User);
