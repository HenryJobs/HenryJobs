import { Router } from "express";
import { createUserGoogle } from "../../controllers/user/postEmailUser.controller";

const router = Router()

router.post('/', createUserGoogle)

export default router