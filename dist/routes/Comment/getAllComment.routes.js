"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getAllComent_controller_1 = require("../../controllers/PostComents/getAllComent.controller");
const router = (0, express_1.Router)();
router.get('/', getAllComent_controller_1.getAllComents);
exports.default = router;
