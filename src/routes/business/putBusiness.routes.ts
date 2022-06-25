import { Router } from "express";
import { updateBusiness } from "../../controllers/businessController/updateBusiness";

const router = Router()

router.put('/:id', updateBusiness)

export default router;