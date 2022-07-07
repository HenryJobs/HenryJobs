import { User } from "../../models/User";

export interface allUserInterface {
  _id: string;
  firstName: string;
  lastName: string;
  UserTypes: string;
  email: string;
  password: string;
  premium: boolean;
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
}

export interface businessIterface {
  _id: string;
  name: string;
  email: string;
  password: string;
  description: string;
  jobSummary: string;
  image: string;
  country: string;
  premium: boolean;
}

export interface allBusinessInterface {
  _id: string;
  name: string;
  email: string;
  password: string;
  description: string;
  jobSummary: string;
  image: string;
  country: string;
  profileImage: object;
  banner: object;
  premium: boolean;
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