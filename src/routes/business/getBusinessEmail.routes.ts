import { Router } from "express";
import { getBusinessEmail } from "../../controllers/businessController/getBusinessByMail";


const router = Router()

router.get('/', getBusinessEmail)

export default router