/**
 * Author: Jinn
 * Date: 2024-10-30
 */

import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/api-error";
import { Role } from "~/utils/type";

const permission = (permission: Role[]) => {
  return (req: any, res: any, next: any) => {
    const role = req.user.role;
    if (!role) {
      return next(
        new ApiError(StatusCodes.FORBIDDEN, "Bạn không có quyền truy cập")
      );
    }
    if (!permission.includes(role)) {
      return next(
        new ApiError(StatusCodes.FORBIDDEN, "Bạn không có quyền truy cập")
      );
    }
    next();
  };
};

export default permission;
