import { Router } from "express";
import { getBusinessByName } from "../../controllers/businessController/getBusinessByName.controller";

const router = Router()

router.get('/', getBusinessByName)

export default router