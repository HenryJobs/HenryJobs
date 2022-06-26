"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getAllPost_1 = require("../../controllers/post/getAllPost");
const router = (0, express_1.Router)();
router.get('/', getAllPost_1.getAllPost);
exports.default = router;
