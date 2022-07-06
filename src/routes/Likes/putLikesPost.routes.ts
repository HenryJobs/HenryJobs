import { Router } from "express";
import { putLikesPost } from "../../controllers/Likes/putLikesPost.controller";

const router = Router()

router.put('/:id', putLikesPost)

export default router