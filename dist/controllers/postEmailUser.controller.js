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
exports.createUserGoogle = void 0;
const User_1 = require("../models/User");
const createUserGoogle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, lastName, userName, email, password, profileImage, banner, userTypes, technologies, country, city, backFront, languages, otherStudies, workModality, curriculumCounter, premium, stars, allStars, linkedin, github, gmail, acercaDe } = req.body.payload;
    try {
        if (email) {
            req.query.userEmail = email;
            console.log("email forro", email);
            return next();
        }
        else {
            const user = yield User_1.userModel.create({
                name,
                lastName,
                userName,
                email,
                password,
                userTypes,
                profileImage,
                banner,
                technologies,
                country,
                city,
                backFront,
                languages,
                otherStudies,
                workModality,
                curriculumCounter,
                premium,
                stars,
                allStars,
                acercaDe,
                linkedin,
                github,
                gmail
            });
            yield user.save();
            return res.status(200).json(user);
        }
    }
    catch (err) {
        console.error(err);
    }
});
exports.createUserGoogle = createUserGoogle;
