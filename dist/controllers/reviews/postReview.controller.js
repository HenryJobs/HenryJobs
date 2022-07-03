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
exports.postReview = void 0;
const Reviews_1 = require("../../models/Reviews");
const postReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { titleReview, reviewBody, score, reviewer, reviewReceiver } = req.body;
    try {
        const newReview = new Reviews_1.reviewsModel({
            titleReview,
            reviewBody,
            score,
            reviewer,
            reviewReceiver,
            date: new Date(),
        });
        yield newReview.save();
        res.status(201).json(newReview);
    }
    catch (error) {
        console.error("ERROR POST REVIEW", error);
    }
});
exports.postReview = postReview;
