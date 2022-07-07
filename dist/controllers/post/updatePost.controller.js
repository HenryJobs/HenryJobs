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
exports.updatePost = void 0;
const Post_1 = require("../../models/Post");
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const { id } = req.params;
    const { text, imgVideo, date, image, workModality, technologies, backFront, country, userId, step, showStudent, showBusiness, name } = req.body;
    try {
        const post = yield Post_1.postModel.findById(id);
        console.log("showStudent & business", showStudent, showBusiness);
        const userIdProperty = (_a = post === null || post === void 0 ? void 0 : post.applicants) === null || _a === void 0 ? void 0 : _a.map(e => e.userId);
        const stepProperty = (_b = post === null || post === void 0 ? void 0 : post.applicants) === null || _b === void 0 ? void 0 : _b.map(e => e.step);
        const showStudentProperty = (_c = post === null || post === void 0 ? void 0 : post.applicants) === null || _c === void 0 ? void 0 : _c.map(e => e.showStudent);
        const showBusinessProperty = (_d = post === null || post === void 0 ? void 0 : post.applicants) === null || _d === void 0 ? void 0 : _d.map(e => e.showBusiness);
        console.log(userIdProperty);
        console.log(stepProperty);
        console.log("student", showStudentProperty);
        console.log("business", showBusinessProperty);
        if (!(userIdProperty === null || userIdProperty === void 0 ? void 0 : userIdProperty.includes(userId))) {
            console.log("entré al primer if");
            console.log("userIdProperty -> ", userIdProperty);
            console.log("stepProperty -> ", stepProperty);
            console.log("showStudentProperty -> ", showStudentProperty);
            console.log("showBusinessProperty -> ", showBusinessProperty);
            yield (post === null || post === void 0 ? void 0 : post.updateOne({ $push: { applicants: { userId, step, showStudent, showBusiness } } }));
        }
        if ((userIdProperty === null || userIdProperty === void 0 ? void 0 : userIdProperty.includes(userId))
            && (stepProperty === null || stepProperty === void 0 ? void 0 : stepProperty.includes(step))
            && (showStudentProperty === null || showStudentProperty === void 0 ? void 0 : showStudentProperty.includes(showStudent))
            && (showBusinessProperty === null || showBusinessProperty === void 0 ? void 0 : showBusinessProperty.includes(showBusiness))) {
            yield (post === null || post === void 0 ? void 0 : post.updateOne({ $pull: { applicants: { userId, step, showStudent, showBusiness } } }));
        }
        const updated = yield Post_1.postModel.findByIdAndUpdate({ _id: id }, {
            text,
            imgVideo,
            date,
            image,
            workModality,
            technologies,
            backFront,
            country
        });
        console.log('llegó acá??');
        res.status(200).json(updated);
    }
    catch (err) {
        console.error(err);
    }
});
exports.updatePost = updatePost;
