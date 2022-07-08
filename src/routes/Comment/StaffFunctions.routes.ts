import { Router } from "express";
import { staffgetAllComents } from "../../controllers/PostComents/StaffgetAllComent.controller";
import { deleteComent } from "../../controllers/PostComents/deleteComent.controller";
import { reactiveComent } from "../../controllers/PostComents/reactiveComent.controller";
const router = Router();

router.put("/:id", reactiveComent);
router.get("/", staffgetAllComents);
router.delete("/", deleteComent);

export = router;
