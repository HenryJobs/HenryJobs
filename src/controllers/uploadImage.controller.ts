import { Response, Request, NextFunction } from "express";
import { profileImageClass } from "../models/ProfileImages";
import { uploadImage } from "../cloudinary";
import { UploadedFile } from "express-fileupload";

export const uploadImageController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        console.log("tempFilepath -> ", req.files?.canoa)

        const { name } = req.body;

        const profileImage = await profileImageClass.create({
            name,
        });
        
        if (req.files?.canoa) {
            const result = await uploadImage(req.files?.canoa.tempFilePath)
            console.log(result)
        }

        await profileImage.save();
        
        res.status(200).json(profileImage)

    } catch (error) {

        res.status(500).json({ msg: "Could not upload the image." })
    };
};