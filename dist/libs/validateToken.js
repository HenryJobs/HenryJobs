"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenValidation = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { TOKEN_SECRET } = process.env;
const tokenValidation = (req, res, next) => {
    const token = req.header("authToken");
    if (!token) {
        return res
            .status(401)
            .send("Unauthorized access is denied due to invalid credentials");
    }
    const payload = jsonwebtoken_1.default.verify(token, TOKEN_SECRET || "TOKENTRES");
    console.log("payload", payload);
    //para guardar el id del usuario en el req
    req.userId = payload.id;
    req.userType = payload.type;
    req.userPremium = payload.premium;
    req.userfirtsName = payload.firstname;
    req.userLastname = payload.lastname;
    next();
};
exports.tokenValidation = tokenValidation;
