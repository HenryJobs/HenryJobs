"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const softdeleteUser_controller_1 = require("../../controllers/softdeleteUser.controller");
const router = (0, express_1.Router)();
router.delete("/:id", softdeleteUser_controller_1.softdeleteUser);
exports.default = router;
