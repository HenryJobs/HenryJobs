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
exports.getAllBusiness = void 0;
const Bussiness_1 = require("../../models/Bussiness");
const getAllBusiness = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBusiness = yield Bussiness_1.BusinessModel.find();
        if (allBusiness) {
            const businessMap = allBusiness.map((el) => {
                return ({
                    _id: el.id,
                    name: el.name,
                    email: el.email,
                    password: el.password,
                    description: el.description,
                    jobSummary: el.jobSummary,
                    image: el.image,
                    country: el.country
                });
            });
            res.status(200).json(businessMap);
        }
    }
    catch (err) {
        console.error(err);
    }
});
exports.getAllBusiness = getAllBusiness;
