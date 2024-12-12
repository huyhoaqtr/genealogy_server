/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "~/utils/token";
import ApiError from "~/utils/api-error";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { JwtPayload } from "jsonwebtoken";
interface AuthenticatedRequest extends Request {
  user?: string | JwtPayload;
}

/**
 * Middleware to authenticate the request using a JSON Web Token (JWT).
 * The JWT is expected to be in the Authorization header of the request.
 * If the token is invalid, the middleware will return an error response
 * with a 401 status code.
 * If the token is valid, the middleware will add a `user` property to the
 * request object containing the user information from the token.
 * The middleware will then call the next function in the middleware stack.
 */
const authenticateJWT = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return next(
      new ApiError(StatusCodes.UNAUTHORIZED, ReasonPhrases.UNAUTHORIZED)
    );
  }

  const token = authorizationHeader.split(" ")[1];
  const user = verifyAccessToken(token);

  if (!user) {
    return next(
      new ApiError(StatusCodes.FORBIDDEN, ReasonPhrases.UNAUTHORIZED)
    );
  }

  req.user = user;
  next();
};

export default authenticateJWT;
