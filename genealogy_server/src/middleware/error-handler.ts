/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import { Request, Response, NextFunction } from "express";
import { getReasonPhrase, StatusCodes } from "http-status-codes";
import { MulterError } from "multer";
import envConfig from "~/configs/environment";
import ApiError from "~/utils/api-error";
import { sendErrorResponse } from "~/utils/api-response";

/**
 * Express error-handling middleware.
 * Handles instances of ApiError and formats the error response.
 * If no statusCode is provided, defaults to 500 (Internal Server Error).
 * Includes stack trace in the error response if in development mode.
 *
 * @param {ApiError} err - The error object, expected to be an instance of ApiError.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The next middleware function in the stack.
 */
const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const stack = envConfig.BUILD_MODE === "dev" ? err.stack : undefined;

  if (err instanceof ApiError) {
    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    const message = err.message || getReasonPhrase(statusCode);

    // Sử dụng helper sendErrorResponse
    return sendErrorResponse(res, message, stack, statusCode);
  }

  if (err instanceof MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      const statusCode = StatusCodes.BAD_REQUEST;
      const message = "File is too large. Maximum size is 10MB.";
      return sendErrorResponse(res, message, stack, statusCode);
    }
  }

  // Xử lý lỗi không mong muốn
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || getReasonPhrase(statusCode);

  return sendErrorResponse(res, message, stack, statusCode);
};

export default errorHandler;
