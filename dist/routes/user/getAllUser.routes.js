"use strict";
const express_1 = require("express");
const getAllUser_controller_1 = require("../../controllers/getAllUser.controller");
const router = (0, express_1.Router)();
router.get('/', getAllUser_controller_1.getAllUser);
module.exports = router;
