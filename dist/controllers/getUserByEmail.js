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
exports.getUserEmail = void 0;
const User_1 = require("../models/User");
const getUserEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    if (email) {
        const userEmail = yield User_1.userModel.findOne({
            email: email
        });
        if (userEmail) {
            const allEmail = {
                _id: userEmail._id,
                firstName: userEmail.firstName,
                lastName: userEmail.lastName,
                userName: userEmail.userName,
                email: userEmail.email,
                password: userEmail.password,
                profileImage: userEmail.profileImage,
                userTypes: userEmail.userTypes,
                technologies: userEmail.technologies,
                country: userEmail.country,
                backFront: userEmail.backFront,
                languages: userEmail.languages,
                otherstudies: userEmail.otherstudies,
                CurriculumCounter: userEmail.CurriculumCounter,
                counterIngreso: userEmail.counterIngreso,
                banner: userEmail.banner
            };
            res.status(200).json(allEmail);
        }
    }
});
exports.getUserEmail = getUserEmail;
