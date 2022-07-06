"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const putLikesComment_controller_1 = require("../../controllers/Likes/putLikesComment.controller");
const router = (0, express_1.Router)();
router.put('/:id', putLikesComment_controller_1.putLikesComment);
exports.default = router;
