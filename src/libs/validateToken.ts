import { Request, Response, NextFunction } from "express";
import { payloadInterface } from "../controllers/interfaces/userInterface.controller";

import jwt from "jsonwebtoken";

const { TOKEN_SECRET } = process.env;

//Valida si el tipo del usuario es el correcto
const validateUserTypes = (
  req: Request,
  res: Response,
  next: NextFunction,
  type: number
) => {
  const { userType } = req;
  if (userType !== type) {
    return res.status(401).send("Unauthorized access is denied due to user");
  } else {
    return next();
  }
};

export const tokenValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("authToken");

  if (!token) {
    return res
      .status(401)
      .send("Unauthorized access is denied due to invalid credentials");
  }

  const payload = jwt.verify(
    token,
    TOKEN_SECRET || "TOKENTRES"
  ) as payloadInterface;

  //para guardar el id del usuario en el req
  req.userId = payload.id;
  req.userType = payload.type;
  req.userPremium = payload.premium;
  req.userfirtsName = payload.firstname;
  req.userLastname = payload.lastname;

  next();
};
export const validatePremiumToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userPremium } = req;

  if (!userPremium) {
    return res
      .status(401)
      .send("Unauthorized access is denied, you need to be premium");
  }

  return next();
};
export const validatePGToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validateUserTypes(req, res, next, 1);
};

export const validateGraduateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validateUserTypes(req, res, next, 2);
};

export const validateRecruiterToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validateUserTypes(req, res, next, 3);
};

export const validateStaffToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validateUserTypes(req, res, next, 4);
};

export const validateBusinessToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validateUserTypes(req, res, next, 5);
};
