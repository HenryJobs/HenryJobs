"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postApplicant_controller_1 = require("../../controllers/post/postApplicant.controller");
const router = (0, express_1.Router)();
router.put('/:id', postApplicant_controller_1.updatePostApplicant);
exports.default = router;
