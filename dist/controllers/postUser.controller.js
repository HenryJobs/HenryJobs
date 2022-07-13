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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const User_1 = require("../models/User");
const emailer_1 = require("./config/emailer");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { TOKEN_SECRET } = process.env;
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, lastName, userName, email, password, profileImage, banner, userTypes, technologies, country, city, backFront, languages, otherStudies, workModality, curriculumCounter, premium, stars, allStars, acercaDe, linkedin, github, gmail } = req.body;
    try {
        let emailUser = yield User_1.userModel.findOne({
            email: email,
            active: true
        });
        if (!name || !userName || !email || !password) {
            return res.status(400).json({ msg: "Some fields are required" });
        }
        if (email === (emailUser === null || emailUser === void 0 ? void 0 : emailUser.email)) {
            console.log("email forro", email);
            return res.status(200).send("next");
        }
        else {
            const user = yield User_1.userModel.create({
                name,
                lastName,
                userName,
                email,
                password,
                userTypes,
                profileImage,
                banner,
                technologies,
                country,
                city,
                backFront,
                languages,
                otherStudies,
                workModality,
                curriculumCounter,
                premium,
                stars,
                allStars,
                acercaDe,
                linkedin,
                github,
                gmail
            });
            (0, emailer_1.sendMail)(email);
            (0, emailer_1.sendPassword)(email, password);
            yield user.save();
            // crea un token y lo manda al header
            const token = jsonwebtoken_1.default.sign({
                id: user._id,
                type: user.userTypes,
                premium: user.premium,
                name: user.name,
                lastname: user.lastName,
            }, TOKEN_SECRET || "TOKENTEST", { expiresIn: 60 * 60 * 24 });
            res.header("authToken", token).status(201).json(user);
            // res.status(201).json(user)
        }
        console.log("ata aca bro");
    }
    catch (error) {
        console.error(error);
    }
});
exports.createUser = createUser;
