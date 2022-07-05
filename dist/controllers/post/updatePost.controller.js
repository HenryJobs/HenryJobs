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
    const { id } = req.params;
<<<<<<< HEAD
    const { text, imgVideo, date, image, workModality, technologies, backFront, country, } = req.body;
    try {
        // const post = await postModel.findById(id)
        // if (!post?.applicants.hasOwnProperty(userId) === userId) {
        //     console.log("entré al if que agrega")
        //     console.log("este es el userId", userId)
        //     await post?.updateOne({ $push: { applicants: userId }})
        // }
        // if (post?.applicants.hasOwnProperty(userId) === userId) {
        //     console.log("entré al if que saca")
        //     await post?.updateOne({ $pull: { applicants: userId } })
        // }
=======
    const { text, imgVideo, date, image, workModality, technologies, backFront, country } = req.body;
    try {
>>>>>>> fb10e07c83abf5f65e45eae8ebbbe184a52ad546
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
<<<<<<< HEAD
        // res.status(200).json(updated)
=======
>>>>>>> fb10e07c83abf5f65e45eae8ebbbe184a52ad546
        res.status(200).json(updated);
    }
    catch (err) {
        console.error(err);
    }
});
exports.updatePost = updatePost;
