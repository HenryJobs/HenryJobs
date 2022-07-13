"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uploadImages_controller_1 = require("../../controllers/uploadImages.controller");
const router = (0, express_1.Router)();
router.post('/', uploadImages_controller_1.uploadImageController);
exports.default = router;
