"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
//user
const getAllUser_routes_1 = __importDefault(require("./user/getAllUser.routes"));
const getUserByName_routes_1 = __importDefault(require("./user/getUserByName.routes"));
const postUser_routes_1 = __importDefault(require("./user/postUser.routes"));
const putUser_routes_1 = __importDefault(require("./user/putUser.routes"));
const getUserById_routes_1 = __importDefault(require("./user/getUserById.routes"));
const signinUser_routes_1 = __importDefault(require("./user/signinUser.routes"));
const getEmailUser_routes_1 = __importDefault(require("./user/getEmailUser.routes"));
const postEmailGoogle_routes_1 = __importDefault(require("./user/postEmailGoogle.routes"));
const softdelete_routes_1 = __importDefault(require("./user/softdelete.routes"));
const StaffUserFunctions_routes_1 = __importDefault(require("./user/StaffUserFunctions.routes"));
//validador de token
const validateToken_1 = require("../libs/validateToken");
// user
router.use('/googleauth', postEmailGoogle_routes_1.default, getEmailUser_routes_1.default);
// router.use("/mail", getUserByMail);
router.use("/user", postUser_routes_1.default);
router.use("/signin", signinUser_routes_1.default);
router.use("/user", getUserById_routes_1.default);
router.use("/name", getUserByName_routes_1.default);
router.use("/user", getAllUser_routes_1.default);
router.use("/user", softdelete_routes_1.default);
router.use("/user", putUser_routes_1.default);
router.use("/user/staffOnly", validateToken_1.tokenValidation, validateToken_1.validateStaffToken, StaffUserFunctions_routes_1.default);
//sacar para la demo los token, volverlos a poner inmediatamente
//post
const createPost_routes_1 = __importDefault(require("./post/createPost.routes"));
const getAllPost_routes_1 = __importDefault(require("./post/getAllPost.routes"));
const postApplicant_routes_1 = __importDefault(require("./post/postApplicant.routes"));
const getPostById_routes_1 = __importDefault(require("./post/getPostById.routes"));
const updatePostApplicantstatus_routes_1 = __importDefault(require("./post/updatePostApplicantstatus.routes"));
const postApplicant_routes_2 = __importDefault(require("./post/postApplicant.routes")); // put addToSet newLogic
const softdeletePost_routes_1 = __importDefault(require("./post/softdeletePost.routes"));
const StaffFunctionsPost_routes_1 = __importDefault(require("./post/StaffFunctionsPost.routes"));
const pushPostApplicant_routes_1 = __importDefault(require("./post/pushPostApplicant.routes")); // put de push oldLogic
router.use("/post/staffOnly", validateToken_1.tokenValidation, validateToken_1.validateStaffToken, StaffFunctionsPost_routes_1.default);
router.use("/post", getAllPost_routes_1.default);
router.use("/post", getPostById_routes_1.default);
router.use("/post", createPost_routes_1.default); // acordarse de agregar el tokenValidation
router.use("/post", postApplicant_routes_1.default); // acordarse de agregar el tokenValidation
router.use("/post/apply", updatePostApplicantstatus_routes_1.default);
router.use("/post/old", pushPostApplicant_routes_1.default); // put de push oldLogic
router.use("/post", softdeletePost_routes_1.default); // acordarse de agregar el tokenValidation
router.use("/post", postApplicant_routes_2.default); // acordarse de agregar el tokenValidation // put addToSet newLogic
// follow
const putFollow_routes_1 = __importDefault(require("./follow/putFollow.routes"));
router.use("/follow", putFollow_routes_1.default); // acordarse de agregar el tokenValidation
// comments
const createComment_routes_1 = __importDefault(require("./Comment/createComment.routes"));
const updateComment_routes_1 = __importDefault(require("./Comment/updateComment.routes"));
const getCommentById_routes_1 = __importDefault(require("./Comment/getCommentById.routes"));
const getAllComment_routes_1 = __importDefault(require("./Comment/getAllComment.routes"));
const softdeleteComment_routes_1 = __importDefault(require("./Comment/softdeleteComment.routes"));
const StaffFunctions_routes_1 = __importDefault(require("./Comment/StaffFunctions.routes"));
router.use("/comment/staffOnly", validateToken_1.tokenValidation, validateToken_1.validateStaffToken, StaffFunctions_routes_1.default);
router.use("/comment", getCommentById_routes_1.default);
router.use("/comment", getAllComment_routes_1.default);
router.use("/comment", softdeleteComment_routes_1.default); // acordarse de agregar el tokenValidation
router.use("/comment", createComment_routes_1.default); // acordarse de agregar el tokenValidation
router.use("/comment", updateComment_routes_1.default); // acordarse de agregar el tokenValidation
//reviews
const getReviews_routes_1 = __importDefault(require("./Reviews/getReviews.routes"));
const postReviews_routes_1 = __importDefault(require("./Reviews/postReviews.routes"));
const softDelete_routes_1 = __importDefault(require("./Reviews/softDelete.routes"));
const StaffFunctions_routes_2 = __importDefault(require("./Reviews/StaffFunctions.routes"));
// /reviews/:idUser
// /reviews/:idUser?date=1  sort del más viejo al más nuevo o date=-1 viceversa
// /reviews/:idUser?score=1 sort del peor al mejor o score=-1 viceversa
router.use("/reviews", getReviews_routes_1.default);
router.use("/reviews", softDelete_routes_1.default); //tokens
router.use("/reviews", postReviews_routes_1.default); //tokens
router.use("/reviews/staffOnly", validateToken_1.tokenValidation, validateToken_1.validateStaffToken, StaffFunctions_routes_2.default);
exports.default = router;
