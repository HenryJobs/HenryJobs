import { Router } from "express";
import { deleteComent } from "../../controllers/PostComents/deleteComent";

const router = Router()

router.delete('/', deleteComent)

export default router