"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const updateComent_controller_1 = require("../../controllers/PostComents/updateComent.controller");
const router = (0, express_1.Router)();
router.put('/:id', updateComent_controller_1.updateComent);
exports.default = router;
