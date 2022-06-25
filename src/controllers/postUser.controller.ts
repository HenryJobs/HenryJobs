import { unlink } from 'fs-extra';
import { Request, Response, NextFunction } from "express";
import { userModel } from "../models/User";
import { uploadImage } from "../cloudinary";
import { UploadedFile } from "express-fileupload";

import jwt from "jsonwebtoken";

const { TOKEN_SECRET } = process.env;

export const createUser = async (req: Request, res: Response, next: NextFunction) => {

    const { firstName,
        lastName,
        userName,
        email,
        password } = req.body;

    const { tempFilePath } = req.files?.profileImage as UploadedFile;
    const banner = req.files?.banner as UploadedFile;


    try {

        if (
            !firstName ||
            !lastName ||
            !userName ||
            !email ||
            !password
        ) res.status(400).json({ msg: "Some fields are required" });


        const user = await userModel.create({
            firstName,
            lastName,
            userName,
            email,
            password,
        });


        if (tempFilePath) {
            const result = await uploadImage(tempFilePath)
            user.profileImage = {
                public_id: result.public_id,
                secure_url: result.secure_url
            };

            await unlink(tempFilePath);
        };

        if (banner.tempFilePath) {
            const result = await uploadImage(banner.tempFilePath)
            user.banner = {
                public_id: result.public_id,
                secure_url: result.secure_url
            };

            await unlink(banner.tempFilePath)
        };

        await user.save();

        // crea un token y lo manda al header
        const token: string = jwt.sign(
            { _id: user._id },
            TOKEN_SECRET || "TOKENTEST",
            { expiresIn: 60 * 60 * 24 }
        );
        console.log(token)
        res.header("authToken", token).status(201).json(user)
        // res.status(201).json(user)
    }

    catch (error) {
        console.error(error)
    };
};