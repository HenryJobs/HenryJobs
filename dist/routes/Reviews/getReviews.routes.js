"use strict";
const express_1 = require("express");
const getReviews_controller_1 = require("../../controllers/reviews/getReviews.controller");
const router = (0, express_1.Router)();
router.get("/:idUser", getReviews_controller_1.getReviews);
module.exports = router;
