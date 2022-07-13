import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";

export const uploadImageController = async (req: Request, res: Response) => {

    try {
        if (req.body) {
            const profileImage = req.body?.profileImage;
            const banner = req.body?.banner;
    
            if (profileImage) {
                const uploadedProfileImage = await cloudinary.uploader.upload(profileImage, {
                    upload_preset: "prueba",
                    allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'webp']
                },
                (error, result) => {
                    if (error) console.error(error)
                    console.log(result?.secure_url)
                });

                console.log("uploadedProfileImage -> ", uploadedProfileImage)
                res.status(200).json(uploadedProfileImage)
            }
            
            if (banner) {
                const uploadedBannerImage = await cloudinary.uploader.upload(banner, {
                    upload_preset: "prueba",
                    allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'webp']
                },
                (error, result) => {
                    if (error) console.error(error)
                    console.log(result)
                });

                res.status(200).json(uploadedBannerImage)
            }
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Something went wrong' })
        
    }

}