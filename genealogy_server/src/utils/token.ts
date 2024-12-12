/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import jwt from "jsonwebtoken";
import envConfig from "~/configs/environment";
import { JwtSignInPayload } from "~/utils/type";

/**
 * Generates a JSON Web Token that can be used for authentication.
 * @param {JwtPayload} payload - The payload to sign with the JWT secret.
 * @returns {string} The generated access token.
 */
const generateAccessToken = (payload: JwtSignInPayload): string => {
  return jwt.sign(payload, envConfig.JWT_SECRET, {
    expiresIn: envConfig.JWT_EXPIRES_IN,
  });
};

/**
 * Verifies the given access token using the JWT secret.
 * If the token is valid, returns the decoded payload.
 * If the token is invalid, returns null.
 * @param {string} token - The access token to verify.
 * @returns {JwtPayload | null} The decoded payload if the token is valid, or null if the token is invalid.
 */
const verifyAccessToken = (token: string) => {
  try {
    return jwt.verify(token, envConfig.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

export { generateAccessToken, verifyAccessToken };
