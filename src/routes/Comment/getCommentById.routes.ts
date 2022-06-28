import { Router } from "express";
import { getComentById } from "../../controllers/PostComents/getComentById";

const router = Router()

router.get('/:id', getComentById)

export default router