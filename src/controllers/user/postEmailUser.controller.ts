import { unlink } from "fs-extra";
import { Request, Response, NextFunction } from "express";
import { userModel, User } from "../../models/User";
import { uploadImage } from "../../cloudinary";
import { UploadedFile } from "express-fileupload";


export const createUserGoogle = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const {
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
    city,
    backFront,
    languages,
    otherStudies,
    workModality,
    curriculumCounter,
    premium,
    stars,
    acercaDe
    } = req.body.payload;


    try {
    if (!name || !userName || !email || !password)
    res.status(400).json({ msg: "Some fields are required" });

    if (email) next();

    const user = await userModel.create({
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
    const { tempFilePath } = req.files?.profileImage as UploadedFile;
    const banner = req.files?.banner as UploadedFile;

    if (tempFilePath) {
        const result = await uploadImage(tempFilePath);
        user.profileImage = {
        public_id: result.public_id,
        secure_url: result.secure_url,
        };

        await unlink(tempFilePath);
    }

    if (banner.tempFilePath) {
        const result = await uploadImage(banner.tempFilePath);
        user.banner = {
        public_id: result.public_id,
        secure_url: result.secure_url,
        };
    }

    await unlink(banner.tempFilePath);
    }

    await user.save()
} catch (error) {
    console.error(error);
}
};