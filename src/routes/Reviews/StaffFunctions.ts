import { Router } from "express";
import { StaffgetReviews } from "../../controllers/reviews/StaffgetallReviews.controller";
import { deleteReviews } from "../../controllers/reviews/deleteReviews.controller";
import { reactivateReviews } from "../../controllers/reviews/reactivateReviews.contoller";

const router = Router();

router.get("/:idUser", StaffgetReviews);
router.delete("/:idReview", deleteReviews);
router.put("/reactivate", reactivateReviews);

export = router;
