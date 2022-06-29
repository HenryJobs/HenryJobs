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
exports.getUserById = void 0;
const User_1 = require("../models/User");
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        if (id) {
            let userId = yield User_1.userModel.findOne({ _id: id });
            if (userId) {
                const allId = {
                    _id: userId._id,
                    name: userId.name,
                    lastName: userId.lastName,
                    userName: userId.userName,
                    email: userId.email,
                    password: userId.password,
                    profileImage: userId.profileImage,
                    userTypes: userId.userTypes,
                    technologies: userId.technologies,
                    country: userId.country,
                    backFront: userId.backFront,
                    languages: userId.languages,
                    otherstudies: userId.otherStudies,
                    CurriculumCounter: userId.curriculumCounter,
                    counterIncome: userId.counterIncome,
                    workModality: userId.workModality,
                    banner: userId.banner,
                    premium: userId.premium
                };
                return res.status(200).json(allId);
            }
            ;
            return res.status(404).json({ msg: "User does not exist" });
        }
        ;
    }
    catch (error) {
        console.error(error);
    }
    ;
});
exports.getUserById = getUserById;
