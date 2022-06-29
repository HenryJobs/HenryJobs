"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postFollow_controller_1 = require("../../controllers/Follow/postFollow.controller");
const router = (0, express_1.Router)();
router.post('/', postFollow_controller_1.createFollow);
exports.default = router;
