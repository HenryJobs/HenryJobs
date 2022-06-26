"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getUserById_controller_1 = require("../../controllers/getUserById.controller");
const router = (0, express_1.Router)();
router.get('/:id', getUserById_controller_1.getUserById);
exports.default = router;
