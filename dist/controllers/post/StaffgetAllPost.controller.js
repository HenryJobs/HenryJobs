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
exports.StaffgetAllPost = void 0;
const Post_1 = require("../../models/Post");
const StaffgetAllPost = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let posters;
        posters = yield Post_1.postModel.find().populate("posterUser");
        if (posters) {
            res.status(200).json(posters);
        }
    }
    catch (err) {
        console.log(err);
    }
});
exports.StaffgetAllPost = StaffgetAllPost;
