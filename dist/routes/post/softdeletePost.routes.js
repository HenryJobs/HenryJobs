"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const softdeletePost_controller_1 = require("../../controllers/post/softdeletePost.controller");
const router = (0, express_1.Router)();
router.delete("/:id", softdeletePost_controller_1.softdeletePost);
exports.default = router;
