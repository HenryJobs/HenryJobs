"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getApplicantById_controller_1 = require("../../controllers/Applicants/getApplicantById.controller");
const router = (0, express_1.Router)();
router.get('/:id', getApplicantById_controller_1.getApplicantById);
exports.default = router;
