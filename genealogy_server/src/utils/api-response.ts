/**
 * Author: Jinn
 * Date: 2024-10-25
 */

import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ApiResponse } from "~/utils/type";

/**
 * Sends a success response to the client.
 *
 * @param {Response} res - The Express response object.
 * @param {string} message - The response message.
 * @param {any} data - The response data. Defaults to null.
 * @param {number} statusCode - The HTTP status code. Defaults to 200.
 * @returns {Response} - Returns the response object.
 */
export function sendSuccessResponse(
  res: Response,
  message: string,
  data: any = null,
  statusCode: number = StatusCodes.OK
) {
  const response: ApiResponse = {
    statusCode,
    message,
    data: data ?? undefined,
  };
  return res.status(statusCode).json(response);
}

/**
 * Sends an error response to the client.
 *
 * @param {Response} res - The Express response object.
 * @param {string} message - The error message.
 * @param {any} errors - The error details. Defaults to null.
 * @param {number} statusCode - The HTTP status code. Defaults to 500.
 * @returns {Response} - Returns the response object.
 */
export function sendErrorResponse(
  res: Response,
  message: string,
  errors: any = null,
  statusCode: number = StatusCodes.INTERNAL_SERVER_ERROR
) {
  const response: ApiResponse = {
    statusCode,
    message,
    errors,
  };
  return res.status(statusCode).json(response);
}
