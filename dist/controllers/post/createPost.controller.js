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
exports.createPost = void 0;
const Post_1 = require("../../models/Post");
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { posterUser: _id, text, imgVideo, image, date, workModality, languages, technologies, backFront, country } = req.body;
    try {
        const post = yield Post_1.postModel.create({
            posterUser: _id,
            // postBusiness: _id,
            text,
            imgVideo,
            image,
            date,
            workModality,
            languages,
            technologies,
            backFront,
            country
        });
        res.status(201).json(post);
    }
    catch (err) {
        console.error(err);
    }
    ;
});
exports.createPost = createPost;
