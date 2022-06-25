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
exports.deleteBusiness = void 0;
const Bussiness_1 = require("../../models/Bussiness");
const deleteBusiness = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        if (id) {
            const deleteById = yield Bussiness_1.BusinessModel.findOneAndDelete({ _id: id });
            if (deleteById) {
                const myDelete = {
                    _id: deleteById._id,
                    name: deleteById.name,
                    email: deleteById.email,
                    password: deleteById.password,
                    description: deleteById.description,
                    jobSummary: deleteById.jobSummary,
                    image: deleteById.image,
                    country: deleteById.country
                };
                return res.status(200).json(myDelete);
            }
            res.status(404).json({ msg: "Business does not exist" });
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Business ID not valid" });
    }
});
exports.deleteBusiness = deleteBusiness;
