// import { Response, Request, NextFunction } from "express";
// import { profileImageClass } from "../models/ProfileImages";
// import { uploadImage } from "../cloudinary";
// import { UploadedFile } from "express-fileupload";


// export const uploadImageController = async (req: Request, res: Response, next: NextFunction) => {

//     const { tempFilePath } = req.files?.image as UploadedFile;
//     const { name } = req.body;

//     try {

//         const profileImage = await profileImageClass.create({ name });
        
//         if (req.files?.image) {
//             const result = await uploadImage(tempFilePath)
//             console.log(result)
//         }

//         await profileImage.save();
        
//         res.status(200).json(profileImage)

//     } catch (error) {

//         res.status(500).json({ msg: "Could not upload the image." })
//     };
// };