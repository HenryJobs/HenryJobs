"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getAllBusiness_controller_1 = require("../../controllers/businessController/getAllBusiness.controller");
const router = (0, express_1.Router)();
router.get('/', getAllBusiness_controller_1.getAllBusiness);
exports.default = router;
