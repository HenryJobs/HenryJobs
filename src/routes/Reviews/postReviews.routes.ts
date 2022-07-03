import { Router } from "express";
import { postReview } from "../../controllers/reviews/postReview.controller";

const router = Router();

router.post("/", postReview);

export = router;
