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
exports.deleteReviews = void 0;
const Reviews_1 = require("../../models/Reviews");
const deleteReviews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idReview } = req.params;
    try {
        if (idReview) {
            const deleteById = yield Reviews_1.reviewsModel.findByIdAndDelete({
                _id: idReview,
            });
            if (deleteById) {
                res.status(200).json(deleteById);
            }
            else {
                res.status(404).send("no review found");
            }
        }
        else {
            console.log("--->", idReview);
            res.status(404).send("falta data");
        }
    }
    catch (err) {
        console.error(err);
    }
});
exports.deleteReviews = deleteReviews;
