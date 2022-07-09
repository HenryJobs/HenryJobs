import { unlink } from "fs-extra";
import { Request, Response, NextFunction } from "express";
import { userModel, User } from "../models/User";
import { uploadImage } from "../cloudinary";
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
    province,
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

        if(email){ req.query.userEmail = email; 
            console.log("email forro", email)
            return next()
        }
            else{

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

    return res.status(200).json(user)
}     
} catch (err) {
    console.error(err);

}
};