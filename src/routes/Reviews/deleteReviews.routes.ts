import { Router } from "express";
import { deleteReviews } from "../../controllers/reviews/deleteReviews.controller";

const router = Router();

router.delete("/:idReview", deleteReviews);

export = router;
