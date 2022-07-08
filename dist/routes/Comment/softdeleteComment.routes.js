"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const softdeleteComent_controller_1 = require("../../controllers/PostComents/softdeleteComent.controller");
const router = (0, express_1.Router)();
router.delete("/:id", softdeleteComent_controller_1.softdeleteComent);
exports.default = router;
