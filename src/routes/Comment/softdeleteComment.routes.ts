import { Router } from "express";
import { softdeleteComent } from "../../controllers/PostComents/SoftdeleteComent.controller";

const router = Router();

router.delete("/:id", softdeleteComent);

export default router;
