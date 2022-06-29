"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getBusinessById_controller_1 = require("../../controllers/businessController/getBusinessById.controller");
const router = (0, express_1.Router)();
router.get('/:id', getBusinessById_controller_1.getBusinessById);
exports.default = router;
