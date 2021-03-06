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
import postUserGoogleRoute from './user/postEmailGoogle.routes';
import softdeleteUser from "./user/softdelete.routes";
import staffFunctionsUser from "./user/StaffUserFunctions.routes";
import emailWarning from "./user/getEmailWarning.routes";
import emailContact from './user/getEmailContact.routes';
import henryStar from './user/updateUserStar.routes';
import uploadImageRoute from "./user/uploadImage.routes";

//validador de token
import { tokenValidation, validateStaffToken } from "../libs/validateToken";

// user

// router.use('/googleauth', postUserGoogleRoute, getUserByMail);
router.use("/contact", emailContact)
router.use("/mail", getUserByMail);
router.use("/user", createRoute);
router.use("/signin", Usersignin);
router.use("/user", getUserById);
router.use("/name", nameRoute);
router.use("/user", userRoute);
router.use("/user", softdeleteUser);
router.use("/user", putRoute);
router.use("/advertencia", emailWarning);
router.use('/user/star', henryStar);
router.use('/upload', uploadImageRoute);
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
import updatePostApplicant from "./post/postApplicant.routes";
import getPostByIdRoute from "./post/getPostById.routes";
import updatePostApplicantsRoute from "./post/updatePostApplicantstatus.routes";
import updatePostRoute from "./post/pushPostApplicant.routes"; // put addToSet oldLogic
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
router.use("/post", createPostRoute); // acordarse de agregar el tokenValidation
router.use("/post", updatePostApplicant); // acordarse de agregar el tokenValidation
router.use("/post/apply", updatePostApplicantsRoute)
router.use("/post/old", updatePostRoute) // put de push old
router.use("/post", softdeletePostRoute); // acordarse de agregar el tokenValidation

// follow

import putFollow from "./follow/putFollow.routes";

router.use("/follow", putFollow); // acordarse de agregar el tokenValidation

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
router.use("/comment", softdelteCommentRoute); // acordarse de agregar el tokenValidation
router.use("/comment", createCommentRoute); // acordarse de agregar el tokenValidation
router.use("/comment", updateCommentRoute); // acordarse de agregar el tokenValidation

//reviews
import getReviews from "./Reviews/getReviews.routes";
import postReview from "./Reviews/postReviews.routes";
import softdeleteReviews from "./Reviews/softDelete.routes";
import staffFunctions from "./Reviews/StaffFunctions.routes";
// /reviews/:idUser
// /reviews/:idUser?date=1  sort del m??s viejo al m??s nuevo o date=-1 viceversa
// /reviews/:idUser?score=1 sort del peor al mejor o score=-1 viceversa

router.use("/reviews", getReviews);
router.use("/reviews", softdeleteReviews); //tokens
router.use("/reviews", postReview); //tokens
router.use(
  "/reviews/staffOnly",
  tokenValidation,
  validateStaffToken,
  staffFunctions
);

export default router;
