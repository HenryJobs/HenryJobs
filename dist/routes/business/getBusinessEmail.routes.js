"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getBusinessByMail_1 = require("../../controllers/businessController/getBusinessByMail");
const router = (0, express_1.Router)();
router.get('/', getBusinessByMail_1.getBusinessEmail);
exports.default = router;
