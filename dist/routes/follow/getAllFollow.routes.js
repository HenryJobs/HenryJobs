"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getFollow_1 = require("../../controllers/Follow/getFollow");
const router = (0, express_1.Router)();
router.get('/', getFollow_1.getAllFollow);
exports.default = router;
