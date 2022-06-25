import { Router } from "express";
import { deleteBusiness } from "../../controllers/businessController/deleteBusiness.controller";

const router = Router()

router.delete('/', deleteBusiness)

export default router