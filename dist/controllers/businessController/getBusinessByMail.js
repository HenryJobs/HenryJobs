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
exports.getBusinessEmail = void 0;
const Bussiness_1 = require("../../models/Bussiness");
const getBusinessEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    try {
        if (email) {
            const businessEmail = yield Bussiness_1.BusinessModel.findOne({ email: email });
            if (businessEmail) {
                const allEmail = {
                    _id: businessEmail._id,
                    name: businessEmail.name,
                    email: businessEmail.email,
                    password: businessEmail.password,
                    description: businessEmail.description,
                    jobSummary: businessEmail.jobSummary,
                    image: businessEmail.image,
                    country: businessEmail.country
                };
                return res.status(200).json(allEmail);
            }
        }
    }
    catch (err) {
        console.error(err);
    }
});
exports.getBusinessEmail = getBusinessEmail;
