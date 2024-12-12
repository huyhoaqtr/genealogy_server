/**
 * Author: Jinn
 * Date: 2024-10-31
 */

/**
 * Author: Jinn
 * Date: 2024-10-31
 */

import { Router } from "express";
import authenticateJWT from "../middleware/authenticate-jwt";
import permission from "~/middleware/permission";
import { Role } from "~/utils/type";
import web3Controller from "~/controllers/web3.controller";
import { web3Upload } from "~/middleware/multer";

const router = Router();

router.use(authenticateJWT);

router
  /**
   *  @swagger
   *  /web3/upload-file-to-web3:
   *    post:
   *      tags: [Web3]
   *      summary: Upload file to web3
   *      requestBody:
   *        required: true
   *        content:
   *          multipart/form-data:
   *            schema:
   *              type: object
   *              properties:
   *                file:
   *                  type: string
   *                  format: binary
   *      responses:
   *        200:
   *          description: OK
   */
  .post(
    "/upload-file-to-web3",
    permission([Role.LEADER, Role.ADMIN]),
    web3Upload.single("file"),
    web3Controller.uploadFileToIPFSAndSmartContract
  );

export default router;
