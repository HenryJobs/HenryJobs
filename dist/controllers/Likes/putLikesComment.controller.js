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
exports.putLikesComment = void 0;
const postComent_1 = require("../../models/postComent");
const putLikesComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { likes } = req.body;
    try {
        if (id !== likes) {
            const updateLikes = yield postComent_1.postComent.findById(id);
            if (updateLikes === null || updateLikes === void 0 ? void 0 : updateLikes.likes.includes(id)) {
                yield updateLikes.updateOne({
                    $push: { likes: id }
                });
                let resp = yield postComent_1.postComent.findById(likes);
                return res.status(200).json(resp === null || resp === void 0 ? void 0 : resp.likes);
            }
            if (!(updateLikes === null || updateLikes === void 0 ? void 0 : updateLikes.likes.includes(id))) {
                yield (updateLikes === null || updateLikes === void 0 ? void 0 : updateLikes.updateOne({
                    $pull: { likes: id }
                }));
                let resp = yield postComent_1.postComent.findById(likes);
                return res.status(200).json(resp === null || resp === void 0 ? void 0 : resp.likes);
            }
            // if(!updateLikes?.likes.includes(id)) {
            //     await updateLikes?.updateOne({ $push: { likes: likes }})
            // }
        }
    }
    catch (err) {
        console.error(err);
    }
});
exports.putLikesComment = putLikesComment;
