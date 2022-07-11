import { Router } from "express";
import { getEmailWarning } from "../../controllers/getEmailWarning.controller";

const router = Router()

router.get('/:id', getEmailWarning)

export default router;