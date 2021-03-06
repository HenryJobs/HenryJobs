"use strict";
const express_1 = require("express");
const StaffgetAllUser_controller_1 = require("../../controllers/StaffgetAllUser.controller");
const deleteUser_controller_1 = require("../../controllers/deleteUser.controller");
const reactiveUser_controller_1 = require("../../controllers/reactiveUser.controller");
const router = (0, express_1.Router)();
router.get("/", StaffgetAllUser_controller_1.StaffgetAllUser);
router.put("/:id", reactiveUser_controller_1.reactiveUser);
router.delete("/:id", deleteUser_controller_1.deleteUser);
module.exports = router;
