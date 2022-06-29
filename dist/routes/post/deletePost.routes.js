"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const deletePost_controller_1 = require("../../controllers/post/deletePost.controller");
const router = (0, express_1.Router)();
router.delete('/:id', deletePost_controller_1.deletePost);
exports.default = router;
