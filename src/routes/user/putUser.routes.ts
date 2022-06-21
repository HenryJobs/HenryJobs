import { Router } from "express";
import { updateUser } from "../../controllers/updateUser.controller";

const router = Router();

router.put('/:id', updateUser)

export default router;