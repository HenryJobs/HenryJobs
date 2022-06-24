import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface iPayload {
  _id: string;
  iat: number;
  exp: number;
}

export const TokenValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("authToken");

  if (!token)
    return res
      .status(401)
      .send("unauthorized access is denied due to invalid credentials");

  const payload = jwt.verify(
    token,
    process.env.TOKEN_SECRET || "TOKENTRES"
  ) as iPayload;
  //para guardar el id del usuario en el req
  req.userId = payload._id;

  next();
};
