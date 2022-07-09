import { Router } from "express";
import { pushPostApplicant } from "../../controllers/post/pushPostApplicant.controller";

const router = Router();

router.put('/:id', pushPostApplicant);

export default router;