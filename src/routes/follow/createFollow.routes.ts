import { Router } from "express";
import { createFollow } from '../../controllers/Follow/postFollow.controller'

const router = Router()

router.post('/', createFollow)

export default router