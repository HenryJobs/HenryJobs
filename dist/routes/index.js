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
const delete_routes_1 = __importDefault(require("./user/delete.routes"));
const putUser_routes_1 = __importDefault(require("./user/putUser.routes"));
const getUserById_routes_1 = __importDefault(require("./user/getUserById.routes"));
// import signinUser from "./user/signinUser.routes";
// import { tokenValidation } from "../libs/validateToken";
const getEmailUser_routes_1 = __importDefault(require("./user/getEmailUser.routes"));
// comments
const createComment_routes_1 = __importDefault(require("./Comment/createComment.routes"));
// follow
const getAllFollow_routes_1 = __importDefault(require("./follow/getAllFollow.routes"));
const createFollow_routes_1 = __importDefault(require("./follow/createFollow.routes"));
router.use("/user", getAllUser_routes_1.default);
router.use('/name', getUserByName_routes_1.default);
router.use('/mail', getEmailUser_routes_1.default);
router.use('/user', postUser_routes_1.default);
router.use('/user', delete_routes_1.default);
router.use('/user', putUser_routes_1.default);
router.use('/user', getUserById_routes_1.default);
// router.use("/signin", signinUser);
//post
const createPost_routes_1 = __importDefault(require("./post/createPost.routes"));
const getAllPost_routes_1 = __importDefault(require("./post/getAllPost.routes"));
const deletePost_routes_1 = __importDefault(require("./post/deletePost.routes"));
router.use('/post', getAllPost_routes_1.default);
router.use('/post', createPost_routes_1.default);
router.use('/post', deletePost_routes_1.default);
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
router.use('/follow', getAllFollow_routes_1.default);
router.use('/follow', createFollow_routes_1.default);
// comments
router.use('/comment', createComment_routes_1.default);
exports.default = router;
