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
exports.deleteUser = void 0;
const User_1 = require("../models/User");
const cloudinary_1 = require("../cloudinary");
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        if (id) {
            const deleteById = yield User_1.userModel.findOneAndDelete({ _id: id });
            if (deleteById) {
                const myDelete = {
                    _id: deleteById._id,
                    name: deleteById.name,
                    lastName: deleteById.lastName,
                    userName: deleteById.userName,
                    email: deleteById.email,
                    password: deleteById.password,
                    profileImage: deleteById.profileImage,
                    userTypes: deleteById.userTypes,
                    technologies: deleteById.technologies,
                    country: deleteById.country,
                    province: deleteById.province,
                    backFront: deleteById.backFront,
                    followers: deleteById.followers,
                    following: deleteById.following,
                    languages: deleteById.languages,
                    otherStudies: deleteById.otherStudies,
                    curriculumCounter: deleteById.curriculumCounter,
                    counterIncome: deleteById.counterIncome,
                    workModality: deleteById.workModality,
                    banner: deleteById.banner,
                    acercaDe: deleteById.acercaDe,
                    premium: deleteById.premium,
                    stars: deleteById.stars,
                    linkedin: deleteById.linkedin,
                    github: deleteById.github,
                    gmail: deleteById.gmail
                };
                yield (0, cloudinary_1.deleteImage)(deleteById.profileImage.public_id);
                // await deleteImage(deleteById.banner.public_id);
                return res.status(200).json(myDelete);
            }
            ;
            res.status(404).json({ msg: "User does not exist" });
        }
        ;
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: "User ID not valid" });
    }
    ;
});
exports.deleteUser = deleteUser;
