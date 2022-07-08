"use strict";
const express_1 = require("express");
const reactivatePost_controller_1 = require("../../controllers/post/reactivatePost.controller");
const StaffgetAllPost_controller_1 = require("../../controllers/post/StaffgetAllPost.controller");
const deletePost_controller_1 = require("../../controllers/post/deletePost.controller");
const router = (0, express_1.Router)();
router.put("/reactivate/:id", reactivatePost_controller_1.reactivatePost);
router.get("/", StaffgetAllPost_controller_1.StaffgetAllPost);
router.delete("/:id", deletePost_controller_1.deletePost);
module.exports = router;
