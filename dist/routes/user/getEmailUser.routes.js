"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getUserByEmail_1 = require("../../controllers/getUserByEmail");
const router = (0, express_1.Router)();
router.get('/', getUserByEmail_1.getUserEmail);
exports.default = router;
