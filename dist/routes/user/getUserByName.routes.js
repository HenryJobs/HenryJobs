"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getUserByName_controller_1 = require("../../controllers/getUserByName.controller");
const router = (0, express_1.Router)();
router.get('/', getUserByName_controller_1.getUserByName);
exports.default = router;
