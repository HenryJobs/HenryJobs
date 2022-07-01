"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getBusinessByName_1 = require("../../controllers/businessController/getBusinessByName");
const router = (0, express_1.Router)();
router.get('/', getBusinessByName_1.getBusinessByName);
exports.default = router;
