import { Router } from "express";

const router = Router();
import userRoute from "./user/getAllUser.routes";

router.use('/user', userRoute);

export default router;
