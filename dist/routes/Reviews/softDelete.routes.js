"use strict";
const express_1 = require("express");
const softdeleteReviews_controller_1 = require("../../controllers/reviews/softdeleteReviews.controller");
const router = (0, express_1.Router)();
router.delete("/softdelete/:idReview", softdeleteReviews_controller_1.softdeleteReviews);
module.exports = router;
