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
exports.sendMail = exports.createTrans = void 0;
////pcmjcdzyfrgflexq
const nodemailer_1 = __importDefault(require("nodemailer"));
const createTrans = () => __awaiter(void 0, void 0, void 0, function* () {
    const transport = nodemailer_1.default.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'gaerca123@gmail.com',
            pass: 'pcmjcdzyfrgflexq',
        }
    });
    return transport;
});
exports.createTrans = createTrans;
const sendMail = (to, who) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = yield (0, exports.createTrans)();
    const info = transporter.sendMail({
        from: '<henryjobsproject@gmail.com>',
        to: `${to}`,
        subject: "registro",
        text: `${who}, te encuentras registrado`
    });
    console.log("message sent", info.messageId);
    return;
});
exports.sendMail = sendMail;
