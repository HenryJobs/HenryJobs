import { Router } from "express";
import { deletePost } from "../../controllers/post/deletePost";

const router = Router()

router.delete('/:id', deletePost)

export default router