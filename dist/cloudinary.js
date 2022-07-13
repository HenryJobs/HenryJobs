"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
// export async function deleteImage(publicId: string): Promise<any> {
//     return await cloudinary.uploader.destroy(publicId)
// }
////////////// yy mirá... luk at dis... creo que ya no sirve eso, viste... ////////////////
