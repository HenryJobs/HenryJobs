import { Router } from "express";
import { getAllApplicant } from "../../controllers/Applicants/getAllApplicants..controller";

const router = Router()

router.get('/', getAllApplicant)

export default router