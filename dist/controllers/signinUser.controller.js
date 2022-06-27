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
exports.signin = void 0;
const User_1 = require("../models/User");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { TOKEN_SECRET } = process.env;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield User_1.userModel.findOne({ email: email });
    console.log("este es el user de findOne por email -> ", user);
    //valida usuario
    if (!user) {
        return res.status(400).send("Incorrect user information (code: 001)");
    }
    // ver por qué carajo no funciona!!
    const correctPassword = yield user.validatePassword(password);
    console.log("password -> ", correctPassword);
    if (!correctPassword)
        return res.status(400).send("Incorrect user information (code: 002)");
    //Si ambos son correctos se genera un token que expira en 24hrs
    const token = jsonwebtoken_1.default.sign({ id: user._id }, TOKEN_SECRET || "TOKENTEST", { expiresIn: 60 * 60 * 24 });
    res
        .header("authToken", token)
        .send(`Welcome
             ${user.firstName} 
             ${user.lastName}!`);
});
exports.signin = signin;
