/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
  /**
   * @description
   * This function is a part of the CORS policy and is used to check
   * if the request origin is allowed to access the API.
   * @param {string | undefined} origin - The origin of the request
   * @param {(err: any, allow?: boolean) => void} callback - The callback function
   * that will be called with the result of the origin check.
   * If the origin is allowed, the callback will be called with
   * `null` as the first argument and `true` as the second argument.
   * If the origin is not allowed, the callback will be called with
   * an `ApiError` object as the first argument and `undefined` as
   * the second argument.
   */
  origin: function (
    origin: string | undefined,
    callback: (err: any, allow?: boolean) => void
  ) {
    return callback(null, true);
  },

  optionsSuccessStatus: 200,
  credentials: true,
};
