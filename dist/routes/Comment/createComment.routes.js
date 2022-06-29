"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createComent_1 = require("../../controllers/PostComents/createComent");
const router = (0, express_1.Router)();
router.post('/', createComent_1.createComent);
exports.default = router;
