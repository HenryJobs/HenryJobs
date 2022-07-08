"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStep = void 0;
const Post_1 = require("../../models/Post");
const updateStep = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { step } = req.body;
    try {
        const post = yield Post_1.postModel.findByIdAndUpdate({ _id: id }, {});
        if (!(post === null || post === void 0 ? void 0 : post.active)) {
            res.status(404).json("this item has been removed");
        }
        else {
            res.status(200).json(post);
        }
    }
    catch (err) {
        console.error(err);
    }
});
exports.updateStep = updateStep;
