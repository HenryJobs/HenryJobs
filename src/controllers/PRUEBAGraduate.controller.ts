import { Request, Response, NextFunction } from "express";

export const PruebaGraduate = (req: Request, res: Response) => {
  const { userId, userType, userfirtsName, userLastname } = req;
  res.send(
    `Hola desde Graduados. Tu nombre es ${userfirtsName} ${userLastname} y eres un usuario de tipo ${userType}`
  );
};
