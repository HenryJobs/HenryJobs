import { Router } from "express";
import { createApplicants } from "../../controllers/Applicants/createApplicants.controller";

const router = Router()

router.post('/', createApplicants)

export default router