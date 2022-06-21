import { Router } from "express";
import { getAllUser } from "../../controllers/getAllUser.controller";

const router = Router();

router.get('/', getAllUser)

export = router
