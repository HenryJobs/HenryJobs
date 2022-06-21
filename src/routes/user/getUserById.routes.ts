import { Router } from "express";
import { getUserById } from "../../controllers/getUserById.controller";

const router = Router()

router.get('/:id', getUserById)

export default router