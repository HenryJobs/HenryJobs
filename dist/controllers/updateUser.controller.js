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
exports.updateUser = void 0;
const User_1 = require("../models/User");
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, lastName, userName, email, password, profileImage, banner, userTypes, technologies, country, province, followers, following, backFront, languages, otherStudies, workModality, curriculumCounter, premium, stars, acercaDe, } = req.body;
    try {
        const userActive = yield User_1.userModel.findById(id);
        if (!(userActive === null || userActive === void 0 ? void 0 : userActive.active)) {
            return res.status(404).send("this user was deleted");
        }
        const updated = yield User_1.userModel.findByIdAndUpdate({ _id: id }, {
            name,
            lastName,
            userName,
            email,
            password,
            profileImage,
            banner,
            userTypes,
            technologies,
            country,
            province,
            followers,
            following,
            backFront,
            languages,
            otherStudies,
            workModality,
            curriculumCounter,
            premium,
            stars,
            acercaDe,
        });
        res.status(200).json(updated);
    }
    catch (error) {
        console.error(error);
    }
    ;
});
exports.updateUser = updateUser;
