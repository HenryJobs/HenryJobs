import { Router } from "express";
import { softdeleteComent } from "../../controllers/PostComents/softdeleteComent.controller";

const router = Router();

router.delete("/:id", softdeleteComent);

export default router;
