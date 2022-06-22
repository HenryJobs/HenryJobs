import { Request, Response, NextFunction } from "express";
import { userModel, User } from "../models/User";

import jwt from "jsonwebtoken";

export const signin = (req: Request, res: Response) => {
  res.send("hola desde signig");
};
