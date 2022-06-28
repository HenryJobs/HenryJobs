"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getFollow_controller_1 = require("../../controllers/Follow/getFollow.controller");
const router = (0, express_1.Router)();
router.get('/', getFollow_controller_1.getAllFollow);
exports.default = router;
