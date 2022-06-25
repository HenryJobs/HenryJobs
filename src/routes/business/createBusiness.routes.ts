import { Router } from "express";
import { postBusiness } from '../../controllers/businessController/createBusiness'

const router = Router()

router.post('/', postBusiness)

export default router