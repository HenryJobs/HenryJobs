import { Router } from "express";

const router = Router();

import userRoute from "./user/getAllUser.routes";
import nameRoute from "./user/getUserByName.routes";
import createRoute from "./user/postUser.routes";
import deleteRoute from "./user/delete.routes";
import putRoute from "./user/putUser.routes";
import getUserById from "./user/getUserById.routes";


router.use('/name', nameRoute);
router.use('/user', userRoute);
router.use('/user', createRoute);
router.use('/user', deleteRoute);
router.use('/user', putRoute);
router.use('/user', getUserById);

export default router;
