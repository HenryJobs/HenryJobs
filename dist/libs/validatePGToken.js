"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePGToken = void 0;
const validatePGToken = (req, res, next) => {
    const { userType } = req;
    if (userType !== 1) {
        res
            .status(401)
            .send("Unauthorized access is denied due to invalid credentials");
    }
    next();
};
exports.validatePGToken = validatePGToken;
