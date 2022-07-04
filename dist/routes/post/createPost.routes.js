"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createPost_controller_1 = require("../../controllers/post/createPost.controller");
const router = (0, express_1.Router)();
router.post('/', createPost_controller_1.createPost);
exports.default = router;
