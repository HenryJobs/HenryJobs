"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postUser_controller_1 = require("../../controllers/postUser.controller");
const router = (0, express_1.Router)();
router.post('/', postUser_controller_1.createUser);
exports.default = router;
