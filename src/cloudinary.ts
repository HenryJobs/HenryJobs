import { v2 as cloudinary } from "cloudinary";
import { UploadApiResponse } from "cloudinary";

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true,
});

export async function uploadImage(filePath: string): Promise<UploadApiResponse> {
    return await cloudinary.uploader.upload(filePath, { folder: "HenryJobs" })
};