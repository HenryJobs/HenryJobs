import { Router } from "express";
import { updateBusiness } from "../../controllers/businessController/updateBusiness.controller";

const router = Router()

router.put('/:id', updateBusiness)

export default router;