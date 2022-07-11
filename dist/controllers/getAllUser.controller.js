"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUser = void 0;
const User_1 = require("../models/User");
const getAllUser = (_, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield User_1.userModel.find({ active: true });
        if (allUsers) {
            const userMap = allUsers.map((user) => {
                return ({
                    _id: user._id,
                    name: user.name,
                    lastName: user.lastName,
                    userName: user.userName,
                    email: user.email,
                    password: user.password,
                    profileImage: user.profileImage,
                    userTypes: user.userTypes,
                    technologies: user.technologies,
                    country: user.country,
                    province: user.province,
                    backFront: user.backFront,
                    languages: user.languages,
                    otherStudies: user.otherStudies,
                    curriculumCounter: user.curriculumCounter,
                    counterIncome: user.counterIncome,
                    workModality: user.workModality,
                    banner: user.banner,
                    premium: user.premium,
                    acercaDe: user.acercaDe,
                    stars: user.stars,
                    followers: user.followers,
                    following: user.following,
                    linkedin: user.linkedin,
                    github: user.github,
                    gmail: user.gmail
                });
            });
            res.status(200).json(userMap);
        }
        else {
            res.status(404).json("There is nothing here");
        }
    }
    catch (error) {
        console.error(error);
    }
});
exports.getAllUser = getAllUser;
