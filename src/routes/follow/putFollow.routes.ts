import { Router } from "express";
import { putFollow } from "../../controllers/Follow/putFollowers.controller";

const router = Router();

router.put('/:id', putFollow);

export default router;