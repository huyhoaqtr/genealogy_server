/**
 * Author: Jinn
 * Date: 2024-10-24
 */

class ApiError extends Error {
    statusCode: number; 
  
  /**
   * Constructor for ApiError.
   * @param {number} statusCode - The HTTP status code for the error.
   * @param {string} message - The error message.
   */
    constructor(statusCode: number, message: string) {
      super(message);
      this.name = `[ApiError] ${this.message}`;
      this.statusCode = statusCode;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  export default ApiError;
  