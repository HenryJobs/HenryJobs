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
exports.reactivateReviews = void 0;
const softdelete_1 = require("../../libs/softdelete");
const reactivateReviews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idReview } = req.body;
    try {
        if (idReview) {
            const reactivateById = yield (0, softdelete_1.reactivate)({
                modelName: "reviews",
                id: idReview,
            });
            if (reactivateById) {
                res.status(200).json("reactivated");
            }
            else {
                res.status(404).send("no review found");
            }
        }
        else {
            res.status(404).send("falta data");
        }
    }
    catch (err) {
        console.error(err);
    }
});
exports.reactivateReviews = reactivateReviews;
