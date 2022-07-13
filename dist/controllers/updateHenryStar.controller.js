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
exports.updateStar = void 0;
const User_1 = require("../models/User");
const updateStar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { userId, numero } = req.body;
    try {
        let user = yield User_1.userModel.findById(id);
        let pushed = user === null || user === void 0 ? void 0 : user.stars.map(e => e.userId);
        if (!(pushed === null || pushed === void 0 ? void 0 : pushed.includes(userId))) {
            yield (user === null || user === void 0 ? void 0 : user.updateOne({
                $push: { stars: { userId: userId, numero: numero } },
            }));
            let numeroMapped = user === null || user === void 0 ? void 0 : user.stars.map(el => el.numero);
            if (numeroMapped.length < 2) {
                console.log("entró al ife");
                console.log("-> numeroMapped", numeroMapped);
                return yield (user === null || user === void 0 ? void 0 : user.updateOne({ $set: { allStars: numeroMapped[0] } }));
            }
            let promedio = (numeroMapped === null || numeroMapped === void 0 ? void 0 : numeroMapped.reduce((acc, val) => {
                return acc + val;
            }, 0)) / (numeroMapped === null || numeroMapped === void 0 ? void 0 : numeroMapped.length);
            let promedioRedondo = Math.round(promedio);
            console.log("promedio -> ", promedioRedondo);
            yield (user === null || user === void 0 ? void 0 : user.updateOne({ $set: { allStars: promedioRedondo } }));
            console.log(pushed, "pushed despues de push");
        }
        // else {
        //     const henryStar = user?.stars
        //     let starUpdated: any = henryStar?.map((star: any) => {
        //         if(!(star.userId === userId)) return star;
        //         return { ...star, numero }
        //     })
        //     console.log(henryStar, "esto es henryStar")
        //     await user?.updateOne({ $set: { stars: starUpdated }});
        //     let numeroMapped: any | undefined = user?.stars.map(el => el.numero)
        //     let promedio = numeroMapped?.reduce((acc: number, val: number) => {
        //         acc + val
        //     }, 0) / numeroMapped?.length
        //     await user?.updateOne({ $set: { allStars: promedio }})
        // }
        return res.status(200).json(user);
    }
    catch (err) {
        console.error(err);
    }
});
exports.updateStar = updateStar;
