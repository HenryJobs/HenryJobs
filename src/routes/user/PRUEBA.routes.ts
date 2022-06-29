import { Router } from "express";
import { PruebaGraduate } from "../../controllers/PRUEBAGraduate.controller";

const router = Router();

router.get("/", PruebaGraduate);

export default router;
