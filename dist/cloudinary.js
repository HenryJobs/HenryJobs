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
exports.deleteImage = exports.uploadImage = void 0;
const cloudinary_1 = require("cloudinary");
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;
cloudinary_1.v2.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true,
});
// export async function uploadImage(filePath: string): Promise<UploadApiResponse> {
//     return await cloudinary.uploader.upload(filePath, { folder: "HenryJobs" })
// };
function uploadImage(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield cloudinary_1.v2.uploader.upload(filePath, {
            upload_preset: "prueba",
            allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'webp']
        });
    });
}
exports.uploadImage = uploadImage;
;
function deleteImage(publicId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield cloudinary_1.v2.uploader.destroy(publicId);
    });
}
exports.deleteImage = deleteImage;
////////////// yy mirá... luk at dis... creo que ya no sirve eso, viste... ////////////////
