import { Router } from "express";
import { updatePost } from "../../controllers/post/updatePost.controller";

const router = Router()

router.put('/:id', updatePost)

export default router