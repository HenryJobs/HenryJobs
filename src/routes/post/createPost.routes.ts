import { Router } from "express";
import { createPost } from "../../controllers/post/createPost.controller";

const router = Router()

router.post('/', createPost)

export default router