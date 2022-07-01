import { Router } from "express"; 
import { getAllComents } from '../../controllers/PostComents/getAllComent.controller'

const router = Router()

router.get('/', getAllComents)

export default router