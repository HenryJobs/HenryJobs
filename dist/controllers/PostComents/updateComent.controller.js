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
exports.updateComent = void 0;
const postComent_1 = require("../../models/postComent");
const updateComent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { text, likes, liked } = req.body;
    try {
        if (id) {
            const update = yield postComent_1.postComent.findByIdAndUpdate({ _id: id }, {
                text: text,
                likes: likes,
                liked: liked
            });
            res.status(200).json(update);
        }
    }
    catch (err) {
        console.error(err);
    }
});
exports.updateComent = updateComent;
