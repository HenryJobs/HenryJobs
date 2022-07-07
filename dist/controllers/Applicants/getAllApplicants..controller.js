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
exports.getAllApplicant = void 0;
const Applicants_1 = require("../../models/Applicants");
const getAllApplicant = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let applicant = yield Applicants_1.applicantsModel.find().populate("appUser");
        if (applicant) {
            res.status(200).json(applicant);
        }
    }
    catch (err) {
        console.log(err);
    }
});
exports.getAllApplicant = getAllApplicant;
