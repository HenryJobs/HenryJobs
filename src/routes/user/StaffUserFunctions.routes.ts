import { Router } from "express";
import { StaffgetAllUser } from "../../controllers/StaffgetAllUser.controller";
import { deleteUser } from "../../controllers/deleteUser.controller";
import { reactiveUser } from "../../controllers/reactiveUser.controller";
const router = Router();

router.get("/", StaffgetAllUser);
router.put("/:id", reactiveUser);
router.delete("/:id", deleteUser);
export = router;
