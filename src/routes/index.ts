import { Router } from "express";

const router = Router();
import userRoute from "./user/getAllUser.routes";
import nameRoute from "./user/getUserByName.routes"

router.use('/user', userRoute);
router.use('/name', nameRoute)

export default router;
