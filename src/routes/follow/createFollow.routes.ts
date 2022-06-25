import { Router } from "express";
import { createFollow } from '../../controllers/Follow/postFollow'

const router = Router()

router.post('/', createFollow)

export default router