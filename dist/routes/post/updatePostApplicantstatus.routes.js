"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const updatePostApplicant_controller_1 = require("../../controllers/post/updatePostApplicant.controller");
const router = (0, express_1.Router)();
router.put('/:id', updatePostApplicant_controller_1.updatePostApplicantStatus);
exports.default = router;
