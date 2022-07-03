"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getAllBusiness_1 = require("../../controllers/businessController/getAllBusiness");
const router = (0, express_1.Router)();
router.get('/', getAllBusiness_1.getAllBusiness);
exports.default = router;
