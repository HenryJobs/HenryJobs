import { Request, Response, NextFunction } from "express";
import { payloadInterface } from "../controllers/interfaces/userInterface.controller";

import jwt from "jsonwebtoken";

const { TOKEN_SECRET } = process.env;

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
  console.log("payload", payload);
  //para guardar el id del usuario en el req
  req.userId = payload.id;
  req.userType = payload.type;
  req.userPremium = payload.premium;
  req.userfirtsName = payload.firstname;
  req.userLastname = payload.lastname;

  next();
};
