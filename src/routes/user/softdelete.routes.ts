import { Router } from "express";
import { softdeleteUser } from "../../controllers/softdeleteUser.controller";

const router = Router();

router.delete("/:id", softdeleteUser);

export default router;
