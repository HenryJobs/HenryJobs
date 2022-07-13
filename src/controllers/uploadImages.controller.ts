import { Request, Response } from "express";
import { uploadImage } from "../cloudinary";

export const uploadImageController = async (req: Request, res: Response) => {

    try {
        if (req.body) {
            const profileImage = req.body?.profileImage;
            const banner = req.body?.banner;
    
            if (profileImage) {
                const uploadedProfileImage = await uploadImage(profileImage)
                res.status(200).json(uploadedProfileImage)
            };
            
            if (banner) {
                const uploadedBannerImage = await uploadImage(banner)
                res.status(200).json(uploadedBannerImage)
            };
        };
        
    } catch (error) {
        console.error(error);
        res.status(500).json(error)
    };
};