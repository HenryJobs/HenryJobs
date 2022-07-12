"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getEmailForContact_controller_1 = require("../../controllers/getEmailForContact.controller");
const router = (0, express_1.Router)();
router.get('/:id', getEmailForContact_controller_1.getEmailContact);
exports.default = router;
