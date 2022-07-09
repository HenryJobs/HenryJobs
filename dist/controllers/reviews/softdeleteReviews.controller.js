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
exports.softdeleteReviews = void 0;
const softdelete_1 = require("../../libs/softdelete");
const softdeleteReviews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idReview } = req.params;
    try {
        if (idReview) {
            const deleteById = yield (0, softdelete_1.softDelete)({
                modelName: "reviews",
                id: idReview,
            });
            if (deleteById) {
                res.status(200).json("deleted");
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
exports.softdeleteReviews = softdeleteReviews;
