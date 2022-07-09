import { Router } from "express";
import { updatePostApplicant } from "../../controllers/post/postApplicant.controller";

const router = Router()

router.put('/:id', updatePostApplicant)

export default router