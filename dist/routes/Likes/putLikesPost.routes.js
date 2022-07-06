"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const putLikesPost_controller_1 = require("../../controllers/Likes/putLikesPost.controller");
const router = (0, express_1.Router)();
router.put('/:id', putLikesPost_controller_1.putLikesPost);
exports.default = router;
