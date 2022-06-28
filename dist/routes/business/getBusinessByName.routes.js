"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getBusinessByName_controller_1 = require("../../controllers/businessController/getBusinessByName.controller");
const router = (0, express_1.Router)();
router.get('/', getBusinessByName_controller_1.getBusinessByName);
exports.default = router;
