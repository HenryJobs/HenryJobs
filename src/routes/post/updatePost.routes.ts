import { Router } from "express";
import { updatePost } from "../../controllers/post/updatePost";

const router = Router()

router.put('/:id', updatePost)

export default router