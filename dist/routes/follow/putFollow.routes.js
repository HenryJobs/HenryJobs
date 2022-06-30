"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const putFollowers_controller_1 = require("../../controllers/Follow/putFollowers.controller");
const router = (0, express_1.Router)();
router.put('/:id', putFollowers_controller_1.putFollow);
exports.default = router;
