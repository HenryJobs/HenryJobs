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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const fs_extra_1 = require("fs-extra");
const User_1 = require("../models/User");
const cloudinary_1 = require("../cloudinary");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { TOKEN_SECRET } = process.env;
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { name, lastName, userName, email, password, profileImage, banner, userTypes, technologies, country, province, backFront, languages, otherStudies, workModality, curriculumCounter, premium, stars, acercaDe } = req.body.payload;
    try {
        let emailUser = yield User_1.userModel.findOne({
            email: email,
            active: true
        });
        if (!name || !userName || !email || !password) {
            return res.status(400).json({ msg: "Some fields are required" });
        }
        if (email === (emailUser === null || emailUser === void 0 ? void 0 : emailUser.email)) {
            console.log("email forro", email);
            return res.status(200).send("email already exist");
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
                province,
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
            // crea un token y lo manda al header
            const token = jsonwebtoken_1.default.sign({
                id: user._id,
                type: user.userTypes,
                premium: user.premium,
                name: user.name,
                lastname: user.lastName,
            }, TOKEN_SECRET || "TOKENTEST", { expiresIn: 60 * 60 * 24 });
            res.header("authToken", token).status(201).json(user);
            // res.status(201).json(user)
        }
        console.log("ata aca bro");
    }
    catch (error) {
        console.error(error);
    }
});
exports.createUser = createUser;
