"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getAllPost_controller_1 = require("../../controllers/post/getAllPost.controller");
const router = (0, express_1.Router)();
router.get('/', getAllPost_controller_1.getAllPost);
exports.default = router;
