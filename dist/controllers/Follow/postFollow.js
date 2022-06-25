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
exports.createFollow = void 0;
const Follow_1 = require("../../models/Follow");
const createFollow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { followUser: _id } = req.body;
    try {
        const follow = yield Follow_1.followModel.create({
            followUser: _id,
            followers: _id,
        });
        res.status(201).json(follow);
    }
    catch (err) {
        console.error(err);
    }
});
exports.createFollow = createFollow;
