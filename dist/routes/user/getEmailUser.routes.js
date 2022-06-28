"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getUserByEmail_controller_1 = require("../../controllers/getUserByEmail.controller");
const router = (0, express_1.Router)();
router.get('/', getUserByEmail_controller_1.getUserEmail);
exports.default = router;
