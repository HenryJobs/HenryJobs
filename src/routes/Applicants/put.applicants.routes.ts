import { Router } from "express";
import { putApplicants } from "../../controllers/Applicants/putApplicants.controller";

const router = Router()

router.put('/:id', putApplicants)

export default router