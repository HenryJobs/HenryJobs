"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBusinessToken = exports.validateStaffToken = exports.validateRecruiterToken = exports.validateGraduateToken = exports.validatePGToken = exports.validatePremiumToken = exports.tokenValidation = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { TOKEN_SECRET } = process.env;
//Valida si el tipo del usuario es el correcto
const validateUserTypes = (req, res, next, type) => {
    const { userType } = req;
    if (userType !== type) {
        return res.status(401).send("Unauthorized access is denied due to user");
    }
    else {
        return next();
    }
};
const tokenValidation = (req, res, next) => {
    const token = req.header("authToken");
    if (!token) {
        return res
            .status(401)
            .send("Unauthorized access is denied due to invalid credentials");
    }
    const payload = jsonwebtoken_1.default.verify(token, TOKEN_SECRET || "TOKENTRES");
    //para guardar el id del usuario en el req
    req.userId = payload.id;
    req.userType = payload.type;
    req.userPremium = payload.premium;
    req.userfirtsName = payload.firstname;
    req.userLastname = payload.lastname;
    next();
};
exports.tokenValidation = tokenValidation;
const validatePremiumToken = (req, res, next) => {
    const { userPremium } = req;
    if (!userPremium) {
        return res
            .status(401)
            .send("Unauthorized access is denied, you need to be premium");
    }
    return next();
};
exports.validatePremiumToken = validatePremiumToken;
const validatePGToken = (req, res, next) => {
    validateUserTypes(req, res, next, 1);
};
exports.validatePGToken = validatePGToken;
const validateGraduateToken = (req, res, next) => {
    validateUserTypes(req, res, next, 2);
};
exports.validateGraduateToken = validateGraduateToken;
const validateRecruiterToken = (req, res, next) => {
    validateUserTypes(req, res, next, 3);
};
exports.validateRecruiterToken = validateRecruiterToken;
const validateStaffToken = (req, res, next) => {
    validateUserTypes(req, res, next, 4);
};
exports.validateStaffToken = validateStaffToken;
const validateBusinessToken = (req, res, next) => {
    validateUserTypes(req, res, next, 5);
};
exports.validateBusinessToken = validateBusinessToken;
