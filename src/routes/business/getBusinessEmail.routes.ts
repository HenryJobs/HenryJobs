import { Router } from "express";
import { getBusinessEmail } from "../../controllers/businessController/getBusinessByMail.controller";


const router = Router()

router.get('/', getBusinessEmail)

export default router