import { Router } from "express";
import { updateComent } from "../../controllers/PostComents/updateComent.controller";

const router = Router()

router.put('/:id', updateComent)

export default router