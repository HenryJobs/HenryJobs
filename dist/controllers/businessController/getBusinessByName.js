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
exports.getBusinessByName = void 0;
const Bussiness_1 = require("../../models/Bussiness");
const getBusinessByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.query;
    if (name) {
        const business = yield Bussiness_1.BusinessModel.findOne({ name: name });
        try {
            if (business) {
                const allNames = {
                    _id: business._id,
                    name: business.name,
                    email: business.email,
                    password: business.password,
                    description: business.description,
                    jobSummary: business.jobSummary,
                    image: business.image,
                    country: business.country
                };
                return res.status(200).json(allNames);
            }
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ msg: "Business ID not valid" });
        }
    }
});
exports.getBusinessByName = getBusinessByName;
