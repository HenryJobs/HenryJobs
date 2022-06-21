import { Router } from "express"
import { getUserByName } from "../../controllers/getUserByName.controller" 

const router = Router()

router.get('/', getUserByName)

export default router