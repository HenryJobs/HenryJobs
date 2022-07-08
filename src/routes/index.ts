import { Router } from "express";
const router = Router();

//validador de token
import { tokenValidation } from "../libs/validateToken";

//user

import userRoute from "./user/getAllUser.routes";
import nameRoute from "./user/getUserByName.routes";
import createRoute from "./user/postUser.routes";
import deleteRoute from "./user/delete.routes";
import putRoute from "./user/putUser.routes";
import getUserById from "./user/getUserById.routes";
import Usersignin from "./user/signinUser.routes";
import getUserByMail from "./user/getEmailUser.routes";
import postUserGoogleRoute from './user/postEmailGoogle.routes' 

router.use('/googleauth', postUserGoogleRoute);
router.use("/mail", getUserByMail);
router.use("/user", createRoute);
router.use("/signin", Usersignin);
router.use("/user", getUserById);
router.use("/name", nameRoute);
router.use("/user", userRoute);
router.use("/user", deleteRoute);
router.use("/user", putRoute);

//sacar para la demo los token, volverlos a poner inmediatamente

//post

import createPostRoute from "./post/createPost.routes";
import getAllPostRoute from "./post/getAllPost.routes";
import deletePostRoute from "./post/deletePost.routes";
import updatePostRoute from "./post/updatePost.routes";
import getPostByIdRoute from "./post/getPostById.routes";
import updatePostApplicantsRoute from "./post/updatePostApplicantstatus.routes";

router.use("/post", getAllPostRoute);
router.use("/post", getPostByIdRoute);
router.use("/post", createPostRoute); // acordarse de agregar el tokenValidation
router.use("/post", deletePostRoute); // acordarse de agregar el tokenValidation
router.use("/post", updatePostRoute); // acordarse de agregar el tokenValidation
router.use("/post/apply", updatePostApplicantsRoute)


// follow

import putFollow from "./follow/putFollow.routes";

router.use("/follow", putFollow); // acordarse de agregar el tokenValidation


// comments
import createCommentRoute from "./Comment/createComment.routes";
import deleteCommentRoute from "./Comment/deleteComment.routes";
import updateCommentRoute from "./Comment/updateComment.routes";
import getCommentIdRoute from "./Comment/getCommentById.routes";
import getAllCommentRoute from "./Comment/getAllComment.routes";

router.use("/comment", getCommentIdRoute);
router.use("/comment", getAllCommentRoute);
router.use("/comment", tokenValidation, deleteCommentRoute);
router.use("/comment", tokenValidation, createCommentRoute);
router.use("/comment", tokenValidation, updateCommentRoute);

//reviews
import getReviews from "./Reviews/getReviews.routes";
import postReview from "./Reviews/postReviews.routes";
import deleteReviews from "./Reviews/deleteReviews.routes";
// /reviews/:idUser
// /reviews/:idUser?date=1  sort del más viejo al más nuevo o date=-1 viceversa
// /reviews/:idUser?score=1 sort del peor al mejor o score=-1 viceversa
router.use("/reviews", getReviews);
router.use("/reviews", tokenValidation, deleteReviews);
router.use("/reviews", tokenValidation, postReview);

export default router;
