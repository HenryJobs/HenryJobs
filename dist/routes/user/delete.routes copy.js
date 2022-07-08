"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const deleteUser_controller_1 = require("../../controllers/deleteUser.controller");
const router = (0, express_1.Router)();
router.delete('/:id', deleteUser_controller_1.deleteUser);
exports.default = router;
