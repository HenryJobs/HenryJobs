import { Router } from "express";

const router = Router();

//user
import userRoute from "./user/getAllUser.routes";
import nameRoute from "./user/getUserByName.routes";
import createRoute from "./user/postUser.routes";
import deleteRoute from "./user/delete.routes";
import putRoute from "./user/putUser.routes";
import getUserById from "./user/getUserById.routes";
import getUserByMail from './user/getEmailUser.routes'

router.use('/name', nameRoute);
router.use('/mail', getUserByMail)
router.use('/user', userRoute);
router.use('/user', createRoute);
router.use('/user', deleteRoute);
router.use('/user', putRoute);
router.use('/user', getUserById);

//post

import createPostRoute from './post/createPost.routes'
import getAllPostRoute from './post/getAllPost.routes'

router.use('/post', getAllPostRoute)
router.use('/post', createPostRoute)

export default router;
