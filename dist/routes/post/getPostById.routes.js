"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getPostById_controller_1 = require("../../controllers/post/getPostById.controller");
const router = (0, express_1.Router)();
router.get('/:id', getPostById_controller_1.getPostById);
exports.default = router;
