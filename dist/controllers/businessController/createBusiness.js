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
exports.postBusiness = void 0;
const Bussiness_1 = require("../../models/Bussiness");
const emailer_1 = require("../config/emailer");
const postBusiness = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, description, jobSummary, image, country } = req.body;
    try {
        const business = yield Bussiness_1.BusinessModel.create({
            name,
            email,
            password,
            description,
            jobSummary,
            image,
            country
        });
        (0, emailer_1.sendMail)();
        res.status(201).json(business);
    }
    catch (err) {
        console.error(err);
    }
});
exports.postBusiness = postBusiness;
