import { Router } from "express";
import { getUserEmail } from "../../controllers/getUserByEmail.controller";

const router = Router()

    router.get('/', getUserEmail)

export default router