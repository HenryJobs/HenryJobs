import { Router } from "express";
import { softdeleteReviews } from "../../controllers/reviews/softdeleteReviews.controller";

const router = Router();

router.delete("/softdelete/:idReview", softdeleteReviews);

export = router;
