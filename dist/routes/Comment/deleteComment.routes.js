"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const deleteComent_controller_1 = require("../../controllers/PostComents/deleteComent.controller");
const router = (0, express_1.Router)();
router.delete('/', deleteComent_controller_1.deleteComent);
exports.default = router;
