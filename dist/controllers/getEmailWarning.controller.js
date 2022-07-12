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
exports.getEmailWarning = void 0;
const User_1 = require("../models/User");
const emailer_1 = require("./config/emailer");
const getEmailWarning = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        if (id) {
            const user = yield User_1.userModel.findById(id);
            if (user) {
                console.log("user dentro del if ", user);
                const allEmail = {
                    _id: user === null || user === void 0 ? void 0 : user._id,
                    name: user === null || user === void 0 ? void 0 : user.name,
                    email: user === null || user === void 0 ? void 0 : user.email
                };
                (0, emailer_1.sendEmailWarning)(allEmail === null || allEmail === void 0 ? void 0 : allEmail.email, allEmail === null || allEmail === void 0 ? void 0 : allEmail.name);
                return res.status(200).json(allEmail);
            }
        }
        res.status(404).send("Mail not found");
    }
    catch (err) {
        res.status(500).send("El server crasheó papá");
    }
});
exports.getEmailWarning = getEmailWarning;
