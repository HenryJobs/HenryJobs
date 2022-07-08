import { Router } from "express";

const router = Router();

//user
import userRoute from "./user/getAllUser.routes";
import nameRoute from "./user/getUserByName.routes";
import createRoute from "./user/postUser.routes";
import putRoute from "./user/putUser.routes";
import getUserById from "./user/getUserById.routes";
import Usersignin from "./user/signinUser.routes";
import getUserByMail from "./user/getEmailUser.routes";
import softdeleteUser from "./user/softdelete.routes";
import staffFunctionsUser from "./user/StaffUserFunctions.routes";

//validador de token
import { tokenValidation, validateStaffToken } from "../libs/validateToken";

// user

router.use("/user", createRoute);
router.use("/user", getUserById);
router.use("/name", nameRoute);
router.use("/mail", getUserByMail);
router.use("/signin", Usersignin);
router.use("/user", userRoute);
router.use("/user", softdeleteUser);
router.use("/user", putRoute);
router.use(
  "/user/staffOnly",
  tokenValidation,
  validateStaffToken,
  staffFunctionsUser
);

//sacar para la demo los token, volverlos a poner inmediatamente

//post

import createPostRoute from "./post/createPost.routes";
import getAllPostRoute from "./post/getAllPost.routes";
import updatePostRoute from "./post/updatePost.routes";
import getPostByIdRoute from "./post/getPostById.routes";
import softdeletePostRoute from "./post/softdeletePost.routes";
import StaffFunctionsPost from "./post/StaffFunctionsPost.routes";

router.use(
  "/post/staffOnly",
  tokenValidation,
  validateStaffToken,
  StaffFunctionsPost
);
router.use("/post", getAllPostRoute);
router.use("/post", getPostByIdRoute);
router.use("/post", softdeletePostRoute);
router.use("/post", tokenValidation, createPostRoute); // acordarse de agregar el tokenValidation
router.use("/post", tokenValidation, updatePostRoute); // acordarse de agregar el tokenValidation

// follow

import putFollow from "./follow/putFollow.routes";

router.use("/follow", tokenValidation, putFollow); // acordarse de agregar el tokenValidation

// comments
import createCommentRoute from "./Comment/createComment.routes";
import updateCommentRoute from "./Comment/updateComment.routes";
import getCommentIdRoute from "./Comment/getCommentById.routes";
import getAllCommentRoute from "./Comment/getAllComment.routes";
import softdelteCommentRoute from "./Comment/softdeleteComment.routes";
import staffFunctionsComments from "./Comment/StaffFunctions.routes";

router.use(
  "/comment/staffOnly",
  tokenValidation,
  validateStaffToken,
  staffFunctionsComments
);
router.use("/comment", getCommentIdRoute);
router.use("/comment", getAllCommentRoute);
router.use("/comment", tokenValidation, softdelteCommentRoute);
router.use("/comment", tokenValidation, createCommentRoute);
router.use("/comment", tokenValidation, updateCommentRoute);

//reviews
import getReviews from "./Reviews/getReviews.routes";
import postReview from "./Reviews/postReviews.routes";
import softdeleteReviews from "./Reviews/softDelete.routes";
import staffFunctions from "./Reviews/StaffFunctions.routes";
// /reviews/:idUser
// /reviews/:idUser?date=1  sort del más viejo al más nuevo o date=-1 viceversa
// /reviews/:idUser?score=1 sort del peor al mejor o score=-1 viceversa

router.use("/reviews", getReviews);
router.use("/reviews", tokenValidation, softdeleteReviews);
router.use("/reviews", tokenValidation, postReview);
router.use(
  "/reviews/staffOnly",
  tokenValidation,
  validateStaffToken,
  staffFunctions
);

export default router;
