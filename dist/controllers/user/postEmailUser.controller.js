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
const fs_extra_1 = require("fs-extra");
const User_1 = require("../../models/User");
const cloudinary_1 = require("../../cloudinary");
const createUserGoogle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { name, lastName, userName, email, password, profileImage, banner, userTypes, technologies, country, city, backFront, languages, otherStudies, workModality, curriculumCounter, premium, stars, acercaDe } = req.body.payload;
    try {
        if (!name || !userName || !email || !password)
            res.status(400).json({ msg: "Some fields are required" });
        if (email)
            next();
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
            province: city,
            backFront,
            languages,
            otherStudies,
            workModality,
            curriculumCounter,
            premium,
            stars,
            acercaDe
        });
        if (req.files) {
            const { tempFilePath } = (_a = req.files) === null || _a === void 0 ? void 0 : _a.profileImage;
            const banner = (_b = req.files) === null || _b === void 0 ? void 0 : _b.banner;
            if (tempFilePath) {
                const result = yield (0, cloudinary_1.uploadImage)(tempFilePath);
                user.profileImage = {
                    public_id: result.public_id,
                    secure_url: result.secure_url,
                };
                yield (0, fs_extra_1.unlink)(tempFilePath);
            }
            if (banner.tempFilePath) {
                const result = yield (0, cloudinary_1.uploadImage)(banner.tempFilePath);
                user.banner = {
                    public_id: result.public_id,
                    secure_url: result.secure_url,
                };
            }
            yield (0, fs_extra_1.unlink)(banner.tempFilePath);
        }
        yield user.save();
    }
    catch (error) {
        console.error(error);
    }
});
exports.createUserGoogle = createUserGoogle;
