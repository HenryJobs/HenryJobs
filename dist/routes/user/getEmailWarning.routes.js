"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getEmailWarning_controller_1 = require("../../controllers/getEmailWarning.controller");
const router = (0, express_1.Router)();
router.get('/:id', getEmailWarning_controller_1.getEmailWarning);
exports.default = router;
