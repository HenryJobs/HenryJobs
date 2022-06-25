import { Router } from "express";
import { getAllFollow } from "../../controllers/Follow/getFollow";

const router = Router()

router.get('/', getAllFollow)

export default router