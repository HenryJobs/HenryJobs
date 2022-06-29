import { Router } from "express";
import { deletePost } from "../../controllers/post/deletePost.controller";

const router = Router()

router.delete('/:id', deletePost)

export default router