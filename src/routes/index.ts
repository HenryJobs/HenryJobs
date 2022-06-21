import { Router } from "express";

const router = Router();

import userRoute from "./user/getAllUser.routes";
import nameRoute from "./user/getUserByName.routes";
import createRoute from "./user/postUser.routes";
import deleteRoute from "./user/delete.routes";


router.use('/user', userRoute);
router.use('/user', createRoute);
router.use('/name', nameRoute);
router.use('/user', deleteRoute)

export default router;
