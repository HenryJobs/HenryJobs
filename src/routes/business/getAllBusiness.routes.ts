import { Router } from "express";
import { getAllBusiness } from "../../controllers/businessController/getAllBusiness";

    const router = Router()

    router.get('/', getAllBusiness)

    export default router
