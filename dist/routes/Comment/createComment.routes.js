"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createComent_controller_1 = require("../../controllers/PostComents/createComent.controller");
const router = (0, express_1.Router)();
router.post('/', createComent_controller_1.createComent);
exports.default = router;
