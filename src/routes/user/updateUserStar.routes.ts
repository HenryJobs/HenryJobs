import { Router } from "express";
import { updateStar } from "../../controllers/updateHenryStar.controller";

const router = Router()

router.put('/:id', updateStar)

export default router