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
exports.putFollow = void 0;
const User_1 = require("../../models/User");
const putFollow = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userId = req.body.id;
    try {
        if (id !== userId) {
            const user = yield User_1.userModel.findById(id);
            const currentUser = yield User_1.userModel.findById(userId);
            if (!(currentUser === null || currentUser === void 0 ? void 0 : currentUser.following.includes(id))) {
                yield (user === null || user === void 0 ? void 0 : user.updateOne({ $push: { followers: userId } }));
                yield (currentUser === null || currentUser === void 0 ? void 0 : currentUser.updateOne({ $push: { following: id } }));
                let resp = yield User_1.userModel.findById(userId);
                return res.status(200).json(resp === null || resp === void 0 ? void 0 : resp.following);
            }
            ;
            if (currentUser === null || currentUser === void 0 ? void 0 : currentUser.following.includes(id)) {
                yield (user === null || user === void 0 ? void 0 : user.updateOne({ $pull: { followers: userId } }));
                yield (currentUser === null || currentUser === void 0 ? void 0 : currentUser.updateOne({ $pull: { following: id } }));
                let resp = yield User_1.userModel.findById(userId);
                res.status(200).json(resp === null || resp === void 0 ? void 0 : resp.following);
                // res.status(500).json({ msg: "You already follow this user" })
            }
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
    ;
});
exports.putFollow = putFollow;
