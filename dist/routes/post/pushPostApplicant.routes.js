"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pushPostApplicant_controller_1 = require("../../controllers/post/pushPostApplicant.controller");
const router = (0, express_1.Router)();
router.put('/:id', pushPostApplicant_controller_1.pushPostApplicant);
exports.default = router;
