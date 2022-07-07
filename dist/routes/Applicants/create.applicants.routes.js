"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createApplicants_controller_1 = require("../../controllers/Applicants/createApplicants.controller");
const router = (0, express_1.Router)();
router.post('/', createApplicants_controller_1.createApplicants);
exports.default = router;
