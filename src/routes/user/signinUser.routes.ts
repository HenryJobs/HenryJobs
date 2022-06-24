import { Router } from "express";
import { signin } from "../../controllers/signinUser.controller";

const router = Router();

router.post("/", signin);

export = router;
