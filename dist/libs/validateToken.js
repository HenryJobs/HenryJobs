"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenValidation = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { TOKEN_SECRET } = process.env;
//Valida si el tipo del usuario es el correcto
// const validateUserTypes = (
//   req: Request,
//   res: Response,
//   next: NextFunction,
//   type: number
// ) => {
//   const { userType } = req;
//   if (userType !== type) {
//     return res.status(401).send("Unauthorized access is denied due to user");
//   } else {
//     return next();
//   }
// };
const tokenValidation = (req, res, next) => {
    try {
        const token = req.header("authToken");
        if (!token) {
            return res
                .status(401)
                .send("Unauthorized access is denied due to invalid credentials");
        }
        const payload = jsonwebtoken_1.default.verify(token, TOKEN_SECRET || "TOKENTRES");
        console.log("payload--->", payload);
        //para guardar el id del usuario en el req
        req.userId = payload.id;
        req.userType = payload.type;
        req.userPremium = payload.premium;
        req.userfirtsName = payload.name;
        req.userLastname = payload.lastname;
        next();
    }
    catch (error) {
        console.error("Error JWT--->", error);
    }
};
exports.tokenValidation = tokenValidation;
// export const validatePremiumToken = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const { userPremium } = req;
//   if (!userPremium) {
//     return res
//       .status(401)
//       .send("Unauthorized access is denied, you need to be premium");
//   }
//   return next();
// };
// export const validatePGToken = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   validateUserTypes(req, res, next, 1);
// };
// export const validateGraduateToken = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   validateUserTypes(req, res, next, 2);
// };
// export const validateRecruiterToken = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   validateUserTypes(req, res, next, 3);
// };
// export const validateStaffToken = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   validateUserTypes(req, res, next, 4);
// };
// export const validateBusinessToken = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   validateUserTypes(req, res, next, 5);
// };
