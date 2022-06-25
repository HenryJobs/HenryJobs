"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createPost_1 = require("../../controllers/post/createPost");
const router = (0, express_1.Router)();
router.post('/', createPost_1.createPost);
exports.default = router;
