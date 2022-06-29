"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const updateUser_controller_1 = require("../../controllers/updateUser.controller");
const router = (0, express_1.Router)();
router.put('/:id', updateUser_controller_1.updateUser);
exports.default = router;
