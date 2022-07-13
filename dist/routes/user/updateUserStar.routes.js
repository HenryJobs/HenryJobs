"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const updateHenryStar_controller_1 = require("../../controllers/updateHenryStar.controller");
const router = (0, express_1.Router)();
router.put('/:id', updateHenryStar_controller_1.updateStar);
exports.default = router;
