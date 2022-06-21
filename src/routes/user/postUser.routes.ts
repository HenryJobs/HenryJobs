import { Router } from "express";
import { createUser } from "../../controllers/postUser.controller";

const router = Router();

router.post('/', createUser)

export default router;