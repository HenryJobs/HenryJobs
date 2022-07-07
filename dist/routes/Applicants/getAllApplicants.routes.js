"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getAllApplicants__controller_1 = require("../../controllers/Applicants/getAllApplicants..controller");
const router = (0, express_1.Router)();
router.get('/', getAllApplicants__controller_1.getAllApplicant);
exports.default = router;
