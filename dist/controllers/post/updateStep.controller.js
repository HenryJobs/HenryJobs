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
exports.updateStep = void 0;
const Post_1 = require("../../models/Post");
const updateStep = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const { id } = req.params;
    const { userId, step, showStudent, showBusiness, name } = req.body;
    try {
        const post = yield Post_1.postModel.findById(id);
        const userIdProperty = (_a = post === null || post === void 0 ? void 0 : post.applicants) === null || _a === void 0 ? void 0 : _a.map(e => e.userId);
        const stepProperty = (_b = post === null || post === void 0 ? void 0 : post.applicants) === null || _b === void 0 ? void 0 : _b.map(e => e.step);
        const showStudentProperty = (_c = post === null || post === void 0 ? void 0 : post.applicants) === null || _c === void 0 ? void 0 : _c.map(e => e.showStudent);
        const showBusinessProperty = (_d = post === null || post === void 0 ? void 0 : post.applicants) === null || _d === void 0 ? void 0 : _d.map(e => e.showBusiness);
        console.log("el forro de userIdProperty", userIdProperty === null || userIdProperty === void 0 ? void 0 : userIdProperty.includes(userId));
        console.log("el forro de stepProperty", stepProperty === null || stepProperty === void 0 ? void 0 : stepProperty.includes(step));
        if ((userIdProperty === null || userIdProperty === void 0 ? void 0 : userIdProperty.includes(userId))
            && !(stepProperty === null || stepProperty === void 0 ? void 0 : stepProperty.includes(step))
            || (stepProperty === null || stepProperty === void 0 ? void 0 : stepProperty.includes(step))) {
            console.log("el forro de userIdProperty", userIdProperty);
            console.log("el forro de stepProperty", stepProperty);
            yield (post === null || post === void 0 ? void 0 : post.updateOne({ $unset: { applicants: { userId, step, showStudent, showBusiness } } }));
        }
        console.log("llega acá el forro");
        res.status(200).json(post);
    }
    catch (err) {
        console.error(err);
    }
    ;
});
exports.updateStep = updateStep;
