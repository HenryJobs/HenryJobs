import { Router } from "express";
import { getBusinessById } from "../../controllers/businessController/getBusinessById";

const router = Router()

router.get('/:id', getBusinessById)

export default router