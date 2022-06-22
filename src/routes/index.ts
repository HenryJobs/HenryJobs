import { Router } from "express";

const router = Router();

import userRoute from "./user/getAllUser.routes";
import nameRoute from "./user/getUserByName.routes";
import createRoute from "./user/postUser.routes";
import deleteRoute from "./user/delete.routes";
import putRoute from "./user/putUser.routes";
import getUserById from "./user/getUserById.routes";
import signinUser from "./user/signinUser.routes";

import { TokenValidation } from "../libs/validateToken";

router.use("/name", nameRoute);
router.use("/user", TokenValidation, userRoute);
router.use("/user", createRoute);
router.use("/user", deleteRoute);
router.use("/user", putRoute);
router.use("/user", getUserById);
router.use("/user/signin", signinUser);

export default router;
