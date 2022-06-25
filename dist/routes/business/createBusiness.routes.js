"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createBusiness_1 = require("../../controllers/businessController/createBusiness");
const router = (0, express_1.Router)();
router.post('/', createBusiness_1.postBusiness);
exports.default = router;
