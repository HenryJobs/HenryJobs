"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getPostById_1 = require("../../controllers/post/getPostById");
const router = (0, express_1.Router)();
router.get('/', getPostById_1.getPostById);
exports.default = router;
