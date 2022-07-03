import { Router } from "express";
import { getReviews } from "../../controllers/reviews/getReviews.controller";

const router = Router();

router.get("/:idUser", getReviews);

export = router;
