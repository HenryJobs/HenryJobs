import { Router } from "express";
import { createPost } from "../../controllers/post/createPost";

const router = Router()

router.post('/', createPost)

export default router