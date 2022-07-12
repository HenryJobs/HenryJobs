import { User } from "../../models/User";

export interface contactInterface {
	_id: string;
	name: string;
	lastName: string;
	email: string;
}

export interface userInterface {
	_id: string;
	name: string;
	lastName: string;
	userName: string;
	email: string;
	password: string;
	profileImage: object;
	userTypes: number;
	technologies: string[];
	country: string;
	province: string;
	backFront: string;
	languages: string;
	otherStudies: string[];
	curriculumCounter: number;
	followers: string[];
	following: string[];
	workModality: string;
	counterIncome: number;
	banner: object;
	acercaDe: string;
	premium: boolean;
	stars: number;
	linkedin: string;
	github: string;
	gmail: string;
}


export interface userId extends User {
	_id: string;
}

export interface payloadInterface {
	id: string;
	type: number;
	premium: boolean;
	name: string;
	lastname: string;
	iat: number;
	exp: number;
}

export interface applicantsInterface {
	showBusiness: boolean;
	showStudent: boolean;
	step: string;
	userId: string;
	name: string
}
