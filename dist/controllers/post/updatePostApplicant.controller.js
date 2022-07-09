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
exports.updatePostApplicantStatus = void 0;
const Post_1 = require("../../models/Post");
const updatePostApplicantStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { userId, step } = req.body;
    try {
        let post = yield Post_1.postModel.findById(id);
        if (!(post === null || post === void 0 ? void 0 : post.active)) {
            return res.status(404).json("this item has been removed");
        }
        const applicants = post === null || post === void 0 ? void 0 : post.applicants;
        let applicantsUpdated = applicants === null || applicants === void 0 ? void 0 : applicants.map((applicant) => {
            if (!(applicant.userId === userId))
                return applicant;
            return Object.assign(Object.assign({}, applicant), { step });
        });
        yield (post === null || post === void 0 ? void 0 : post.updateOne({ $set: { applicants: applicantsUpdated } }));
        res.status(200).json(post);
    }
    catch (err) {
        console.error(err);
    }
    ;
});
exports.updatePostApplicantStatus = updatePostApplicantStatus;
