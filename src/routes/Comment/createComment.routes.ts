import { Router } from "express";
import { createComent } from "../../controllers/PostComents/createComent.controller";

const router = Router()

router.post('/', createComent)

export default router