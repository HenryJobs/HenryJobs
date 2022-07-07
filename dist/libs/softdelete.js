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
exports.reactivate = exports.softDelete = void 0;
const User_1 = require("../models/User");
const Reviews_1 = require("../models/Reviews");
const Post_1 = require("../models/Post");
const postComent_1 = require("../models/postComent");
const softDelete = (querys) => __awaiter(void 0, void 0, void 0, function* () {
    const id = querys.id;
    if (querys.modelName === "reviews") {
        const result = yield Reviews_1.reviewsModel.findByIdAndUpdate({ _id: id }, { $set: { active: false, dateSoftDelte: new Date() } });
        return result;
    }
    else if (querys.modelName === "post") {
        yield Post_1.postModel.findByIdAndUpdate({ _id: id }, { $set: { active: false, dateSoftDelte: new Date() } });
        return true;
    }
    else if (querys.modelName === "user") {
        yield User_1.userModel.findByIdAndUpdate({ _id: id }, { $set: { active: false, dateSoftDelte: new Date() } });
        return true;
    }
    else if (querys.modelName === "postComent") {
        yield postComent_1.postComent.findByIdAndUpdate({ _id: id }, { $set: { active: false, dateSoftDelte: new Date() } });
        return true;
    }
    else {
        return false;
    }
});
exports.softDelete = softDelete;
const reactivate = (querys) => __awaiter(void 0, void 0, void 0, function* () {
    const id = querys.id;
    if (querys.modelName === "reviews") {
        yield Reviews_1.reviewsModel.findByIdAndUpdate({ _id: id }, { $set: { active: true, dateSoftDelte: undefined } });
        return true;
    }
    else if (querys.modelName === "post") {
        yield Post_1.postModel.findByIdAndUpdate({ _id: id }, { $set: { active: true, dateSoftDelte: undefined } });
        return true;
    }
    else if (querys.modelName === "user") {
        yield User_1.userModel.findByIdAndUpdate({ _id: id }, { $set: { active: true, dateSoftDelte: undefined } });
        return true;
    }
    else if (querys.modelName === "postComent") {
        yield postComent_1.postComent.findByIdAndUpdate({ _id: id }, { $set: { active: true, dateSoftDelte: undefined } });
        return true;
    }
    else {
        return false;
    }
});
exports.reactivate = reactivate;
