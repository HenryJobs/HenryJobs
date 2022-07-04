"use strict";
const express_1 = require("express");
const postReview_controller_1 = require("../../controllers/reviews/postReview.controller");
const router = (0, express_1.Router)();
router.post("/", postReview_controller_1.postReview);
module.exports = router;
