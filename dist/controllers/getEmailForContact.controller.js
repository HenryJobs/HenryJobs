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
exports.getEmailContact = void 0;
const User_1 = require("../models/User");
const emailer_1 = require("./config/emailer");
const getEmailContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, emailBusiness } = req.params;
    try {
        if (id) {
            const user = yield User_1.userModel.findById(id);
            if (user) {
                console.log("user dentro del if ", user);
                const allEmail = {
                    _id: user === null || user === void 0 ? void 0 : user._id,
                    name: user === null || user === void 0 ? void 0 : user.name,
                    email: user === null || user === void 0 ? void 0 : user.email,
                };
                (0, emailer_1.contact)(allEmail === null || allEmail === void 0 ? void 0 : allEmail.email, emailBusiness);
                return res.status(200).json(emailBusiness);
            }
        }
        res.status(200).send("hola lucho");
    }
    catch (err) {
        res.status(500).send("El server crasheó papá");
    }
});
exports.getEmailContact = getEmailContact;
