import { Router } from "express";
import { uploadImageController } from "../../controllers/uploadImages.controller";


const router = Router()

router.post('/', uploadImageController)

export default router;