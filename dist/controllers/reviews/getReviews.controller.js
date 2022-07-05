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
exports.getReviews = void 0;
const Reviews_1 = require("../../models/Reviews");
const getReviews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUser } = req.params;
    const { date, score } = req.query;
    try {
        if (!idUser) {
            res.status(404).send("not id user found");
        }
        else {
            const obj = {};
            if (date) {
                obj.date = date;
            }
            if (score) {
                obj.score = score;
            }
            const reviews = yield Reviews_1.reviewsModel
                .find({ reviewReceiver: idUser })
                .populate("reviewer", "userName")
                .populate("reviewReceiver", "userName")
                .sort(obj);
            if (reviews.length < 1) {
                res.status(404).send("not reviews found");
            }
            else {
                res.send(reviews);
            }
        }
    }
    catch (error) { }
});
exports.getReviews = getReviews;
//
