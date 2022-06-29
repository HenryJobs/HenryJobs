import { Router } from "express";
import { getComentById } from "../../controllers/PostComents/getComentById.controller";

const router = Router()

router.get('/:id', getComentById)

export default router