import { Router } from "express";
import { getApplicantById } from "../../controllers/Applicants/getApplicantById.controller";

const router = Router()

router.get('/:id', getApplicantById)

export default router