import { Router } from "express";
import { reactivatePost } from "../../controllers/post/reactivatePost.controller";
import { StaffgetAllPost } from "../../controllers/post/StaffgetAllPost.controller";
import { deletePost } from "../../controllers/post/deletePost.controller";
const router = Router();

router.put("/reactivate/:id", reactivatePost);
router.get("/", StaffgetAllPost);
router.delete("/:id", deletePost);

export = router;
