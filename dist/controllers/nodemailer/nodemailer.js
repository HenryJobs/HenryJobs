"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
//pcmjcdzyfrgflexq
const nodemailer_1 = __importDefault(require("nodemailer"));
const User_1 = require("../../models/User");
exports.transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    // service: "gmail",
    port: 465,
    secure: true,
    auth: {
        user: 'gaerca123@gmail.com',
        pass: 'pcmjcdzyfrgflexq',
    },
});
exports.transporter.verify().then(() => {
    console.log('Ready for send emails');
});
let info = exports.transporter.sendMail({
    from: '"Forgot password " <gaerca123@gmail.com>',
    to: User_1.User.arguments,
    subject: "Forgot password",
    html: '<b>Please click on the following link, or paste this into your browser to complete the process:</b><a href="${verificaty}" ></a>'
});
// export const lala = (email: any) => {
//     transporter.sendMail(email, (err: any, data: any) => {
//         if(err) {
//             console.log(err)
//         } else {
//             console.log("Email", data.accepted)
//         }
//     })
// }
// export const Register =  (a: any, b: any) => {
//     return {
//         from: "gaerca123@gmail.com",
//         to: `${a}`,
//         subject: "register",
//         text: ` ${b}, you are now registered `
//     }
// }
