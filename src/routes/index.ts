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

import getUserByMail from "./user/getEmailUser.routes";

// comments
import createCommentRoute from "./Comment/createComment.routes";

// follow
import getAllFollowRoute from "./follow/getAllFollow.routes";
import createFollowRoute from "./follow/createFollow.routes";

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
import createPostRoute from "./post/createPost.routes";
import getAllPostRoute from "./post/getAllPost.routes";
import deletePostRoute from "./post/deletePost.routes";

router.use("/post", getAllPostRoute);
router.use("/post", createPostRoute);
router.use("/post", deletePostRoute);

//business

// import createBusinessRoute from './business/createBusiness.routes'
// import getAllBusinessRoute from './business/getAllBusiness.routes'
// import updateBusinessRoute from './business/putBusiness.routes'
// import deleteBusinessRoute from './business/deleteBusiness.routes'
// import getBusinessByIdRoute from './business/getBusinessById.routes'
// import getBusinessByEmailRoute from './business/getBusinessEmail.routes'
// import getBusinessByNameRoute from './business/getBusinessByName.routes'

// router.use('/business', getAllBusinessRoute)
// router.use('/business', createBusinessRoute)
// router.use('/business', updateBusinessRoute)
// router.use('/business', deleteBusinessRoute)
// router.use('/business', getBusinessByIdRoute)
// router.use('/business', getBusinessByEmailRoute)
// router.use('/business', getBusinessByNameRoute)

//follow

// follow

import putFollow from "./follow/putFollow.routes";

router.use("/follow", getAllFollowRoute);
router.use("/follow", createFollowRoute);
router.use("/follow", putFollow);

// comments
router.use("/comment", createCommentRoute);

export default router;
