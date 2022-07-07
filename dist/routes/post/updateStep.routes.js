"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateStep_controller_1 = require("../../controllers/post/updateStep.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.put('/:id', updateStep_controller_1.updateStep);
exports.default = router;
