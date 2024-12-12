/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import { Request } from "express";
declare module "express" {
  export interface Request {
    user?: any;
  }
}
import { Multer } from 'multer';

declare global {
  namespace Express {
    interface Request {
      file?: Multer.File;  // Thêm thuộc tính `file` cho Request
      files?: Multer.File[]; // Nếu cần xử lý nhiều file (array)
    }
  }
}

