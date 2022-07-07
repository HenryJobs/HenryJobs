import { updateStep } from "../../controllers/post/updateStep.controller";
import { Router } from "express";

const router = Router();

router.put('/:id', updateStep);

export default router;