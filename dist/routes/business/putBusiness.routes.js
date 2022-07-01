"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const updateBusiness_1 = require("../../controllers/businessController/updateBusiness");
const router = (0, express_1.Router)();
router.put('/:id', updateBusiness_1.updateBusiness);
exports.default = router;
