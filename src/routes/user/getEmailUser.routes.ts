import { Router } from "express";
import { getUserEmail } from "../../controllers/getUserByEmail";

const router = Router()

    router.get('/', getUserEmail)

export default router