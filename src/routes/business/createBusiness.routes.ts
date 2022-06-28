import { Router } from "express";
import { postBusiness } from '../../controllers/businessController/createBusiness.controller'

const router = Router()

router.post('/', postBusiness)

export default router