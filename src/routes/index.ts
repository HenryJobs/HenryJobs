import { Router } from "express";

const router = Router();

//user
import userRoute from "./user/getAllUser.routes";
import nameRoute from "./user/getUserByName.routes";
import createRoute from "./user/postUser.routes";
import deleteRoute from "./user/delete.routes";
import putRoute from "./user/putUser.routes";
import getUserById from "./user/getUserById.routes";
import Usersignin from "./user/signinUser.routes";
import getUserByMail from "./user/getEmailUser.routes";

//validadores
import {
  tokenValidation,
  validatePGToken,
  validatePremiumToken,
  validateGraduateToken,
  validateRecruiterToken,
  validateStaffToken,
  validateBusinessToken,
} from "../libs/validateToken";



// user
router.use("/user", userRoute);
router.use("/name", nameRoute);
router.use("/mail", getUserByMail);
router.use("/user", createRoute);
router.use("/user", deleteRoute);
router.use("/user", putRoute);
router.use("/user", getUserById);
router.use("/signin", Usersignin);

//post

import createPostRoute from './post/createPost.routes'
import getAllPostRoute from './post/getAllPost.routes'
import deletePostRoute from './post/deletePost.routes'
import updatePostRoute from './post/updatePost.routes'
import getPostByIdRoute from './post/getPostById.routes'

router.use('/post', getAllPostRoute)
router.use('/post', createPostRoute)
router.use('/post', deletePostRoute)
router.use('/post', updatePostRoute)
router.use('/post', getPostByIdRoute)

// follow

import putFollow from "./follow/putFollow.routes";

router.use("/follow", putFollow);

// comments
import createCommentRoute from './Comment/createComment.routes'
import deleteCommentRoute from './Comment/deleteComment.routes'
import updateCommentRoute from './Comment/updateComment.routes'
import getCommentIdRoute from './Comment/getCommentById.routes'
import getAllCommentRoute from './Comment/getAllComment.routes'

router.use('/comment', deleteCommentRoute)
router.use('/comment', createCommentRoute)
router.use('/comment', updateCommentRoute)
router.use('/comment', getCommentIdRoute)
router.use('/comment', getAllCommentRoute)


export default router;
