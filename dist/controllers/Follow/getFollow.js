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
exports.getAllFollow = void 0;
const Follow_1 = require("../../models/Follow");
const getAllFollow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let follower;
        follower = yield Follow_1.followModel.find().populate("followUser", "followers");
        if (follower) {
            res.status(200).json(follower);
        }
    }
    catch (err) {
        console.error(err);
    }
});
exports.getAllFollow = getAllFollow;
