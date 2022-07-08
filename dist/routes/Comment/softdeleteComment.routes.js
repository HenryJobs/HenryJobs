"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SoftdeleteComent_controller_1 = require("../../controllers/PostComents/SoftdeleteComent.controller");
const router = (0, express_1.Router)();
router.delete("/:id", SoftdeleteComent_controller_1.softdeleteComent);
exports.default = router;
