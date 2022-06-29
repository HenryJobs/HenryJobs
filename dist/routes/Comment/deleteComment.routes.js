"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const deleteComent_1 = require("../../controllers/PostComents/deleteComent");
const router = (0, express_1.Router)();
router.delete('/', deleteComent_1.deleteComent);
exports.default = router;
