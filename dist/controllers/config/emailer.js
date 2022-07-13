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
exports.contact = exports.sendEmailWarning = exports.sendPassword = exports.sendMail = exports.createTrans = void 0;
////pcmjcdzyfrgflexq
//ngtzgzujwpjimtla
const nodemailer_1 = __importDefault(require("nodemailer"));
const createTrans = () => __awaiter(void 0, void 0, void 0, function* () {
    const transport = nodemailer_1.default.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "henryjobsproject@gmail.com",
            pass: "ngtzgzujwpjimtla",
        },
    });
    return transport;
});
exports.createTrans = createTrans;
const sendMail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = yield (0, exports.createTrans)();
    const info = transporter.sendMail({
        from: "<henryjobsproject@gmail.com>",
        to: email,
        subject: "registro",
        text: `Bienvenido a Henry Jobs, te encuentras actualmente registrado`,
    });
    console.log("message sent", info.messageId);
    return;
});
exports.sendMail = sendMail;
const sendPassword = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = yield (0, exports.createTrans)();
    const info = transporter.sendMail({
        from: "<henryjobsproject@gmail.com>",
        to: email,
        subject: "contraseña",
        text: `tu contraseña es ${password}`,
    });
    console.log("message sent", info.message);
    return;
});
exports.sendPassword = sendPassword;
const sendEmailWarning = (email, user) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = yield (0, exports.createTrans)();
    const info = transporter.sendMail({
        from: "<henryjobsproject@gmail.com>",
        to: email,
        subject: "registro",
        text: `Hola ${user}, detectamos recientemente que tus postulaciones en el período acordado por contrato no estaría cumpliénse. Por favor, te pedimos que puedas ponerte al corriente con las postulaciones enviadas a empresas`,
    });
    console.log("message sent", info.messageId);
    return;
});
exports.sendEmailWarning = sendEmailWarning;
const contact = (email, falopa) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = yield (0, exports.createTrans)();
    const info = yield transporter.sendMail({
        from: "<henryjobsproject@gmail.com>",
        to: email,
        subject: "contacto",
        text: `Hola, te ha contactado un reclutador/empresa ${falopa}`,
    });
    console.log("message sent", info.messageId);
    return;
});
exports.contact = contact;
