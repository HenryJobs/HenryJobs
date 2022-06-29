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
exports.updateBusiness = void 0;
const Bussiness_1 = require("../../models/Bussiness");
const updateBusiness = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, email, password, description, jobSummary, image, country } = req.body;
    try {
        const business = yield Bussiness_1.BusinessModel.findByIdAndUpdate({ _id: id }, {
            name,
            email,
            password,
            description,
            jobSummary,
            image,
            country
        });
        res.status(201).json(business);
    }
    catch (err) {
        console.error(err);
    }
});
exports.updateBusiness = updateBusiness;
