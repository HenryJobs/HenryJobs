"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const putApplicants_controller_1 = require("../../controllers/Applicants/putApplicants.controller");
const router = (0, express_1.Router)();
router.put('/:id', putApplicants_controller_1.putApplicants);
exports.default = router;
