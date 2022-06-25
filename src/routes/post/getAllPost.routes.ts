import { Router } from "express";
import { getAllPost } from "../../controllers/post/getAllPost";

const router = Router()

router.get('/', getAllPost)

export default router