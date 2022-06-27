"use strict";
const express_1 = require("express");
const signinUser_controller_1 = require("../../controllers/signinUser.controller");
const router = (0, express_1.Router)();
router.post("/", signinUser_controller_1.signin);
module.exports = router;
