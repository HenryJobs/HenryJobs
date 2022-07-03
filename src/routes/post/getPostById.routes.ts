import { Router } from "express";
import { getPostById } from "../../controllers/post/getPostById.controller"; 

const router = Router()

router.get('/:id', getPostById)

export default router