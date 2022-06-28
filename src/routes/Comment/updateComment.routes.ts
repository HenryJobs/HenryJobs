import { Router } from "express";
import { updateComent } from "../../controllers/PostComents/updateComent";

const router = Router()

router.put('/', updateComent)

export default router