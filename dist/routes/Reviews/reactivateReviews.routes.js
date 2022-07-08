"use strict";
const express_1 = require("express");
const reactivateReviews_contoller_1 = require("../../controllers/reviews/reactivateReviews.contoller");
const router = (0, express_1.Router)();
router.put("/reactivate", reactivateReviews_contoller_1.reactivateReviews);
module.exports = router;
