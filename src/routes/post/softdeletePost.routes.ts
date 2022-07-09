import { Router } from "express";
import { softdeletePost } from "../../controllers/post/softdeletePost.controller";

const router = Router();

router.delete("/:id", softdeletePost);

export default router;
