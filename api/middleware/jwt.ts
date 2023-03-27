import jwt from "jsonwebtoken";
import { Response, NextFunction, Request } from "express";
import { createError } from "../utils/createError";

interface TokenPayload {
  id: string;
  isSeller: boolean;
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: string = req.cookies.accessToken;
  if (!token) next(createError(401, "You are not authenticated!"));

  console.log('1')
  try {
    console.log('2');
    
    const decodedToken = jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) as TokenPayload;
    console.log('checking')
    req.userId = decodedToken.id;
    req.isSeller = decodedToken.isSeller;
    next();
  } catch (error) {
    next(createError(403, "Token is not valid!"));
  }
};
