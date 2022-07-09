"use strict";
const express_1 = require("express");
const StaffgetallReviews_controller_1 = require("../../controllers/reviews/StaffgetallReviews.controller");
const router = (0, express_1.Router)();
router.get("/:idUser", StaffgetallReviews_controller_1.StaffgetReviews);
module.exports = router;
