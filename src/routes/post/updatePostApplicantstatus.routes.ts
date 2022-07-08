import { Router } from "express";
import { updatePostApplicantStatus } from "../../controllers/post/updatePostApplicant.controller";

const router = Router()

router.put('/:id', updatePostApplicantStatus)

export default router