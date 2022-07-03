import { Router } from "express";
import { signinUser } from "../../controllers/signinUser.controller";

const router = Router();

router.post("/", signinUser);

export default router;
