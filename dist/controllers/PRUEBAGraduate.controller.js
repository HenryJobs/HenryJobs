"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PruebaGraduate = void 0;
const PruebaGraduate = (req, res) => {
    const { userId, userType, userfirtsName, userLastname } = req;
    res.send(`Hola desde Graduados. Tu nombre es ${userfirtsName} ${userLastname} y eres un usuario de tipo ${userType}`);
};
exports.PruebaGraduate = PruebaGraduate;
