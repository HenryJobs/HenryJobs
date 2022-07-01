"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const deleteBusiness_controller_1 = require("../../controllers/businessController/deleteBusiness.controller");
const router = (0, express_1.Router)();
router.delete('/', deleteBusiness_controller_1.deleteBusiness);
exports.default = router;
