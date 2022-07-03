"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getBusinessById_1 = require("../../controllers/businessController/getBusinessById");
const router = (0, express_1.Router)();
router.get('/:id', getBusinessById_1.getBusinessById);
exports.default = router;
