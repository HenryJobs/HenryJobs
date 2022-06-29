"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getComentById_1 = require("../../controllers/PostComents/getComentById");
const router = (0, express_1.Router)();
router.get('/:id', getComentById_1.getComentById);
exports.default = router;
