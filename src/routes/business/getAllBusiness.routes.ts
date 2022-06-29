import { Router } from "express";
import { getAllBusiness } from "../../controllers/businessController/getAllBusiness.controller";

    const router = Router()

    router.get('/', getAllBusiness)

    export default router
