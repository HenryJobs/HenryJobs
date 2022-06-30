"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PRUEBAGraduate_controller_1 = require("../../controllers/PRUEBAGraduate.controller");
const router = (0, express_1.Router)();
router.get("/", PRUEBAGraduate_controller_1.PruebaGraduate);
exports.default = router;
