"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postEmailUser_controller_1 = require("../../controllers/user/postEmailUser.controller");
const router = (0, express_1.Router)();
router.post('/', postEmailUser_controller_1.createUserGoogle);
exports.default = router;
