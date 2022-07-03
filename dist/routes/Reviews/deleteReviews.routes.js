"use strict";
const express_1 = require("express");
const deleteReviews_controller_1 = require("../../controllers/reviews/deleteReviews.controller");
const router = (0, express_1.Router)();
router.delete("/:idReview", deleteReviews_controller_1.deleteReviews);
module.exports = router;
