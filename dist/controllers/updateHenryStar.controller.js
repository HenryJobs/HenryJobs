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
        console.log(user, "esto es user");
        console.log(pushed, "esto es pushed");
        if (!(pushed === null || pushed === void 0 ? void 0 : pushed.includes(userId))) {
            yield (user === null || user === void 0 ? void 0 : user.updateOne({
                $push: { stars: { userId: userId, numero: numero } },
            }));
            console.log(pushed, "pushed despues de push");
        }
        else {
            const henryStar = user === null || user === void 0 ? void 0 : user.stars;
            let starUpdated = henryStar === null || henryStar === void 0 ? void 0 : henryStar.map((star) => {
                if (!(star.userId === userId))
                    return star;
                return Object.assign(Object.assign({}, star), { numero });
            });
            console.log(henryStar, "esto es henryStar");
            yield (user === null || user === void 0 ? void 0 : user.updateOne({ $set: { stars: starUpdated } }));
        }
        return res.status(200).json(user);
    }
    catch (err) {
        console.error(err);
    }
});
exports.updateStar = updateStar;
