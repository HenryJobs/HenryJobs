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
exports.uploadImageController = void 0;
const cloudinary_1 = require("cloudinary");
const uploadImageController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        if (req.body) {
            const profileImage = (_a = req.body) === null || _a === void 0 ? void 0 : _a.profileImage;
            const banner = (_b = req.body) === null || _b === void 0 ? void 0 : _b.banner;
            if (profileImage) {
                const uploadedProfileImage = yield cloudinary_1.v2.uploader.upload(profileImage, {
                    upload_preset: "prueba",
                    allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'webp']
                }, (error, result) => {
                    if (error)
                        console.error(error);
                    console.log(result === null || result === void 0 ? void 0 : result.secure_url);
                });
                console.log("uploadedProfileImage -> ", uploadedProfileImage);
                res.status(200).json(uploadedProfileImage);
            }
            if (banner) {
                const uploadedBannerImage = yield cloudinary_1.v2.uploader.upload(banner, {
                    upload_preset: "prueba",
                    allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'webp']
                }, (error, result) => {
                    if (error)
                        console.error(error);
                    console.log(result);
                });
                res.status(200).json(uploadedBannerImage);
            }
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Something went wrong' });
    }
});
exports.uploadImageController = uploadImageController;
