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
const User_1 = require("../../models/User");
const getEmailContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name, firstName, lastName } = req.body;
    try {
        const emailContact = yield User_1.userModel.findOne({ email: email });
    }
    catch (err) {
        console.error(err);
    }
});
exports.getEmailContact = getEmailContact;
