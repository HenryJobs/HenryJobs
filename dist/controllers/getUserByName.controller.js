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
exports.getUserByName = void 0;
const User_1 = require("../models/User");
const getUserByName = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName } = req.query;
    if (userName) {
        const user = yield User_1.userModel.findOne({ userName: userName });
        if (user) {
            const allNames = {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                userName: user.userName,
                email: user.email,
                password: user.password,
                profileImage: user.profileImage,
                userTypes: user.userTypes,
                technologies: user.technologies,
                country: user.country,
                backFront: user.backFront,
                languages: user.languages,
                otherstudies: user.otherStudies,
                CurriculumCounter: user.curriculumCounter,
                counterIngreso: user.counterIngreso,
                banner: user.banner,
                premium: user.premium
            };
            res.status(200).json(allNames);
        }
        ;
    }
    ;
});
exports.getUserByName = getUserByName;
