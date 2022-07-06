import { Router } from "express";
import { putLikesComment } from "../../controllers/Likes/putLikesComment.controller";

const router = Router()

router.put('/:id', putLikesComment)

export default router