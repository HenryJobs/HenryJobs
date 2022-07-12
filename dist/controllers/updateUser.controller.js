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
const fs_extra_1 = require("fs-extra");
const cloudinary_1 = require("../cloudinary");
const User_1 = require("../models/User");
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { id } = req.params;
    const { name, lastName, userName, email, password, profileImage, banner, userTypes, technologies, country, province, followers, following, backFront, languages, otherStudies, workModality, curriculumCounter, premium, stars, acercaDe, linkedin, github, gmail } = req.body;
    console.log("este es el body, luk at dis -> ", req.body);
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
            linkedin,
            github,
            gmail
        });
        console.log("esto es el updated -> ", updated);
        if (req.files) {
            console.log("luk at dis, entró al req.files -> ", req.files);
            const profileImage = (_a = req.files) === null || _a === void 0 ? void 0 : _a.profileImage;
            console.log("este es el profileImage -> ", profileImage);
            const banner = (_b = req.files) === null || _b === void 0 ? void 0 : _b.banner;
            if (profileImage.tempFilePath) {
                console.log("entró al if de profileImage.tempFilePath");
                const result = yield (0, cloudinary_1.uploadImage)(profileImage.tempFilePath);
                updated.profileImage = {
                    public_id: result.public_id,
                    secure_url: result.secure_url,
                };
                console.log("esto es lo que queda en updated.profileImage desp de que se actualiza -> ", updated.profileImage);
                yield (0, fs_extra_1.unlink)(profileImage.tempFilePath);
            }
            if (banner.tempFilePath) {
                const result = yield (0, cloudinary_1.uploadImage)(banner.tempFilePath);
                updated.banner = {
                    public_id: result.public_id,
                    secure_url: result.secure_url,
                };
                yield (0, fs_extra_1.unlink)(banner.tempFilePath);
            }
        }
        yield updated.save();
        res.status(200).json(updated);
    }
    catch (error) {
        console.error(error);
    }
    ;
});
exports.updateUser = updateUser;
