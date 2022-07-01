import { Router } from "express";
import { deleteComent } from "../../controllers/PostComents/deleteComent.controller";

const router = Router()

router.delete('/', deleteComent)

export default router